components.basicText = {
  props: ["signalId", "unit", "valueMode", "valueDecimals"],
  template: /*html*/ `
    <h3 class="ui font-bold h3" ref="basicTextElement">{{ valueToShow }} 
    <small class="font-regular clr-subvalue-ui">{{ unit }}</small>
    <div style="display: none">{{ value }}</div>
    </h3>`,

  data() {
    return {
      value: null,
      valueToShow: null,
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

    if (this.value == null) {
      this.valueToShow = "N/A";
    }

    if (typeof this.valueDecimals === "undefined") {
      this.decimals = 0;
    } else {
      this.decimals = this.valueDecimals;
    }

    // Observer for push id to global array
    const basicTextElement = this.$refs.basicTextElement;
    if (basicTextElement) {
      let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
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
      observer.observe(basicTextElement);
    } else {
      console.error("Ref element is not available.");
    }
  },
  updated() {
    this.rewindCheck();
  },
  methods: {
    rewindCheck() {
      if (!isNaN(this.value) && !this.rewindMode == true) {
        this.valueToShow = parseFloat(this.value).toFixed(this.decimals);
      } else {
        if (visibleHistoricalValue.includes(this.signalId)) {
          setTimeout(() => {
            if (this.signalId in valueHistorical) {
              this.valueToShow = parseFloat(
                valueHistorical[this.signalId][0].Value
              ).toFixed(this.decimals);
            } else {
              this.valueToShow = "N/A";
            }
          }, 500);
        } else {
          return;
        }
      }
    },
  },
};
