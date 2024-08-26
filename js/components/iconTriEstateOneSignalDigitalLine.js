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
        }
    },

    mounted(){
        const svgContent = iconRegistry[this.icon]
        $( "#"+this.svgId).html(svgContent)
      
        if (!isNaN(this.value)) {
            this.value = valueRaw[this.signalId]
            this.evaluate(this.value)
        }
        
    },
    updated(){
        if (!isNaN(this.value)) {
            this.value = valueRaw[this.signalId]
            this.evaluate(this.value)
        }
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
        }
    }
};

