components.iconTriEstateDigitalLine = {
  props: [
    "signalIdOptionOne",
    "signalIdOptionTwo",
    "signalIdOptionThree",
    "icon",
    "title",
    "size",
    "OptionOneText",
    "OptionTwoText",
    "OptionThreeText",
    "OptionOneColor",
    "OptionTwoColor",
    "OptionThreeColor",
  ],
  template: /*html*/ `<li ref="iconTriEstateDigitalLineElement">
                <div class="col-40 align-middle-center">
                <i class="ui" :class= '[iconSize, iconColor]' :id="svgId"></i>
                </div>
                <div class="col-90-min"><span style="font-size: 120%!important">{{title}}</span></div>
                <div class="col-100 align-middle-center" :class= '[valueTextColor, valueCellColor]'><span class="font-bold glow" style="font-size: 135%!important">{{valueText}}</span></div>
                
                <span style="display: none;">{{value1}}</span> 
                <span style="display: none;">{{value2}}</span> 
                <span style="display: none;">{{value3}}</span> 
                
                </li>


                `,
  data() {
    return {
      value1: null,
      value2: null,
      value3: null,
      iconSize: "icon-size-" + this.size,
      svgId:
        Math.floor(Math.random() * (1000 - 100)) +
        Date.now() +
        "_svg_" +
        this.signalIdOptionOne,
      valueText: "",
      iconColor: null,
      valueTextColor: null,
      valueCellColor: null,

    };
  },
  mounted() {
    const svgContent = iconRegistry[this.icon];
    $("#" + this.svgId).html(svgContent);

    this.value1 = valueRaw[this.signalIdOptionOne];
    this.value2 = valueRaw[this.signalIdOptionTwo];
    this.value3 = valueRaw[this.signalIdOptionThree];

    this.evaluate(this.value1, this.value2, this.value3);

  },
  updated() {
            this.value1 = valueRaw[this.signalIdOptionOne];
        this.value2 = valueRaw[this.signalIdOptionTwo];
        this.value3 = valueRaw[this.signalIdOptionThree];

        this.evaluate(this.value1, this.value2, this.value3);
  },
  methods: {
    evaluate(value1, value2, value3) {
      if (value1 == 1) {
        this.valueText = this.OptionOneText;
        this.iconColor = "color-fill-type-" + this.OptionOneColor;
        this.valueTextColor = "color-text-type-" + this.OptionOneColor;
      }
      else if (value2 == 1) {
        this.valueText = this.OptionTwoText;
        this.iconColor = "color-fill-type-" + this.OptionTwoColor;
        this.valueTextColor = "color-text-type-" + this.OptionTwoColor;
      }
      else if (value3 == 1) {
        this.valueText = this.OptionThreeText;
        this.iconColor = "color-fill-type-" + this.OptionThreeColor;
        this.valueTextColor = "color-text-type-" + this.OptionThreeColor;
      }
      else if (value1 == null && value2 == null && value3 == null) {
        this.valueText = "N/A";
      }
    },

  },
};
