components.basicTextWithTitleDigital = {
    inheritAttrs: false,
    props: [
    'signalId',
    'title',
    'titleStyle',
    'valueStyle',
    'valueAlign',
    'colStyle',
    'backgroundFlag',
    'zeroText',
    'oneText',
    'zeroColor',
    'oneColor',
    'valueMode'],
    template: /*html*/`
        <div class="ui col reset-w-align" :class="[colStyle, valueCellColor]" ref="basicTextTitleDigitalElement">
            <div class="ui col-content w-resp">
                <div :class= '[titleStyle]' v-if="titleDisplay">{{ title }}</div>
                <div :class= '[valueStyle, valueTextColor]'>{{valueText}}</div>
                <span style="display: none;">{{value}}</span>
                <span style="display: none;">{{valueRewindMode}}</span>
            </div>
        </div>`,
    data() {
        return {
            
                value: valueRaw[this.signalId],
                titleClass: 'color-text-type-secondary-dark',
                titleClassSize: null,
                titleDisplay: false,
                valueTextColor: null,
                valueCellColor: null,
                valueText: null,
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
    updated()
    {
        this.rewindCheck()
    },
    mounted() {

        this.evaluate(this.value)
        if (this.title != null) { this.titleDisplay = true }

         // Observer for push id to global array
         const basicTextTitleDigitalElement = this.$refs.basicTextTitleDigitalElement;
         if (basicTextTitleDigitalElement) {
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
             observer.observe(basicTextTitleDigitalElement);
         } else {
             console.error('Ref element is not available.');
         }

    }, methods: {
        evaluate (value) {
            if (value  == 1) {
                this.valueText = this.oneText;
                if (this.oneColor != null) {
                    this.valueTextColor = 'color-text-type-' + this.oneColor
                    if(this.backgroundFlag == true) {
                        this.valueCellColor = 'color-bg-op-type-'+ this.oneColor + '-dark'
                    }
                }
            } else if (value  == 0) {
                this.valueText = this.zeroText;
                if (this.zeroColor != null) {
                    this.valueTextColor = 'color-text-type-'+ this.zeroColor
                    if(this.backgroundFlag == true) {
                        this.valueCellColor = 'color-bg-op-type-' + this.zeroColor + '-dark'
                    }
                }
            } else {
                this.valueText = 'N/A'
                this.iconColor = null
                this.valueTextColor = null
                this.valueCellColor = null
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
                      
                        this.valueRewindMode = parseFloat(valueHistorical[this.signalId][0].Value).toFixed(this.decimals)
                        this.evaluate(this.valueRewindMode)
                    
                    } else {
                        this.valueRewindMode = 'N/A';
                    }
    
                }, 500);    
            }else{
                return;
            }
            }
        },
    }

};































