components.iconTextDigitalLine = {
    props: ['signalId', 'icon', 'title', 'size', 'zeroColor', 'oneColor', 'valueMode', 'elementSize', 'activeNumber', 'inactiveNumber'],
    template:   /*html*/`
   
        <div class="col-30 align-top-center"  ref="iconTextDigitalElement">
            <i class="ui" :class= '[iconSize, iconColor]' v-bind="{ id: rndID}"></i>
            <span style="display: none;">{{value}}</span>
            <span style="display: none;">{{valueRewindMode}}</span>
        </div>

        <div v-if="showTitle"><span :class= '[valueTextColor]'> {{title}}</span></div>


         `,

    data() {
        return {
            value: valueRaw[this.signalId],
            iconSize: 'icon-size-' + this.size,
            iconColor: null,
            rndID:  (Math.floor(Math.random() * (1000 - 100))) + Date.now() + '_' + this.signalId,
            valueTextColor: null,
            elementSizeClass: null,
            showTitle: false,
            valueRewindMode: null,
            rewindMode: rewindValuesMode,
            globalRewind: globalRewindUpdate,
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
            this.rewindCheck();
        },
        globalRewind(newVal, oldVal) {
            this.rewindCheck();
        },
    },
    mounted(){

        const svgContent = iconRegistry[this.icon]
        $( "#"+this.svgId).html(svgContent)

        if ( typeof(this.title) != "undefined" )  { this.showTitle = true }
        switch (this.elementSize){
            case "small":
                this.elementSizeClass = "h-mini-20";
                break;
            case "large":
                this.elementSizeClass = "h-large-40";
                break;
            default:
                this.elementSizeClass = "";
        }

      this.rewindCheck()

        // Observer for push id to global array
        const iconTextDigitalElement = this.$refs.iconTextDigitalElement;
        if (iconTextDigitalElement) {
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
            observer.observe(iconTextDigitalElement);
        } else {
            console.error('Ref element is not available.');
        }

    },
    updated(){

        const svgContent = iconRegistry[this.icon];
        $("#" + this.rndID).html(svgContent);
        
        this.rewindCheck()
    },

    methods:{
        getIconColor(value){
            let color
            if ((value == 1 ) || (value == this.activeNumber && this.activeNumber))  {
                color = 'glow color-fill-type-' + this.oneColor + '-light' ;
            } else if ((value == 0 ) || (value == this.inactiveNumber && this.inactiveNumber)) {
                color = 'glow color-fill-type-'+ this.zeroColor ;
            } else {
                color = null
            }
            return color
        },
        getTextColor(value){
            let color
            if ((value == 1 ) || (value == this.activeNumber && this.activeNumber))  {
                color = 'color-text-type-' + this.oneColor + '-light';
            } else if ((value == 0 ) || (value == this.inactiveNumber && this.inactiveNumber)) {
                color = 'color-text-type-white' ;
            }
            return color
        },
        rewindCheck() {
            if (!isNaN(this.value) && !this.rewindMode) {
                this.iconColor = this.getIconColor(this.value)
                this.valueTextColor = this.getTextColor(this.value)
            } else {
                if(visibleHistoricalValue.includes(this.signalId)){
                setTimeout(() => {
                    if (this.signalId in valueHistorical) {
                        this.valueRewindMode = parseFloat(valueHistorical[this.signalId][0].Value);
                        this.iconColor = this.getIconColor(this.valueRewindMode)
                        this.valueTextColor = this.getTextColor(this.valueRewindMode)
                    }
                }, 500);
            }else{
                return;
            }
            }
        },

    }
};

