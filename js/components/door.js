components.door = {
    props: ['signalId', 'x', 'y', 'oneColor', 'zeroColor', 'size', 'height', 'width', 'valueMode'],
    template: /*html*/`
                <i class="ui" :class='[iconColor]' :style="styleObject" v-bind="{ id: svgId}" ref="doorElement">
                    <svg :width="w" :height="h"  :viewBox.camel="viewBox" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0" y="0" :width="w" :height="h"/>
                    </svg>
                    <span style="display: none;">{{value}}</span>
                    <span style="display:none"> {{valueRewindMode}} </span>
                </i>
                `,
    data() {
        return {
            value: null,
            svgId: (Math.floor(Math.random() * (1000 - 100))) + Date.now() + '_' + this.signalId,
            iconColor: null,
            w: this.width,
            h: this.height,
            viewBox: '0 0 '+this.width+ ' '+ this.height,
            styleObject: {
                position: 'absolute',
                top: this.y + '%',
                left: this.x + '%'
            },
            valueRewindMode: null,
            rewindMode : rewindValuesMode,
            globalRewind : globalRewindUpdate
        }
    },
    created() {
        eventBus.subscribe('rewindValuesModeChanged', (newVal) => {
          this.rewindMode = newVal;
        });
        eventBus.subscribe('globalRewindUpdateChanged', (newVal) => {
           this.globalRewind = newVal;
        });

      },
    watch: {

        rewindMode(newVal, oldVal) {
            this.rewindCheck()
        },
        globalRewind(newVal, oldVal) {
            this.rewindCheck()
        },

    },
    mounted(){

        this.checkValueMode()

        // Observer for push id to global array
        const doorElement = this.$refs.doorElement;
        if (doorElement) {
            let observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (!visibleHistoricalValue.includes(this.signalId)) {
                            visibleHistoricalValue.push(this.signalId);
                        }
                    } else {
                        const index = visibleHistoricalValue.indexOf(this.signalId);
                        if (index > -1) {
                            visibleHistoricalValue.splice(index, 1);
                        }
                    }
                });
            });
            observer.observe(doorElement);
        } else {
            console.error('Ref element is not available.');
        }
    },
    updated() {
        this.rewindCheck()
    },
    methods: {
        checkValueMode(){
            switch (this.valueMode) {
                case "filtered":
                    this.value = valueFiltered[this.signalId];
                    break;
                case "escalated":
                    this.value = valueEscalated[this.signalId];
                    break;
                default:
                case "raw":
                    this.value = valueRaw[this.signalId];
                    break;
            }
    
            if (this.value == null){
                this.value = 'N/A'
            }
        },
        getIconColor(value){
            if (value  == 1) {
                this.iconColor = 'glow color-fill-type-' + this.oneColor ;
            } else if (value  == 0) {
                this.iconColor = 'glow color-fill-type-'+ this.zeroColor ;
            } else {
                this.valueText = 'N/A'
                this.iconColor = 'glow color-fill-type-dark';
            }
        },
        rewindCheck() {
            if (!isNaN(this.value) && !this.rewindMode == true) {
                this.checkValueMode()
                this.getIconColor(this.value)
            }
            else{
                if(visibleHistoricalValue.includes(this.signalId)){
                setTimeout(() => {
                    if (this.signalId in valueHistorical) {
                        this.valueRewindMode = parseFloat(valueHistorical[this.signalId][0].Value).toFixed(this.decimals)
                        this.getIconColor(this.valueRewindMode)
                   
                    } else {
                        this.value = 'N/A';
                    }
                }, 500);   
            }else{
                return;
            } 
            }
        }
    }
};