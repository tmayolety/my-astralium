components.iconTextValueAnalogueLine = {
  props: [
    "signalId",
    "unit",
    "icon",
    "title",
    "size",
    "valueMode",
    "valueDecimals",
    "timeDelay",
  ],
  template: /*HTML*/ `
                <li ref="iconTextValueAnalogueElement">
                <div class="col-40 align-middle-center">
                <i class="ui" :class= '[iconSize, iconColor]' :id="svgId"></i>
                </div>
                <div v-if="titleDisplay" class="col-100-min">

                    <div class="flip-col go-bt " :class="[flipClass]">

                        <div class="flip-col--container">

                           <div class="ui col" style="font-size:11px; text-align:left;">  
                            <button class="ui btn mini colored secondary textColorTheme" @click="callTimeline(this.signalId, this.title, this.timeDelay)" style="width: 100%; height:22px;">
                                Id: {{signalId}} {{deviceName}} RAW: {{rawToShow}}     
                            </button>
                           </div>                     

                           <div class="ui col" style="min-width: 25em; text-align: left;" v-on:click="flipComponent()">
                               <span>{{title}}</span>
                               <span style="display: none;">{{value}}</span>
                           </div>

                        </div>

                    </div>
                
                </div>
                <div class="col-80 align-middle-left" :class= '[valueTextColor, valueCellColor]'><span class="font-bold ">{{valueToShow}}</span><small class="font-regular color-text-type-secondary-dark"> {{ unit }}</small></div>
                </li>
                <span style="display: none;">{{LL}}</span>
                <span style="display: none;">{{L}}</span>
                <span style="display: none;">{{HH}}</span>
                <span style="display: none;">{{H}}</span>`,
  data() {
    return {
      value: null,
      valueToShow: null,
      iconSize: "icon-size-" + this.size,
      svgId:
        Math.floor(Math.random() * (1000 - 100)) +
        Date.now() +
        "_svg_" +
        this.signalId,
      iconColor: null,
      valueTextColor: null,
      valueCellColor: null,
      LL: null,
      L: null,
      H: null,
      HH: null,
      hasLimits: true,
      titleDisplay: false,
      flipClass: "event-click",
      raw: valueRaw[this.signalId],
      rawToShow: null,
      signalData: signalsData[this.signalId],
      deviceName: null,
    };
  },

  mounted() {
    let rawData;
    if (Vue.isProxy(this.signalData)) {
      rawData = Vue.toRaw(this.signalData);
    }

    if (typeof rawData !== "undefined") {
      this.deviceName = deviceData[rawData.Device].Name;
    }

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

    const svgContent = iconRegistry[this.icon];
    $("#" + this.svgId).html(svgContent);

    if (typeof limits[this.signalId] !== "undefined") {
      if (limits[this.signalId].L.value != "-") {
        this.L = limits[this.signalId].L;
      } else {
        this.L = null;
      }
      if (limits[this.signalId].LL.value != "-") {
        this.LL = limits[this.signalId].LL;
      } else {
        this.LL = null;
      }
      if (limits[this.signalId].H.value != "-") {
        this.H = limits[this.signalId].H;
      } else {
        this.H = null;
      }
      if (limits[this.signalId].HH.value != "-") {
        this.HH = limits[this.signalId].HH;
      } else {
        this.HH = null;
      }
    } else {
      this.hasLimits = false;
    }

    if (this.title != null) {
      this.titleDisplay = true;
    }


  },
  updated() {
    if (!isNaN(this.value)) {
      this.getLimitColors(this.value);
      this.valueToShow = parseFloat(this.value).toFixed(this.decimals);
      this.rawToShow = this.raw;
    } 
  },
  methods: {

    getLimitColors(value) {
      let result = {};
      result.HH = false;
      result.H = false;
      result.L = false;
      result.LL = false;

      if (parseFloat(value) >= parseFloat(this.HH)) {
        result.HH = true;
      }
      if (
        parseFloat(value) >= parseFloat(this.H) &&
        (parseFloat(value) < parseFloat(this.HH) || this.HH == null)
      ) {
        result.H = true;
      }
      if (
        parseFloat(value) <= parseFloat(this.L) &&
        (parseFloat(value) > parseFloat(this.LL) || this.LL == null)
      ) {
        result.L = true;
      }
      if (parseFloat(value) <= parseFloat(this.LL)) {
        result.LL = true;
      }

      if (result.HH || result.LL) {
        this.iconColor = "color-fill-type-danger";
        this.valueTextColor = "color-text-type-white";
        this.valueCellColor = "color-bg-op-type-danger ";
      } else if (result.H || result.L) {
        this.iconColor = "color-fill-type-warning";
        this.valueTextColor = "color-text-type-white";
        this.valueCellColor = "color-bg-op-type-warning ";
      } else if (!result.H || !result.L || !result.HH || !result.LL) {
        this.iconColor = null;
        this.valueTextColor = null;
        this.valueCellColor = null;
      }
    },
    callTimeline(signal, title, delay) {
      window.signalGlobalTimelineVariable = signal;
      window.globalTimelineTitle = title;
      window.globalTimelineDelay = delay;

      eventBus.emit("timeline-variable-updated", signal);
      eventBus.emit("timeline-variable-updated-title", title);
      eventBus.emit("timeline-variable-update-delay", delay);
    },
    flipComponent() {
      this.flipClass = "";
      setTimeout(this.unFlipComponent, 3000);
    },
    unFlipComponent() {
      this.flipClass = "event-click";
    },
  },
};
