components.basicText = {
  props: ["signalId", "signalIdDB", "unit", "valueMode", "valueDecimals","scalingFactor"],
  template: /*html*/ `
    <h3 class="ui font-bold h3" ref="basicTextElement">{{ valueToShow }} 
    <small class="font-regular clr-subvalue-ui">{{ unit }}</small>
    <div style="">{{ value }}</div>
    <div style="">{{ dbValue }}</div>
    </h3>`,

  data() {
    return {
      value: null,
      valueToShow: null,
      dbValue: valueRaw[this.signalIdDB],
      combined: null,
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
    if (this.signalIdDB && !isNaN(this.dbValue) && !isNaN(this.value)) {
      const msw = this.dbValue;
      const lsw = this.value;
      const scale = this.scalingFactor ?? 100;
      this.combined = ((msw << 16) | lsw) / scale;

      this.value = this.combined;
      this.valueToShow = this.combined.toFixed(this.decimals);
    } 
    // Caso estándar sin signalIdDB
    else if (!isNaN(this.value)) {
      this.valueToShow = parseFloat(this.value).toFixed(this.decimals);
    }
  },

};
