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

                <span style="display: none;">{{valueRewindMode1}}</span> 
                <span style="display: none;">{{valueRewindMode2}}</span> 
                <span style="display: none;">{{valueRewindMode3}}</span> 
                
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
      valueRewindMode1: null,
      valueRewindMode2: null,
      valueRewindMode3: null,
      rewindMode: rewindValuesMode,
      globalRewind: globalRewindUpdate,
    };
  },
  created() {
    eventBus.subscribe("rewindValuesModeChanged", (newVal) => {
      this.rewindMode = newVal;
    });
    eventBus.subscribe("globalRewindUpdateChanged", (newVal) => {
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
  mounted() {
    const svgContent = iconRegistry[this.icon];
    $("#" + this.svgId).html(svgContent);

    this.rewindCheck();

    // Observer for push id to global array
    const iconTriEstateDigitalLineElement =
      this.$refs.iconTriEstateDigitalLineElement;
    if (iconTriEstateDigitalLineElement) {
      let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!visibleHistoricalValue.includes(this.signalIdOptionOne)) {
              visibleHistoricalValue.push(this.signalIdOptionOne);
            }
            if (!visibleHistoricalValue.includes(this.signalIdOptionTwo)) {
                visibleHistoricalValue.push(this.signalIdOptionTwo);
              }
              if (!visibleHistoricalValue.includes(this.signalIdOptionThree)) {
                visibleHistoricalValue.push(this.signalIdOptionThree);
              }
          } else {
            const indexOne = visibleHistoricalValue.indexOf(this.signalIdOptionOne);
            if (indexOne > -1) {
              visibleHistoricalValue.splice(indexOne, 1);
            }
            const indexTwo = visibleHistoricalValue.indexOf(this.signalIdOptionTwo);
            if (indexTwo > -1) {
              visibleHistoricalValue.splice(indexTwo, 1);
            }
            const indexThree = visibleHistoricalValue.indexOf(this.signalIdOptionThree);
            if (indexThree > -1) {
              visibleHistoricalValue.splice(indexThree, 1);
            }
          }
        });
      });
      observer.observe(iconTriEstateDigitalLineElement);
    } else {
      console.error("Ref element is not available.");
    }
  },
  updated() {
    this.rewindCheck();
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
    rewindCheck() {
      if (!this.rewindMode == true) {
        this.value1 = valueRaw[this.signalIdOptionOne];
        this.value2 = valueRaw[this.signalIdOptionTwo];
        this.value3 = valueRaw[this.signalIdOptionThree];

        this.evaluate(this.value1, this.value2, this.value3);
      } else {
        if (
          visibleHistoricalValue.includes(this.signalIdOptionOne) ||
          visibleHistoricalValue.includes(this.signalIdOptionTwo) ||
          visibleHistoricalValue.includes(this.signalIdOptionThree)
        ) {
          setTimeout(() => {
            if (
              this.signalIdOptionOne in valueHistorical ||
              this.signalIdOptionTwo in valueHistorical ||
              this.signalIdOptionThree in valueHistorical
            ) {
              
              this.valueRewindMode1 = parseInt(parseFloat(valueHistorical[this.signalIdOptionOne][0].Value).toFixed(this.decimals))
              this.valueRewindMode2 = parseInt(parseFloat(valueHistorical[this.signalIdOptionTwo][0].Value).toFixed(this.decimals))
              this.valueRewindMode3 = parseInt(parseFloat(valueHistorical[this.signalIdOptionThree][0].Value).toFixed(this.decimals))
              
              this.evaluate(this.valueRewindMode1, this.valueRewindMode2, this.valueRewindMode3);
            } else {
              this.valueRewindMode1 = "N/A";
              this.valueRewindMode2 = "N/A";
              this.valueRewindMode3 = "N/A";
            }
          }, 500);
        } else {
          return;
        }
      }
    },
  },
};
