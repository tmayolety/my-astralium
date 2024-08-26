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
    };
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

  },
  updated() {
    if (!isNaN(this.value)) {
      this.valueToShow = parseFloat(this.value).toFixed(this.decimals);
    }
  },

};
