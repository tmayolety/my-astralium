components.basicText = {
  props: ["signalId", "signalIdDB", "unit", "valueMode", "valueDecimals", "scalingFactor"],

  template: /*html*/ `
    <h3 class="ui font-bold h3" ref="basicTextElement">
      {{ valueToShow }} 
      <small class="font-regular clr-subvalue-ui">{{ unit }}</small>
      <div style="">LSW: {{ lsw }}</div>
      <div style="">MSW: {{ dbValue }}</div>
    </h3>`,

  data() {
    return {
      lsw: null,               // Nuevo: valor crudo LSW
      valueToShow: null,
      combined: null,
      decimals: typeof this.valueDecimals == "undefined" ? 0 : this.valueDecimals,
    };
  },

  computed: {
    dbValue() {
      return valueRaw[this.signalIdDB]; // MSW dinámico
    }
  },

  mounted() {
    switch (this.valueMode) {
      case "filtered":
        this.lsw = valueFiltered[this.signalId];
        break;
      case "escalated":
        this.lsw = valueEscalated[this.signalId];
        break;
      default:
      case "raw":
        this.lsw = valueRaw[this.signalId];
        break;
    }

    if (this.lsw == null) {
      this.valueToShow = "N/A";
    }
  },

  updated() {
    const msw = this.dbValue;
    const lsw = this.lsw;
    const scale = this.scalingFactor ?? 100;

    if (this.signalIdDB && !isNaN(msw) && !isNaN(lsw)) {
      this.combined = ((msw << 16) | lsw) / scale;
      this.valueToShow = this.combined.toFixed(this.decimals);
    } else if (!isNaN(lsw)) {
      this.valueToShow = parseFloat(lsw).toFixed(this.decimals);
    }
  }
};
