components.iconTriEstateOneSignalDigitalLine = {
    props: ['signalId', 'oneOptionValue', 'twoOptionValue', 'threeOptionValue', 'icon', 'title', 'size', 'OptionOneText', 'OptionTwoText', 'OptionThreeText', 'OptionOneColor', 'OptionTwoColor', 'OptionThreeColor'],
    template: /*html*/`
              <li ref="iconTriEstateOneSignalElement">
              
                <div class="col-40 align-middle-center">
                <i class="ui" :class= '[iconSize, iconColor]' :id="svgId"></i>
                </div>
                <div class="col-90-min"><span>{{title}}</span></div>
                <div class="col-100 align-middle-center" :class= '[valueTextColor, valueCellColor]'><span class="font-bold glow" style="font-size: 110%!important">{{valueText}}</span></div>
                <span style="display: none;">{{value}}</span> 
                <span style="display: none;">{{valueRewindMode}}</span> 
              </li>
               
               

                `,
    data() {
        return {
            value: null,
            iconSize: 'icon-size-' + this.size,
            svgId:  (Math.floor(Math.random() * (1000 - 100)))  + Date.now() + '_svg_' + this.signalIdOptionOne,
            valueText: '',
            iconColor: null,
            valueTextColor: null,
            valueCellColor: null,
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
        const svgContent = iconRegistry[this.icon]
        $( "#"+this.svgId).html(svgContent)
      
        this.rewindCheck()

        // Observer for push id to global array
        const iconTriEstateOneSignalElement = this.$refs.iconTriEstateOneSignalElement;
        if (iconTriEstateOneSignalElement) {
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
            observer.observe(iconTriEstateOneSignalElement);
        } else {
            console.error('Ref element is not available.');
        }
    },
    updated(){
        this.rewindCheck()
    },
    methods:{

        evaluate(value){
            if (value  == this.oneOptionValue) {
                this.valueText = this.OptionOneText;
                this.iconColor = 'color-fill-type-' + this.OptionOneColor;
                this.valueTextColor = 'color-text-type-' + this.OptionOneColor;
            }
            else if (value  == this.twoOptionValue) {
                this.valueText = this.OptionTwoText;
                this.iconColor = 'color-fill-type-' + this.OptionTwoColor;
                this.valueTextColor = 'color-text-type-' + this.OptionTwoColor;
            }
            else if (value  == this.threeOptionValue) {
                this.valueText = this.OptionThreeText;
                this.iconColor = 'color-fill-type-' + this.OptionThreeColor;
                this.valueTextColor = 'color-text-type-' + this.OptionThreeColor;
            }
            else{
                this.valueText = 'N/A'
                this.iconColor = null
                this.valueTextColor = null
            }
        },
        rewindCheck(){
            if (!isNaN(this.value) && !this.rewindMode == true) {
                this.value = valueRaw[this.signalId]
                this.evaluate(this.value)
            }
            else{
                if(visibleHistoricalValue.includes(this.signalId)){
                setTimeout(() => {
                    if (this.signalId in valueHistorical) {
                      
                        this.valueRewindMode = parseInt(parseFloat(valueHistorical[this.signalId][0].Value).toFixed(this.decimals))
                        this.evaluate(this.valueRewindMode)
                    
                    } else {
                        this.valueRewindMode = null
                    }
    
                }, 500);    
            }else{
                return;
            }
            }
        },
    }
};

