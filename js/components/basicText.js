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
      combined: null,
      decimals: typeof this.valueDecimals == "undefined" ? 0 : this.valueDecimals,
    };
  },
    computed: {
    dbValue() {
      return valueRaw[this.signalIdDB]; // ← se evalúa dinámicamente por instancia
    }
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
     const dbVal = valueRaw[this.signalIdDB]; // ← accede dinámicamente aquí también

    if (this.signalIdDB && !isNaN(dbVal) && !isNaN(this.value)) {
      const msw = dbVal;
      const lsw = this.value;
      const scale = this.scalingFactor ?? 100;
      this.combined = ((msw << 16) | lsw) / scale;

      this.value = this.combined;
      this.valueToShow = this.combined.toFixed(this.decimals);
    } 
    else if (!isNaN(this.value)) {
      this.valueToShow = parseFloat(this.value).toFixed(this.decimals);
    }
  },

};
