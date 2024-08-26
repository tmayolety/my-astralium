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
            
            }
    },

    updated()
    {
        if (!isNaN(this.value)) {
            this.value = valueRaw[this.signalId]
            this.evaluate(this.value)
        }
    },
    mounted() {

        this.evaluate(this.value)
        if (this.title != null) { this.titleDisplay = true }



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
        }
    }

};































