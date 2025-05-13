components.multiGauge = {
  inheritAttrs: false,
  props: [
    "signalIdCenter",
    "signalIdLeft",
    "signalIdRight",
    "centerUnit",
    "leftUnit",
    "rightUnit",
    "rpmId",
    "dbLeftId",
    "dbRightId",

    "gaugeCenterSize",
    "gaugeCenterPos",
    "gaugeCenterinfo",
    "gaugeCenterIcon",
    "gaugeCenterValue1",
    "gaugeCenterValue2",
    "gaugeCenterValue3",
    "gaugeCenterValue4",

    "gaugeLeftSize",
    "gaugeLeftIcon",
    "gaugeLeftInfo",
    "gaugeLeftValue1",
    "gaugeLeftValue2",
    "gaugeLeftValue3",
    "gaugeLeftValue4",

    "gaugeRightSize",
    "gaugeRightIcon",
    "gaugeRightInfo",
    "gaugeRightValue1",
    "gaugeRightValue2",
    "gaugeRightValue3",
    "gaugeRightValue4",

    "centerIcon",
    "leftIcon",
    "rightIcon",
    "centerTitle",
    "leftTitle",
    "rightTitle",
    "valueMode",
    "centerScaleInterval",
    "rightScaleInterval",
    "leftScaleInterval",
    "topOffset",
    "centerValueDecimals",
    "rightValueDecimals",
    "leftValueDecimals",
    "timeDelay",
  ],

  template: /*html*/ `

    <div class="flip-col go-bt " :class="[flipClass]">
    <div class="flip-col--container">                       
        <div class="ui col align-middle-center" style="font-size: 16px; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;">
            <div style="text-align: left;">
            <div>
            <div style="display: flex; flex-direction: column; align-items: center; text-align: center;">
              Id:&nbsp; {{signalIdLeft}}<br/>
              &nbsp; {{deviceNameLeft}}<br/>
              RAW:&nbsp; {{rawToShowLeft}}<br/></div>
            </div>
            <br/><br/>
            <div>
            <div style="display: flex; flex-direction: column; align-items: center; text-align: center;">
              Id:&nbsp; {{signalIdCenter}}<br/>
              &nbsp; {{deviceNameCenter}}<br/>
              RAW:&nbsp; {{rawToShowCenter}}<br/></div>
            </div>
            <br/><br/>
            <div>
            <div style="display: flex; flex-direction: column; align-items: center; text-align: center;">
              Id:&nbsp; {{signalIdRight}}<br/>
              &nbsp; {{deviceNameRight}}<br/>
              RAW:&nbsp; {{rawToShowRight}}</div>
            </div>
            </div>
        </div>
  
        <div class="ui col align-middle-center"  v-on:click="flipComponent()" ref="multiGaugeElement">
        <!-- GAUGE CENTER-->
        <div :class= '["circularGauge-wrapper", centerValueClass, gaugeCenterSize]'>
            <div v-bind="{ id: gaugeCenterId}" class="circularGauge"></div>
            <div :class= '["infos-container", gaugeCenterinfo]'>
                <i :class= '["ui","status-icon",gaugeCenterIcon]' :id="svgCenterId"></i>
                <div :class='[gaugeCenterValue1]'>{{centerUnit}}</div>
                <div :class='[gaugeCenterValue2]'>{{centerValueShow}}</div>
                <div :class='[gaugeCenterValue3]'></div>
                <div :class='[gaugeCenterValue4]'></div>
            </div>
        </div>
        
        <!-- GAUGE LEFT -->
        <div class="" :class= '["circularGauge-wrapper","multi-gauge-left","value-bg-default", leftValueClass, gaugeLeftSize]'>
            <div class="circularGauge" v-bind="{ id: gaugeLeftId}"></div>
            <div :class= '["infos-container", gaugeLeftInfo]'>
                <i :class= '["ui","status-icon", gaugeLeftIcon]' style="position:relative; align-self:start;" :id="svgLeftId"></i>
                <div :class= '[gaugeLeftValue1]' style="align-self:start; position:relative;">{{leftValueShow}} <small class="font-regular clr-subvalue-ui"> &nbsp;{{leftUnit}}</small></div>
                <div :class= '[gaugeLeftValue2]' style="align-self:start; position:relative;">{{leftTitle}}</div>
                <div :class= '[gaugeLeftValue3]' style="align-self:start; position:relative;"></div>
                <div :class= '[gaugeLeftValue4]' style="align-self:start; position:relative;"></div>
            </div>
        </div>
    
        <!-- GAUGE RIGHT -->
        <div :class= '["circularGauge-wrapper", "multi-gauge-right", "value-bg-default", rightValueClass, gaugeRightSize]'>
            <div class="circularGauge" v-bind="{ id: gaugeRightId}"></div>
            <div :class= '["infos-container", gaugeRightInfo]'>
                <i  :class= '["ui", "status-icon", gaugeRightIcon]' :id="svgRightId" style="align-self:end;"></i>
                <div :class= '[gaugeRightValue1]' style="align-self:end; position:relative;">{{rightValueShow}} <small class="font-regular clr-subvalue-ui"> &nbsp;{{rightUnit}}</small></div>
                <div :class= '[gaugeRightValue2]' style="align-self:end; position:relative;">{{rightTitle}}</div>
                <div :class= '[gaugeRightValue3]' style="align-self:end; position:relative;"></div>
                <div :class= '[gaugeRightValue4]' style="align-self:end; position:relative;"></div>
            </div>
        </div>

        </div>
    </div>
    </div>
            <span style="display: none;">{{rightValue}}</span>
            <span style="display: none;">{{leftValue}}</span>
            <span style="display: none;">{{centerValue}}</span>
            <span style="display: none;">{{rpmValue}}</span>
            <span style="display: none;">{{dbLeftValue}}</span>
            <span style="display: none;">{{dbRightValue}}</span>
`,
  data() {
    return {
      centerValue: null,
      leftValue: null,
      rightValue: null,
      centerValueShow: null,
      leftValueShow: null,
      rightValueShow: null,
      centerValueClass: "status-type-success",
      leftValueClass: "status-type-success",
      rightValueClass: "status-type-success",
      LL: null,
      L: null,
      H: null,
      HH: null,
      Min: null,
      Max: null,
      CHasLimits: true,
      LHasLimits: true,
      RHasLimits: true,
      gaugeCenterId:
        Math.floor(Math.random() * (1000 - 100)) +
        Date.now() +
        "_" +
        this.signalIdCenter,
      svgCenterId:
        Math.floor(Math.random() * (1000 - 100)) +
        Date.now() +
        "_icon_" +
        this.signalIdCenter,
      gaugeLeftId:
        Math.floor(Math.random() * (1000 - 100)) +
        Date.now() +
        "_" +
        this.signalIdLeft,
      svgLeftId:
        Math.floor(Math.random() * (1000 - 100)) +
        Date.now() +
        "_icon_" +
        this.signalIdLeft,
      gaugeRightId:
        Math.floor(Math.random() * (1000 - 100)) +
        Date.now() +
        "_" +
        this.signalIdRight,
      svgRightId:
        Math.floor(Math.random() * (1000 - 100)) +
        Date.now() +
        "_icon_" +
        this.signalIdRight,
      heightClass: "h-med-" + this.height,
      widthClass: "w-med-" + this.width,
      flipClass: "event-click",
      rawCenter: valueRaw[this.signalIdCenter],
      rpmValue: valueRaw[this.rpmId],
      dbLeftValue: valueRaw[this.dbLeftId],
      dbRightValue: valueRaw[this.dbRightId],
      rawLeft: valueRaw[this.signalIdLeft],
      rawRight: valueRaw[this.signalIdRight],
      rawToShowCenter: null,
      rawToShowLeft: null,
      rawToShowRight: null,
      signalDataCenter: signalsData[this.signalIdCenter],
      signalDataLeft: signalsData[this.signalIdLeft],
      signalDataRsignalIdRight: signalsData[this.signalIdRight],
      deviceNameCenter: null,
      deviceNameLeft: null,
      deviceNameRight: null,
    };
  },
  watch: {
    reactiveUpdateCenter(newValue) {
      if (newValue) {
        this.reDrawLimits()
        setTimeout(() => {
          updateComponent[this.signalIdCenter].value = false;
        }, 1000);
      }
    },
    reactiveUpdateLeft(newValue) {
      if (newValue) {
        this.reDrawLimits()
        setTimeout(() => {
          updateComponent[this.signalIdLeft].value = false;
        }, 1000);
      }
    },
    reactiveUpdateRight(newValue) {
      if (newValue) {
        this.reDrawLimits()
        setTimeout(() => {
          updateComponent[this.signalIdRight].value = false;
        }, 1000);
      }
    },
  },
  computed: {
    reactiveUpdateCenter() {
      return updateComponent[this.signalIdCenter]?.value || false;
    },
    reactiveUpdateLeft() {
      return updateComponent[this.signalIdLeft]?.value || false;
    },
    reactiveUpdateRight() {
      return updateComponent[this.signalIdRight]?.value || false;
    },
  },
  updated() {

if (!isNaN(this.rawCenter) && !isNaN(this.rpmValue)) {
  const msw = this.rpmValue; // valor alto
  const lsw = this.rawCenter; // valor bajo
  const combined = ((msw << 16) | lsw) / 1000;

  this.centerValue = combined;
  this.centerValueShow = combined.toFixed(this.centerValueDecimals);
  this.rawToShowCenter = `MSW: ${msw}, LSW: ${lsw}`;
  this.gaugeCenter.option("value", this.centerValueShow);
} else if (!isNaN(this.centerValue)) {
  this.centerValueShow = parseFloat(this.centerValue).toFixed(this.centerValueDecimals);
  this.rawToShowCenter = this.rawCenter;
  this.gaugeCenter.option("value", this.centerValueShow);
}

  if (!isNaN(this.rawLeft) && !isNaN(this.dbLeftValue)) {
    const msw = this.dbLeftValue;
    const lsw = this.rawLeft;
    const combined = ((msw << 16) | lsw) / 10000;

    this.leftValue = combined;
    this.leftValueShow = combined.toFixed(this.leftValueDecimals);
    this.rawToShowLeft = `MSW: ${msw}, LSW: ${lsw}`;
    this.gaugeLeft.option("value", this.leftValueShow);
  } else if (!isNaN(this.leftValue)) {
    this.leftValueShow = parseFloat(this.leftValue).toFixed(this.leftValueDecimals);
    this.rawToShowLeft = this.rawLeft;
    this.gaugeLeft.option("value", this.leftValueShow);
  }

  if (!isNaN(this.rawRight) && !isNaN(this.dbRightValue)) {
    const msw = this.dbRightValue;
    const lsw = this.rawRight;
    const combined = ((msw << 16) | lsw) / 1000;

    this.rightValue = combined;
    this.rightValueShow = combined.toFixed(this.rightValueDecimals);
    this.rawToShowRight = `MSW: ${msw}, LSW: ${lsw}`;
    this.gaugeRight.option("value", this.rightValueShow);
  } else if (!isNaN(this.rightValue)) {
    this.rightValueShow = parseFloat(this.rightValue).toFixed(this.rightValueDecimals);
    this.rawToShowRight = this.rawRight;
    this.gaugeRight.option("value", this.rightValueShow);
  }

    if (this.CHasLimits) {
      let result = {};
      result.CHH = false;
      result.CH = false;
      result.CL = false;
      result.CLL = false;

      let CHH = limits[this.signalIdCenter].HH.value;
      let CH = limits[this.signalIdCenter].H.value;
      let CL = limits[this.signalIdCenter].L.value;
      let CLL = limits[this.signalIdCenter].LL.value;

      if (parseFloat(this.centerValue) >= parseFloat(CHH)) {
        result.CHH = true;
      }
      if (
        parseFloat(this.centerValue) >= parseFloat(CH) &&
        parseFloat(this.centerValue) < parseFloat(CHH)
      ) {
        result.CH = true;
      }
      if (
        parseFloat(this.centerValue) <= parseFloat(CL) &&
        parseFloat(this.centerValue) > parseFloat(CLL)
      ) {
        result.CL = true;
      }
      if (parseFloat(this.centerValue) <= parseFloat(CLL)) {
        result.CLL = true;
      }

      if (result.CHH || result.CLL) {
        this.centerValueClass = "status-type-danger";
      } else if (result.CH || result.CL) {
        this.centerValueClass = "status-type-warning2";
      } else if (!result.CH || !result.CL || !result.CHH || !result.CLL) {
        this.centerValueClass = "status-type-success";
      }
    }

    if (this.LHasLimits) {
      let result = {};
      result.LHH = false;
      result.LH = false;
      result.LL = false;
      result.LLL = false;

      let LHH = limits[this.signalIdLeft].HH.value;
      let LH = limits[this.signalIdLeft].H.value;
      let LL = limits[this.signalIdLeft].L.value;
      let LLL = limits[this.signalIdLeft].LL.value;

      if (parseFloat(this.leftValue) >= parseFloat(LHH)) {
        result.LHH = true;
      }
      if (
        parseFloat(this.leftValue) >= parseFloat(LH) &&
        parseFloat(this.leftValue) < parseFloat(LHH)
      ) {
        result.LH = true;
      }
      if (
        parseFloat(this.leftValue) <= parseFloat(LL) &&
        parseFloat(this.leftValue) > parseFloat(LLL)
      ) {
        result.LL = true;
      }
      if (parseFloat(this.leftValue) <= parseFloat(LLL)) {
        result.LLL = true;
      }

      if (result.LHH || result.LLL) {
        this.leftValueClass = "status-type-danger";
      } else if (result.LH || result.LL) {
        this.leftValueClass = "status-type-warning2";
      } else if (!result.LH || !result.LL || !result.LHH || !result.LLL) {
        this.leftValueClass = "status-type-success";
      }
    }

    if (this.RHasLimits) {
      let result = {};
      result.RHH = false;
      result.RH = false;
      result.RL = false;
      result.RLL = false;

      let RHH = limits[this.signalIdRight].HH.value;
      let RH = limits[this.signalIdRight].H.value;
      let RL = limits[this.signalIdRight].L.value;
      let RLL = limits[this.signalIdRight].LL.value;

      if (parseFloat(this.rightValue) >= parseFloat(RHH)) {
        result.RHH = true;
      }
      if (
        parseFloat(this.rightValue) >= parseFloat(RH) &&
        parseFloat(this.rightValue) < parseFloat(RHH)
      ) {
        result.RH = true;
      }
      if (
        parseFloat(this.rightValue) <= parseFloat(RL) &&
        parseFloat(this.rightValue) > parseFloat(RLL)
      ) {
        result.RL = true;
      }
      if (parseFloat(this.rightValue) <= parseFloat(RLL)) {
        result.RLL = true;
      }

      if (result.RHH || result.RLL) {
        this.rightValueClass = "status-type-danger";
      } else if (result.RH || result.RL) {
        this.rightValueClass = "status-type-warning2";
      } else if (!result.RH || !result.RL || !result.RHH || !result.RLL) {
        this.rightValueClass = "status-type-success";
      }
    }
  },
  mounted() {
    this.mountedComponent();
  },

  methods: {
    callTimeline(signal, title, delay) {
      window.signalGlobalTimelineVariable = signal;
      window.globalTimelineTitle = title;
      window.globalTimelineDelay = delay;

      eventBus.emit("timeline-variable-updated", signal);
      eventBus.emit("timeline-variable-updated-title", title);
      eventBus.emit("timeline-variable-update-delay", delay);
    },
    DrawRangesMulti() {
      if (
        this.CLL == null &&
        this.CL == null &&
        this.CHH == null &&
        this.CH == null
      ) {
        this.gaugeCenter.option("rangeContainer", {
          ranges: [
            {
              startValue: this.CMin,
              endValue: this.CMax,
              color: "RGBA(var(--clr-subvalue-ui) / 15%)",
            },
          ],
        });
      } else if (
        this.CLL != null &&
        this.CL != null &&
        this.CHH != null &&
        this.CH != null
      ) {
        this.gaugeCenter.option("rangeContainer", {
          ranges: [
            {
              startValue: this.CMin,
              endValue: this.CLL,
              color: "RGBA(var(--clr-type-danger) / 50%)",
            },
            {
              startValue: this.CLL,
              endValue: this.CL,
              color: "RGBA(var(--clr-type-warning2) / 50%)",
            },
            {
              startValue: this.CL,
              endValue: this.CH,
              color: "RGBA(var(--clr-subvalue-ui) / 15%)",
            },
            {
              startValue: this.CH,
              endValue: this.CHH,
              color: "RGBA(var(--clr-type-warning2) / 50%)",
            },
            {
              startValue: this.CHH,
              endValue: this.CMax,
              color: "RGBA(var(--clr-type-danger) / 50%)",
            },
          ],
        });
      }

      if (
        this.CHH == null &&
        this.CH == null &&
        this.CLL != null &&
        this.CL != null
      ) {
        this.gaugeCenter.option("rangeContainer", {
          ranges: [
            {
              startValue: this.CMin,
              endValue: this.CLL,
              color: "RGBA(var(--clr-type-danger) / 50%)",
            },
            {
              startValue: this.CLL,
              endValue: this.CL,
              color: "RGBA(var(--clr-type-warning2) / 50%)",
            },
            {
              startValue: this.CL,
              endValue: this.CMax,
              color: "RGBA(var(--clr-subvalue-ui) / 15%)",
            },
          ],
        });
      }

      if (
        this.CHH != null &&
        this.CH != null &&
        this.CLL == null &&
        this.CL == null
      ) {
        this.gaugeCenter.option("rangeContainer", {
          ranges: [
            {
              startValue: this.CHH,
              endValue: this.CMax,
              color: "RGBA(var(--clr-type-danger) / 50%)",
            },
            {
              startValue: this.CH,
              endValue: this.CHH,
              color: "RGBA(var(--clr-type-warning2) / 50%)",
            },
            {
              startValue: this.CMin,
              endValue: this.CH,
              color: "RGBA(var(--clr-subvalue-ui) / 15%)",
            },
          ],
        });
      }

      if (
        this.CHH != null &&
        this.CH == null &&
        this.CLL != null &&
        this.CL != null
      ) {
        this.gaugeCenter.option("rangeContainer", {
          ranges: [
            {
              startValue: this.CMin,
              endValue: this.CLL,
              color: "RGBA(var(--clr-type-danger) / 50%)",
            },
            {
              startValue: this.CLL,
              endValue: this.CL,
              color: "RGBA(var(--clr-type-warning2) / 50%)",
            },
            {
              startValue: this.CL,
              endValue: this.CHH,
              color: "RGBA(var(--clr-subvalue-ui) / 15%)",
            },
            {
              startValue: this.CHH,
              endValue: this.CMax,
              color: "RGBA(var(--clr-type-danger) / 50%)",
            },
          ],
        });
      }

      if (
        this.CHH != null &&
        this.CH == null &&
        this.CLL != null &&
        this.CL == null
      ) {
        this.gaugeCenter.option("rangeContainer", {
          ranges: [
            {
              startValue: this.CMin,
              endValue: this.CLL,
              color: "RGBA(var(--clr-type-danger) / 50%)",
            },
            {
              startValue: this.CLL,
              endValue: this.CHH,
              color: "RGBA(var(--clr-subvalue-ui) / 15%)",
            },
            {
              startValue: this.CHH,
              endValue: this.CMax,
              color: "RGBA(var(--clr-type-danger) / 50%)",
            },
          ],
        });
      }

      if (
        this.CHH != null &&
        this.CH == null &&
        this.CLL == null &&
        this.CL != null
      ) {
        this.gaugeCenter.option("rangeContainer", {
          ranges: [
            {
              startValue: this.CMin,
              endValue: this.CL,
              color: "RGBA(var(--clr-type-warning2) / 50%)",
            },
            {
              startValue: this.CL,
              endValue: this.CHH,
              color: "RGBA(var(--clr-subvalue-ui) / 15%)",
            },
            {
              startValue: this.CHH,
              endValue: this.CMax,
              color: "RGBA(var(--clr-type-danger) / 50%)",
            },
          ],
        });
      }

      if (
        this.CHH == null &&
        this.CH != null &&
        this.CLL != null &&
        this.CL != null
      ) {
        this.gaugeCenter.option("rangeContainer", {
          ranges: [
            {
              startValue: this.CMin,
              endValue: this.CLL,
              color: "RGBA(var(--clr-type-danger) / 50%)",
            },
            {
              startValue: this.CLL,
              endValue: this.CL,
              color: "RGBA(var(--clr-type-warning2) / 50%)",
            },
            {
              startValue: this.CL,
              endValue: this.CH,
              color: "RGBA(var(--clr-subvalue-ui) / 15%)",
            },
            {
              startValue: this.CH,
              endValue: this.CMax,
              color: "RGBA(var(--clr-type-warning2) / 50%)",
            },
          ],
        });
      }

      if (
        this.CHH == null &&
        this.CH != null &&
        this.CLL != null &&
        this.CL == null
      ) {
        this.gaugeCenter.option("rangeContainer", {
          ranges: [
            {
              startValue: this.CMin,
              endValue: this.CLL,
              color: "RGBA(var(--clr-type-danger) / 50%)",
            },
            {
              startValue: this.CLL,
              endValue: this.CH,
              color: "RGBA(var(--clr-subvalue-ui) / 15%)",
            },
            {
              startValue: this.CH,
              endValue: this.CMax,
              color: "RGBA(var(--clr-type-warning2) / 50%)",
            },
          ],
        });
      }

      if (
        this.CHH == null &&
        this.CH != null &&
        this.CLL == null &&
        this.CL != null
      ) {
        this.gaugeCenter.option("rangeContainer", {
          ranges: [
            {
              startValue: this.CMin,
              endValue: this.CL,
              color: "RGBA(var(--clr-type-warning2) / 50%)",
            },
            {
              startValue: this.CL,
              endValue: this.CH,
              color: "RGBA(var(--clr-subvalue-ui) / 15%)",
            },
            {
              startValue: this.CH,
              endValue: this.CMax,
              color: "RGBA(var(--clr-type-warning2) / 50%)",
            },
          ],
        });
      }

      if (
        this.CL != null &&
        this.CLL == null &&
        this.CH == null &&
        this.CHH == null
      ) {
        this.gaugeCenter.option("rangeContainer", {
          ranges: [
            {
              startValue: this.CMin,
              endValue: this.CL,
              color: "RGBA(var(--clr-subvalue-ui) / 15%)",
            },
            {
              startValue: this.CL,
              endValue: this.CMax,
              color: "RGBA(var(--clr-type-warning2) / 50%)",
            },
          ],
        });
      }

      if (
        this.CLL != null &&
        this.CHH == null &&
        this.CL == null &&
        this.CH == null
      ) {
        this.gaugeCenter.option("rangeContainer", {
          ranges: [
            {
              startValue: this.CMin,
              endValue: this.CLL,
              color: "RGBA(var(--clr-type-danger) / 50%)",
            },
            {
              startValue: this.CLL,
              endValue: this.CMax,
              color: "RGBA(var(--clr-subvalue-ui) / 15%)",
            },
          ],
        });
      }

      if (
        this.CH != null &&
        this.CLL == null &&
        this.CL == null &&
        this.CHH == null
      ) {
        this.gaugeCenter.option("rangeContainer", {
          ranges: [
            {
              startValue: this.CMin,
              endValue: this.CH,
              color: "RGBA(var(--clr-subvalue-ui) / 15%)",
            },
            {
              startValue: this.CH,
              endValue: this.CMax,
              color: "RGBA(var(--clr-type-danger) / 50%)",
            },
          ],
        });
      }

      if (
        this.CHH != null &&
        this.CLL == null &&
        this.CL == null &&
        this.CH == null
      ) {
        this.gaugeCenter.option("rangeContainer", {
          ranges: [
            {
              startValue: this.CMin,
              endValue: this.CHH,
              color: "RGBA(var(--clr-subvalue-ui) / 15%)",
            },
            {
              startValue: this.CHH,
              endValue: this.CMax,
              color: "RGBA(var(--clr-type-danger) / 50%)",
            },
          ],
        });
      }

      if (
        this.CLL == null &&
        this.CL == null &&
        this.CHH != null &&
        this.CH != null
      ) {
        this.gaugeCenter.option("rangeContainer", {
          ranges: [
            {
              startValue: this.CMin,
              endValue: this.CH,
              color: "RGBA(var(--clr-subvalue-ui) / 15%)",
            },
            {
              startValue: this.CH,
              endValue: this.CHH,
              color: "RGBA(var(--clr-type-warning2) / 50%)",
            },
            {
              startValue: this.CHH,
              endValue: this.CMax,
              color: "RGBA(var(--clr-type-danger) / 50%)",
            },
          ],
        });
      }

      if (
        this.CLL == null &&
        this.CL != null &&
        this.CHH != null &&
        this.CH != null
      ) {
        this.gaugeCenter.option("rangeContainer", {
          ranges: [
            {
              startValue: this.CMin,
              endValue: this.CL,
              color: "RGBA(var(--clr-type-warning2) / 50%)",
            },
            {
              startValue: this.CL,
              endValue: this.CH,
              color: "RGBA(var(--clr-subvalue-ui) / 15%)",
            },
            {
              startValue: this.CH,
              endValue: this.CHH,
              color: "RGBA(var(--clr-type-warning2) / 50%)",
            },
            {
              startValue: this.CHH,
              endValue: this.CMax,
              color: "RGBA(var(--clr-type-danger) / 50%)",
            },
          ],
        });
      }

      if (
        this.CLL != null &&
        this.CL == null &&
        this.CHH != null &&
        this.CH != null
      ) {
        this.gaugeCenter.option("rangeContainer", {
          ranges: [
            {
              startValue: this.CMin,
              endValue: this.CLL,
              color: "RGBA(var(--clr-type-danger) / 50%)",
            },
            {
              startValue: this.CLL,
              endValue: this.CH,
              color: "RGBA(var(--clr-subvalue-ui) / 15%)",
            },
            {
              startValue: this.CH,
              endValue: this.CHH,
              color: "RGBA(var(--clr-type-warning2) / 50%)",
            },
            {
              startValue: this.CHH,
              endValue: this.CMax,
              color: "RGBA(var(--clr-type-danger) / 50%)",
            },
          ],
        });
      }

      if (
        this.LLL == null &&
        this.LL == null &&
        this.LHH == null &&
        this.LH == null
      ) {
        this.gaugeLeft.option("rangeContainer", {
          ranges: [
            {
              startValue: this.LMin,
              endValue: this.LMax,
              color: "RGBA(var(--clr-subvalue-ui) / 15%)",
            },
          ],
        });
      }

      if (
        this.LLL != null &&
        this.LL != null &&
        this.LHH != null &&
        this.LH != null
      ) {
        this.gaugeLeft.option("rangeContainer", {
          ranges: [
            {
              startValue: this.LMin,
              endValue: this.LLL,
              color: "RGBA(var(--clr-type-danger) / 50%)",
            },
            {
              startValue: this.LLL,
              endValue: this.LL,
              color: "RGBA(var(--clr-type-warning2) / 50%)",
            },
            {
              startValue: this.LL,
              endValue: this.LH,
              color: "RGBA(var(--clr-subvalue-ui) / 15%)",
            },
            {
              startValue: this.LH,
              endValue: this.LHH,
              color: "RGBA(var(--clr-type-warning2) / 50%)",
            },
            {
              startValue: this.LHH,
              endValue: this.LMax,
              color: "RGBA(var(--clr-type-danger) / 50%)",
            },
          ],
        });
      }

      if (
        this.LHH == null &&
        this.LH == null &&
        this.LLL != null &&
        this.LL != null
      ) {
        this.gaugeLeft.option("rangeContainer", {
          ranges: [
            {
              startValue: this.LMin,
              endValue: this.LLL,
              color: "RGBA(var(--clr-type-danger) / 50%)",
            },
            {
              startValue: this.LLL,
              endValue: this.LL,
              color: "RGBA(var(--clr-type-warning2) / 50%)",
            },
            {
              startValue: this.LL,
              endValue: this.LMax,
              color: "RGBA(var(--clr-subvalue-ui) / 15%)",
            },
          ],
        });
      }

      if (
        this.LHH != null &&
        this.LH != null &&
        this.LLL == null &&
        this.LL == null
      ) {
        this.gaugeLeft.option("rangeContainer", {
          ranges: [
            {
              startValue: this.LHH,
              endValue: this.LMax,
              color: "RGBA(var(--clr-type-danger) / 50%)",
            },
            {
              startValue: this.LH,
              endValue: this.LHH,
              color: "RGBA(var(--clr-type-warning2) / 50%)",
            },
            {
              startValue: this.LMin,
              endValue: this.LH,
              color: "RGBA(var(--clr-subvalue-ui) / 15%)",
            },
          ],
        });
      }

      if (
        this.LHH != null &&
        this.LH == null &&
        this.LLL != null &&
        this.LL != null
      ) {
        this.gaugeLeft.option("rangeContainer", {
          ranges: [
            {
              startValue: this.LMin,
              endValue: this.LLL,
              color: "RGBA(var(--clr-type-danger) / 50%)",
            },
            {
              startValue: this.LLL,
              endValue: this.LL,
              color: "RGBA(var(--clr-type-warning2) / 50%)",
            },
            {
              startValue: this.LL,
              endValue: this.LHH,
              color: "RGBA(var(--clr-subvalue-ui) / 15%)",
            },
            {
              startValue: this.LHH,
              endValue: this.LMax,
              color: "RGBA(var(--clr-type-danger) / 50%)",
            },
          ],
        });
      }

      if (
        this.LHH != null &&
        this.LH == null &&
        this.LLL != null &&
        this.LL == null
      ) {
        this.gaugeLeft.option("rangeContainer", {
          ranges: [
            {
              startValue: this.LMin,
              endValue: this.LLL,
              color: "RGBA(var(--clr-type-danger) / 50%)",
            },
            {
              startValue: this.LLL,
              endValue: this.LHH,
              color: "RGBA(var(--clr-subvalue-ui) / 15%)",
            },
            {
              startValue: this.LHH,
              endValue: this.LMax,
              color: "RGBA(var(--clr-type-danger) / 50%)",
            },
          ],
        });
      }

      if (
        this.LHH != null &&
        this.LH == null &&
        this.LLL == null &&
        this.LL != null
      ) {
        this.gaugeLeft.option("rangeContainer", {
          ranges: [
            {
              startValue: this.LMin,
              endValue: this.LL,
              color: "RGBA(var(--clr-type-warning2) / 50%)",
            },
            {
              startValue: this.LL,
              endValue: this.LHH,
              color: "RGBA(var(--clr-subvalue-ui) / 15%)",
            },
            {
              startValue: this.LHH,
              endValue: this.LMax,
              color: "RGBA(var(--clr-type-danger) / 50%)",
            },
          ],
        });
      }

      if (
        this.LHH == null &&
        this.LH != null &&
        this.LLL != null &&
        this.LL != null
      ) {
        this.gaugeLeft.option("rangeContainer", {
          ranges: [
            {
              startValue: this.LMin,
              endValue: this.LLL,
              color: "RGBA(var(--clr-type-danger) / 50%)",
            },
            {
              startValue: this.LLL,
              endValue: this.LL,
              color: "RGBA(var(--clr-type-warning2) / 50%)",
            },
            {
              startValue: this.LL,
              endValue: this.LH,
              color: "RGBA(var(--clr-subvalue-ui) / 15%)",
            },
            {
              startValue: this.LH,
              endValue: this.LMax,
              color: "RGBA(var(--clr-type-warning2) / 50%)",
            },
          ],
        });
      }

      if (
        this.LHH == null &&
        this.LH != null &&
        this.LLL != null &&
        this.LL == null
      ) {
        this.gaugeLeft.option("rangeContainer", {
          ranges: [
            {
              startValue: this.LMin,
              endValue: this.LLL,
              color: "RGBA(var(--clr-type-danger) / 50%)",
            },
            {
              startValue: this.LLL,
              endValue: this.LH,
              color: "RGBA(var(--clr-subvalue-ui) / 15%)",
            },
            {
              startValue: this.LH,
              endValue: this.LMax,
              color: "RGBA(var(--clr-type-warning2) / 50%)",
            },
          ],
        });
      }

      if (
        this.LHH == null &&
        this.LH != null &&
        this.LLL == null &&
        this.LL != null
      ) {
        this.gaugeLeft.option("rangeContainer", {
          ranges: [
            {
              startValue: this.LMin,
              endValue: this.LL,
              color: "RGBA(var(--clr-type-warning2) / 50%)",
            },
            {
              startValue: this.LL,
              endValue: this.LH,
              color: "RGBA(var(--clr-subvalue-ui) / 15%)",
            },
            {
              startValue: this.LH,
              endValue: this.LMax,
              color: "RGBA(var(--clr-type-warning2) / 50%)",
            },
          ],
        });
      }

      if (
        this.LL != null &&
        this.LLL == null &&
        this.LH == null &&
        this.LHH == null
      ) {
        this.gaugeLeft.option("rangeContainer", {
          ranges: [
            {
              startValue: this.LMin,
              endValue: this.LL,
              color: "RGBA(var(--clr-subvalue-ui) / 15%)",
            },
            {
              startValue: this.LL,
              endValue: this.LMax,
              color: "RGBA(var(--clr-type-warning2) / 50%)",
            },
          ],
        });
      }

      if (
        this.LLL != null &&
        this.LHH == null &&
        this.LL == null &&
        this.LH == null
      ) {
        this.gaugeLeft.option("rangeContainer", {
          ranges: [
            {
              startValue: this.LMin,
              endValue: this.LLL,
              color: "RGBA(var(--clr-type-danger) / 50%)",
            },
            {
              startValue: this.LLL,
              endValue: this.LMax,
              color: "RGBA(var(--clr-subvalue-ui) / 15%)",
            },
          ],
        });
      }

      if (
        this.LH != null &&
        this.LLL == null &&
        this.LL == null &&
        this.LHH == null
      ) {
        this.gaugeLeft.option("rangeContainer", {
          ranges: [
            {
              startValue: this.LMin,
              endValue: this.LH,
              color: "RGBA(var(--clr-subvalue-ui) / 15%)",
            },
            {
              startValue: this.LH,
              endValue: this.LMax,
              color: "RGBA(var(--clr-type-danger) / 50%)",
            },
          ],
        });
      }

      if (
        this.LHH != null &&
        this.LLL == null &&
        this.LL == null &&
        this.LH == null
      ) {
        this.gaugeLeft.option("rangeContainer", {
          ranges: [
            {
              startValue: this.LMin,
              endValue: this.LHH,
              color: "RGBA(var(--clr-subvalue-ui) / 15%)",
            },
            {
              startValue: this.LHH,
              endValue: this.LMax,
              color: "RGBA(var(--clr-type-danger) / 50%)",
            },
          ],
        });
      }

      if (
        this.LLL == null &&
        this.LL == null &&
        this.LHH != null &&
        this.LH != null
      ) {
        this.gaugeLeft.option("rangeContainer", {
          ranges: [
            {
              startValue: this.LMin,
              endValue: this.LH,
              color: "RGBA(var(--clr-subvalue-ui) / 15%)",
            },
            {
              startValue: this.LH,
              endValue: this.LHH,
              color: "RGBA(var(--clr-type-warning2) / 50%)",
            },
            {
              startValue: this.LHH,
              endValue: this.LMax,
              color: "RGBA(var(--clr-type-danger) / 50%)",
            },
          ],
        });
      }

      if (
        this.LLL == null &&
        this.LL != null &&
        this.LHH != null &&
        this.LH != null
      ) {
        this.gaugeLeft.option("rangeContainer", {
          ranges: [
            {
              startValue: this.LMin,
              endValue: this.LL,
              color: "RGBA(var(--clr-type-warning2) / 50%)",
            },
            {
              startValue: this.LL,
              endValue: this.LH,
              color: "RGBA(var(--clr-subvalue-ui) / 15%)",
            },
            {
              startValue: this.LH,
              endValue: this.LHH,
              color: "RGBA(var(--clr-type-warning2) / 50%)",
            },
            {
              startValue: this.LHH,
              endValue: this.LMax,
              color: "RGBA(var(--clr-type-danger) / 50%)",
            },
          ],
        });
      }

      if (
        this.LLL != null &&
        this.LL == null &&
        this.LHH != null &&
        this.LH != null
      ) {
        this.gaugeLeft.option("rangeContainer", {
          ranges: [
            {
              startValue: this.LMin,
              endValue: this.LLL,
              color: "RGBA(var(--clr-type-danger) / 50%)",
            },
            {
              startValue: this.LLL,
              endValue: this.LH,
              color: "RGBA(var(--clr-subvalue-ui) / 15%)",
            },
            {
              startValue: this.LH,
              endValue: this.LHH,
              color: "RGBA(var(--clr-type-warning2) / 50%)",
            },
            {
              startValue: this.LHH,
              endValue: this.LMax,
              color: "RGBA(var(--clr-type-danger) / 50%)",
            },
          ],
        });
      }

      if (
        this.RLL == null &&
        this.RL == null &&
        this.RHH == null &&
        this.RH == null
      ) {
        this.gaugeRight.option("rangeContainer", {
          ranges: [
            {
              startValue: this.RMin,
              endValue: this.RMax,
              color: "RGBA(var(--clr-subvalue-ui) / 15%)",
            },
          ],
        });
      }

      if (
        this.RLL != null &&
        this.RL != null &&
        this.RHH != null &&
        this.RH != null
      ) {
        this.gaugeRight.option("rangeContainer", {
          ranges: [
            {
              startValue: this.RMin,
              endValue: this.RLL,
              color: "RGBA(var(--clr-type-danger) / 50%)",
            },
            {
              startValue: this.RLL,
              endValue: this.RL,
              color: "RGBA(var(--clr-type-warning2) / 50%)",
            },
            {
              startValue: this.RL,
              endValue: this.RH,
              color: "RGBA(var(--clr-subvalue-ui) / 15%)",
            },
            {
              startValue: this.RH,
              endValue: this.RHH,
              color: "RGBA(var(--clr-type-warning2) / 50%)",
            },
            {
              startValue: this.RHH,
              endValue: this.RMax,
              color: "RGBA(var(--clr-type-danger) / 50%)",
            },
          ],
        });
      }

      if (
        this.RHH == null &&
        this.RH == null &&
        this.RLL != null &&
        this.RL != null
      ) {
        this.gaugeRight.option("rangeContainer", {
          ranges: [
            {
              startValue: this.RMin,
              endValue: this.RLL,
              color: "RGBA(var(--clr-type-danger) / 50%)",
            },
            {
              startValue: this.RLL,
              endValue: this.RL,
              color: "RGBA(var(--clr-type-warning2) / 50%)",
            },
            {
              startValue: this.RL,
              endValue: this.RMax,
              color: "RGBA(var(--clr-subvalue-ui) / 15%)",
            },
          ],
        });
      }

      if (
        this.RHH != null &&
        this.RH != null &&
        this.RLL == null &&
        this.RL == null
      ) {
        this.gaugeRight.option("rangeContainer", {
          ranges: [
            {
              startValue: this.RHH,
              endValue: this.RMax,
              color: "RGBA(var(--clr-type-danger) / 50%)",
            },
            {
              startValue: this.RH,
              endValue: this.RHH,
              color: "RGBA(var(--clr-type-warning2) / 50%)",
            },
            {
              startValue: this.RMin,
              endValue: this.RH,
              color: "RGBA(var(--clr-subvalue-ui) / 15%)",
            },
          ],
        });
      }

      if (
        this.RHH != null &&
        this.RH == null &&
        this.RLL != null &&
        this.RL != null
      ) {
        this.gaugeRight.option("rangeContainer", {
          ranges: [
            {
              startValue: this.RMin,
              endValue: this.RLL,
              color: "RGBA(var(--clr-type-danger) / 50%)",
            },
            {
              startValue: this.RLL,
              endValue: this.RL,
              color: "RGBA(var(--clr-type-warning2) / 50%)",
            },
            {
              startValue: this.RL,
              endValue: this.RHH,
              color: "RGBA(var(--clr-subvalue-ui) / 15%)",
            },
            {
              startValue: this.RHH,
              endValue: this.RMax,
              color: "RGBA(var(--clr-type-danger) / 50%)",
            },
          ],
        });
      }

      if (
        this.RHH != null &&
        this.RH == null &&
        this.RLL != null &&
        this.RL == null
      ) {
        this.gaugeRight.option("rangeContainer", {
          ranges: [
            {
              startValue: this.RMin,
              endValue: this.RLL,
              color: "RGBA(var(--clr-type-danger) / 50%)",
            },
            {
              startValue: this.RLL,
              endValue: this.RHH,
              color: "RGBA(var(--clr-subvalue-ui) / 15%)",
            },
            {
              startValue: this.RHH,
              endValue: this.RMax,
              color: "RGBA(var(--clr-type-danger) / 50%)",
            },
          ],
        });
      }

      if (
        this.RHH != null &&
        this.RH == null &&
        this.RLL == null &&
        this.RL != null
      ) {
        this.gaugeRight.option("rangeContainer", {
          ranges: [
            {
              startValue: this.RMin,
              endValue: this.RL,
              color: "RGBA(var(--clr-type-warning2) / 50%)",
            },
            {
              startValue: this.RL,
              endValue: this.RHH,
              color: "RGBA(var(--clr-subvalue-ui) / 15%)",
            },
            {
              startValue: this.RHH,
              endValue: this.RMax,
              color: "RGBA(var(--clr-type-danger) / 50%)",
            },
          ],
        });
      }

      if (
        this.RHH == null &&
        this.RH != null &&
        this.RLL != null &&
        this.RL != null
      ) {
        this.gaugeRight.option("rangeContainer", {
          ranges: [
            {
              startValue: this.RMin,
              endValue: this.RLL,
              color: "RGBA(var(--clr-type-danger) / 50%)",
            },
            {
              startValue: this.RLL,
              endValue: this.RL,
              color: "RGBA(var(--clr-type-warning2) / 50%)",
            },
            {
              startValue: this.RL,
              endValue: this.RH,
              color: "RGBA(var(--clr-subvalue-ui) / 15%)",
            },
            {
              startValue: this.RH,
              endValue: this.RMax,
              color: "RGBA(var(--clr-type-warning2) / 50%)",
            },
          ],
        });
      }

      if (
        this.RHH == null &&
        this.RH != null &&
        this.RLL != null &&
        this.RL == null
      ) {
        this.gaugeRight.option("rangeContainer", {
          ranges: [
            {
              startValue: this.RMin,
              endValue: this.RLL,
              color: "RGBA(var(--clr-type-danger) / 50%)",
            },
            {
              startValue: this.RLL,
              endValue: this.RH,
              color: "RGBA(var(--clr-subvalue-ui) / 15%)",
            },
            {
              startValue: this.RH,
              endValue: this.RMax,
              color: "RGBA(var(--clr-type-warning2) / 50%)",
            },
          ],
        });
      }

      if (
        this.RHH == null &&
        this.RH != null &&
        this.RLL == null &&
        this.RL != null
      ) {
        this.gaugeRight.option("rangeContainer", {
          ranges: [
            {
              startValue: this.RMin,
              endValue: this.RL,
              color: "RGBA(var(--clr-type-warning2) / 50%)",
            },
            {
              startValue: this.RL,
              endValue: this.RH,
              color: "RGBA(var(--clr-subvalue-ui) / 15%)",
            },
            {
              startValue: this.RH,
              endValue: this.RMax,
              color: "RGBA(var(--clr-type-warning2) / 50%)",
            },
          ],
        });
      }

      if (
        this.RL != null &&
        this.RLL == null &&
        this.RH == null &&
        this.RHH == null
      ) {
        this.gaugeRight.option("rangeContainer", {
          ranges: [
            {
              startValue: this.RMin,
              endValue: this.RL,
              color: "RGBA(var(--clr-subvalue-ui) / 15%)",
            },
            {
              startValue: this.RL,
              endValue: this.RMax,
              color: "RGBA(var(--clr-type-warning2) / 50%)",
            },
          ],
        });
      }

      if (
        this.RLL != null &&
        this.RHH == null &&
        this.RL == null &&
        this.RH == null
      ) {
        this.gaugeRight.option("rangeContainer", {
          ranges: [
            {
              startValue: this.RMin,
              endValue: this.RLL,
              color: "RGBA(var(--clr-type-danger) / 50%)",
            },
            {
              startValue: this.RLL,
              endValue: this.RMax,
              color: "RGBA(var(--clr-subvalue-ui) / 15%)",
            },
          ],
        });
      }

      if (
        this.RH != null &&
        this.RLL == null &&
        this.RL == null &&
        this.RHH == null
      ) {
        this.gaugeRight.option("rangeContainer", {
          ranges: [
            {
              startValue: this.RMin,
              endValue: this.RH,
              color: "RGBA(var(--clr-subvalue-ui) / 15%)",
            },
            {
              startValue: this.RH,
              endValue: this.RMax,
              color: "RGBA(var(--clr-type-danger) / 50%)",
            },
          ],
        });
      }

      if (
        this.RHH != null &&
        this.RLL == null &&
        this.RL == null &&
        this.RH == null
      ) {
        this.gaugeRight.option("rangeContainer", {
          ranges: [
            {
              startValue: this.RMin,
              endValue: this.RHH,
              color: "RGBA(var(--clr-subvalue-ui) / 15%)",
            },
            {
              startValue: this.RHH,
              endValue: this.RMax,
              color: "RGBA(var(--clr-type-danger) / 50%)",
            },
          ],
        });
      }

      if (
        this.RLL == null &&
        this.RL == null &&
        this.RHH != null &&
        this.RH != null
      ) {
        this.gaugeRight.option("rangeContainer", {
          ranges: [
            {
              startValue: this.RMin,
              endValue: this.RH,
              color: "RGBA(var(--clr-subvalue-ui) / 15%)",
            },
            {
              startValue: this.RH,
              endValue: this.RHH,
              color: "RGBA(var(--clr-type-warning2) / 50%)",
            },
            {
              startValue: this.RHH,
              endValue: this.RMax,
              color: "RGBA(var(--clr-type-danger) / 50%)",
            },
          ],
        });
      }

      if (
        this.RLL == null &&
        this.RL != null &&
        this.RHH != null &&
        this.RH != null
      ) {
        this.gaugeRight.option("rangeContainer", {
          ranges: [
            {
              startValue: this.RMin,
              endValue: this.RL,
              color: "RGBA(var(--clr-type-warning2) / 50%)",
            },
            {
              startValue: this.RL,
              endValue: this.RH,
              color: "RGBA(var(--clr-subvalue-ui) / 15%)",
            },
            {
              startValue: this.RH,
              endValue: this.RHH,
              color: "RGBA(var(--clr-type-warning2) / 50%)",
            },
            {
              startValue: this.RHH,
              endValue: this.RMax,
              color: "RGBA(var(--clr-type-danger) / 50%)",
            },
          ],
        });
      }

      if (
        this.RLL != null &&
        this.RL == null &&
        this.RHH != null &&
        this.RH != null
      ) {
        this.gaugeRight.option("rangeContainer", {
          ranges: [
            {
              startValue: this.RMin,
              endValue: this.RLL,
              color: "RGBA(var(--clr-type-danger) / 50%)",
            },
            {
              startValue: this.RLL,
              endValue: this.RH,
              color: "RGBA(var(--clr-subvalue-ui) / 15%)",
            },
            {
              startValue: this.RH,
              endValue: this.RHH,
              color: "RGBA(var(--clr-type-warning2) / 50%)",
            },
            {
              startValue: this.RHH,
              endValue: this.RMax,
              color: "RGBA(var(--clr-type-danger) / 50%)",
            },
          ],
        });
      }
    },
    flipComponent() {
      this.flipClass = "";
      setTimeout(this.unFlipComponent, 6000);
    },
    unFlipComponent() {
      this.flipClass = "event-click";
    },
    mountedComponent() {
      let rawDataCenter;
      if (Vue.isProxy(this.signalDataCenter)) {
        rawDataCenter = Vue.toRaw(this.signalDataCenter);
      }
      if (typeof rawDataCenter !== "undefined") {
        this.deviceNameCenter = deviceData[rawDataCenter.Device].Name;
      }
      let rawDataLeft;
      if (Vue.isProxy(this.signalDataLeft)) {
        rawDataLeft = Vue.toRaw(this.signalDataLeft);
      }
      if (typeof rawDataLeft !== "undefined") {
        this.deviceNameLeft = deviceData[rawDataLeft.Device].Name;
      }
      let rawDataRight;
      if (Vue.isProxy(this.signalDataRight)) {
        rawDataRight = Vue.toRaw(this.signalDataRight);
      }
      if (typeof rawDataRight !== "undefined") {
        this.deviceNameRight = deviceData[rawDataRight.Device].Name;
      }

      if (typeof this.centerValueDecimals == "undefined") {
        this.centerDecimals = 0;
      } else {
        this.centerDecimals = this.centerValueDecimals;
      }

      if (typeof this.leftValueDecimals == "undefined") {
        this.leftDecimals = 0;
      } else {
        this.leftDecimals = this.leftValueDecimals;
      }

      if (typeof this.rightValueDecimals == "undefined") {
        this.rightDecimals = 0;
      } else {
        this.rightDecimals = this.rightValueDecimals;
      }

      if (!isNaN(this.centerValue)) {
        this.centerValueShow = parseFloat(this.centerValue).toFixed(
          this.centerDecimals
        );
      }
      if (!isNaN(this.leftValue)) {
        this.leftValueShow = parseFloat(this.leftValue).toFixed(
          this.leftDecimals
        );
      }
      if (!isNaN(this.rightValue)) {
        this.rightValueShow = parseFloat(this.rightValue).toFixed(
          this.rightDecimals
        );
        
      }

      if (typeof this.topOffset == "undefined") {
        $("#" + this.gaugeCenterId)
          .parent()
          .css("top", "50%")
          .css("top", "-=60px");
        $("#" + this.gaugeLeftId)
          .parent()
          .css("top", "50%")
          .css("top", "-=40px");
        $("#" + this.gaugeRightId)
          .parent()
          .css("top", "50%")
          .css("top", "-=40px");
      } else {
        $("#" + this.gaugeCenterId)
          .parent()
          .css("top", "50%")
          .css("top", "-=" + parseInt(this.topOffset + 20) + "px");
        $("#" + this.gaugeLeftId)
          .parent()
          .css("top", "50%")
          .css("top", "-=" + parseInt(this.topOffset) + "px");
        $("#" + this.gaugeRightId)
          .parent()
          .css("top", "50%")
          .css("top", "-=" + parseInt(this.topOffset) + "px");
      }

      switch (this.valueMode) {
        case "filtered":
          this.centerValue = valueFiltered[this.signalIdCenter];
          this.leftValue = valueFiltered[this.signalIdLeft];
          this.rightValue = valueFiltered[this.signalIdRight];
          break;
        case "escalated":
          this.centerValue = valueEscalated[this.signalIdCenter];
          this.leftValue = valueEscalated[this.signalIdLeft];
          this.rightValue = valueEscalated[this.signalIdRight];
          break;
        default:
        case "raw":
          this.centerValue = valueRaw[this.signalIdCenter];
          this.leftValue = valueRaw[this.signalIdLeft];
          this.rightValue = valueRaw[this.signalIdRight];
          break;
      }

      if (this.centerValue == null) {
        this.centerValueShow = "N/A";
        this.centerValueClass = "status-type-light";
      }
      if (this.leftValue == null) {
        this.leftValueShow = "N/A";
        this.leftValueClass = "status-type-light";
      }
      if (this.rightValue == null) {
        this.rightValueShow = "N/A";
        this.rightValueClass = "status-type-light";
      }

      if (
        typeof limits == "undefined" ||
        typeof limits[this.signalIdCenter] == "undefined"
      ) {
        this.CMin = 0;
        this.CMax = 1000;
      } else {
        this.CMin = limits[this.signalIdCenter].Min;
        this.CMax = limits[this.signalIdCenter].Max;
      }

      if (typeof limits[this.signalIdCenter] !== "undefined") {
        if (limits[this.signalIdCenter].L.value != "-") {
          this.CL = limits[this.signalIdCenter].L.value;
        } else {
          this.CL = null;
        }
        if (limits[this.signalIdCenter].LL.value != "-") {
          this.CLL = limits[this.signalIdCenter].LL.value;
        } else {
          this.CLL = null;
        }
        if (limits[this.signalIdCenter].H.value != "-") {
          this.CH = limits[this.signalIdCenter].H.value;
        } else {
          this.CH = null;
        }
        if (limits[this.signalIdCenter].HH.value != "-") {
          this.CHH = limits[this.signalIdCenter].HH.value;
        } else {
          this.CHH = null;
        }
      } else {
        this.CHasLimits = false;
      }

      if (
        typeof limits == "undefined" ||
        typeof limits[this.signalIdLeft] == "undefined"
      ) {
        this.LMin = 0;
        this.LMax = 1000;
      } else {
        this.LMin = limits[this.signalIdLeft].Min;
        this.LMax = limits[this.signalIdLeft].Max;
      }

      if (typeof limits[this.signalIdLeft] !== "undefined") {
        if (limits[this.signalIdLeft].L.value != "-") {
          this.LL = limits[this.signalIdLeft].L.value;
        } else {
          this.LL = null;
        }
        if (limits[this.signalIdLeft].LL.value != "-") {
          this.LLL = limits[this.signalIdLeft].LL.value;
        } else {
          this.LLL = null;
        }
        if (limits[this.signalIdLeft].H.value != "-") {
          this.LH = limits[this.signalIdLeft].H.value;
        } else {
          this.LH = null;
        }
        if (limits[this.signalIdLeft].HH.value != "-") {
          this.LHH = limits[this.signalIdLeft].HH.value;
        } else {
          this.LHH = null;
        }
      } else {
        this.LHasLimits = false;
      }

      if (
        typeof limits == "undefined" ||
        typeof limits[this.signalIdRight] == "undefined"
      ) {
        this.RMin = 0;
        this.RMax = 1000;
      } else {
        this.RMin = limits[this.signalIdRight].Min;
        this.RMax = limits[this.signalIdRight].Max;
      }

      if (typeof limits[this.signalIdRight] !== "undefined") {
        if (limits[this.signalIdRight].L.value != "-") {
          this.RL = limits[this.signalIdRight].L.value;
        } else {
          this.RL = null;
        }
        if (limits[this.signalIdRight].LL.value != "-") {
          this.RLL = limits[this.signalIdRight].LL.value;
        } else {
          this.RLL = null;
        }
        if (limits[this.signalIdRight].H.value != "-") {
          this.RH = limits[this.signalIdRight].H.value;
        } else {
          this.RH = null;
        }
        if (limits[this.signalIdRight].HH.value != "-") {
          this.RHH = limits[this.signalIdRight].HH.value;
        } else {
          this.RHH = null;
        }
      } else {
        this.RHasLimits = false;
      }

      const svgContentCenter = iconRegistry[this.centerIcon];
      $("#" + this.svgCenterId).html(svgContentCenter);

      const svgContentLeft = iconRegistry[this.leftIcon];
      $("#" + this.svgLeftId).html(svgContentLeft);

      const svgContentRight = iconRegistry[this.rightIcon];
      $("#" + this.svgRightId).html(svgContentRight);

      this.gaugeCenter = $("#" + this.gaugeCenterId)
        .dxCircularGauge({
          geometry: {
            startAngle: -140 /* <?=$startAngle;?> */,
            endAngle: -40 /* <?=$endAngle;?> */,
          },
          scale: {
            startValue: this.CMin,
            endValue: this.CMax,
            tickInterval: this.centerScaleInterval /* <?=$tickInterval;?> */,
            tick: {
              color:
                "RGBA(var(--clr-subvalue-ui) / 40%" /* <?=$majorTickColor;?> */,
              length: 10 /* <?=$majorTickLength;?> */,
              visible: true /* <?=$majorTickVisible;?> */,
              width: 2,
            },
            minorTick: {
              color:
                "RGBA(var(--clr-subvalue-ui) / 25%" /* <?=$menorTickColor;?> */,
              length: 5 /* <?=$menorTickLength;?> */,
              visible: true /* <?=$majorTickVisible;?> */,
              width: 1,
            },
            label: {
              indentFromTick: 2 /* <?=$labelIndent;?> */,
              customizeText(arg) {
                return `${arg.valueText}`;
              },
            },
            orientation: "outside" /* <?=$scaleOrientation;?> */,
          },

          // MARGIN
          margin: {
            /* <?=$margin;?> */ bottom: 10,
            left: 10,
            right: 10,
            top: 10,
          },

          // RANGE
          rangeContainer: {
            backgroundColor: "RGBA(var(--clr-subvalue-ui) / 15%",
            offset: 17,
            width: 4,
            orientation: "outside",
          },
          // GAUGE
          value: 0 /* <?=$value;?> */,
          valueIndicator: {
            type: "rangebar",
            backgroundColor:
              "RGBA(var(--clr-subvalue-ui) / 15%)" /* <?=$valueBgColor;?> */,
            baseValue: 0 /* <?=$valueBase;?> */,
            offset: 20 /* <?=$valueOffset;?> */,
            size: 15 /* <?=$valueSize;?> */,
          },
          redrawOnResize: true,
        })
        .dxCircularGauge("instance");
      this.gaugeCenter.option("value", this.centerValueShow);

      this.gaugeLeft = $("#" + this.gaugeLeftId)
        .dxCircularGauge({
          geometry: {
            startAngle: -140 /* <?=$startAngle;?> */,
            endAngle: 140 /* <?=$endAngle;?> */,
          },
          scale: {
            startValue: this.LMin,
            endValue: this.LMax,
            tickInterval: this.leftScaleInterval /* <?=$tickInterval;?> */,
            tick: {
              color:
                "RGBA(var(--clr-subvalue-ui) / 50%" /* <?=$majorTickColor;?> */,
              length: 10 /* <?=$majorTickLength;?> */,
              visible: false /* <?=$majorTickVisible;?> */,
              width: 2,
            },
            minorTick: {
              color:
                "RGBA(var(--clr-subvalue-ui) / 15%" /* <?=$menorTickColor;?> */,
              length: 5 /* <?=$menorTickLength;?> */,
              visible: false /* <?=$majorTickVisible;?> */,
              width: 2,
            },
            label: {
              indentFromTick: 1 /* <?=$labelIndent;?> */,
              visible: false,
              customizeText(arg) {
                return `${arg.valueText}`;
              },
            },
            orientation: "inside" /* <?=$scaleOrientation;?> */,
          },
          // MARGIN
          margin: {
            /* <?=$margin;?> */ bottom: 10,
            left: 10,
            right: 10,
            top: 10,
          },
          // RANGE
          rangeContainer: {
            backgroundColor: "RGBA(var(--clr-subvalue-ui) / 15%",
            offset: 6,
            width: 4,
            orientation: "outside",
          },
          // GAUGE
          value: 0 /* <?=$value;?> */,
          valueIndicator: {
            type: "rangebar",
            backgroundColor:
              "RGBA(var(--clr-subvalue-ui) / 15%)" /* <?=$valueBgColor;?> */,
            baseValue: 0 /* <?=$valueBase;?> */,
            offset: 9 /* <?=$valueOffset;?> */,
            size: 15 /* <?=$valueSize;?> */,
          },

          // MIN-MAX ARROWS
          subvalues: [] /* <?=$subvalues;?> */,
          subvalueIndicator: {
            offset: 12 /* <?=$subvaluesOffset;?> */,
            color:
              "RGBA(var(--clr-type-success) / 100%)" /* <?=$subvaluesColor;?> */,
            width: 12 /* <?=$subvaluesWidth;?> */,
          },
          redrawOnResize: true,
        })
        .dxCircularGauge("instance");
      this.gaugeLeft.option("value", this.leftValueShow);

      this.gaugeRight = $("#" + this.gaugeRightId)
        .dxCircularGauge({
          geometry: {
            startAngle: -320 /* <?=$startAngle;?> */,
            endAngle: -40 /* <?=$endAngle;?> */,
          },
          scale: {
            startValue: this.RMax,
            endValue: this.RMin,
            tickInterval: this.rightScaleInterval /* <?=$tickInterval;?> */,
            tick: {
              color:
                "RGBA(var(--clr-subvalue-ui) / 50%" /* <?=$majorTickColor;?> */,
              length: 10 /* <?=$majorTickLength;?> */,
              visible: false /* <?=$majorTickVisible;?> */,
              width: 2,
            },
            minorTick: {
              color:
                "RGBA(var(--clr-subvalue-ui) / 15%" /* <?=$menorTickColor;?> */,
              length: 5 /* <?=$menorTickLength;?> */,
              visible: false /* <?=$majorTickVisible;?> */,
              width: 2,
            },
            label: {
              indentFromTick: 2 /* <?=$labelIndent;?> */,
              visible: false,
              customizeText(arg) {
                return `${arg.valueText}`;
              },
            },
            orientation: "outside" /* <?=$scaleOrientation;?> */,
          },
          // MARGIN
          margin: {
            /* <?=$margin;?> */ bottom: 10,
            left: 10,
            right: 10,
            top: 10,
          },
          // RANGE
          rangeContainer: {
            backgroundColor: "RGBA(var(--clr-subvalue-ui) / 15%",
            offset: 6,
            width: 4,
            orientation: "outside",
            ranges: [
              {
                startValue: 0,
                endValue: 20,
                color: "RGBA(var(--clr-subvalue-ui) / 15%)",
              },
            ],
          },
          // GAUGE
          value: 140 /* <?=$value;?> */,
          valueIndicator: {
            type: "rangebar",
            backgroundColor:
              "RGBA(var(--clr-subvalue-ui) / 15%)" /* <?=$valueBgColor;?> */,
            baseValue: 0 /* <?=$valueBase;?> */,
            offset: 9 /* <?=$valueOffset;?> */,
            size: 15 /* <?=$valueSize;?> */,
          },
          // MIN-MAX ARROWS
          subvalues: [] /* <?=$subvalues;?> */,
          subvalueIndicator: {
            offset: 12 /* <?=$subvaluesOffset;?> */,
            color:
              "RGBA(var(--clr-type-success) / 100%)" /* <?=$subvaluesColor;?> */,
            width: 12 /* <?=$subvaluesWidth;?> */,
          },
          redrawOnResize: true,
        })
        .dxCircularGauge("instance");
      this.gaugeRight.option("value", this.rightValueShow);
      this.DrawRangesMulti();
    },
    reDrawLimits(){

        if (
            typeof limits == "undefined" ||
            typeof limits[this.signalIdCenter] == "undefined"
          ) {
            this.CMin = 0;
            this.CMax = 1000;
          } else {
            this.CMin = limits[this.signalIdCenter].Min;
            this.CMax = limits[this.signalIdCenter].Max;
          }
    
          if (typeof limits[this.signalIdCenter] !== "undefined") {
            if (limits[this.signalIdCenter].L.value != "-") {
              this.CL = limits[this.signalIdCenter].L.value;
            } else {
              this.CL = null;
            }
            if (limits[this.signalIdCenter].LL.value != "-") {
              this.CLL = limits[this.signalIdCenter].LL.value;
            } else {
              this.CLL = null;
            }
            if (limits[this.signalIdCenter].H.value != "-") {
              this.CH = limits[this.signalIdCenter].H.value;
            } else {
              this.CH = null;
            }
            if (limits[this.signalIdCenter].HH.value != "-") {
              this.CHH = limits[this.signalIdCenter].HH.value;
            } else {
              this.CHH = null;
            }
          } else {
            this.CHasLimits = false;
          }
    
          if (
            typeof limits == "undefined" ||
            typeof limits[this.signalIdLeft] == "undefined"
          ) {
            this.LMin = 0;
            this.LMax = 1000;
          } else {
            this.LMin = limits[this.signalIdLeft].Min;
            this.LMax = limits[this.signalIdLeft].Max;
          }
    
          if (typeof limits[this.signalIdLeft] !== "undefined") {
            if (limits[this.signalIdLeft].L.value != "-") {
              this.LL = limits[this.signalIdLeft].L.value;
            } else {
              this.LL = null;
            }
            if (limits[this.signalIdLeft].LL.value != "-") {
              this.LLL = limits[this.signalIdLeft].LL.value;
            } else {
              this.LLL = null;
            }
            if (limits[this.signalIdLeft].H.value != "-") {
              this.LH = limits[this.signalIdLeft].H.value;
            } else {
              this.LH = null;
            }
            if (limits[this.signalIdLeft].HH.value != "-") {
              this.LHH = limits[this.signalIdLeft].HH.value;
            } else {
              this.LHH = null;
            }
          } else {
            this.LHasLimits = false;
          }
    
          if (
            typeof limits == "undefined" ||
            typeof limits[this.signalIdRight] == "undefined"
          ) {
            this.RMin = 0;
            this.RMax = 1000;
          } else {
            this.RMin = limits[this.signalIdRight].Min;
            this.RMax = limits[this.signalIdRight].Max;
          }
    
          if (typeof limits[this.signalIdRight] !== "undefined") {
            if (limits[this.signalIdRight].L.value != "-") {
              this.RL = limits[this.signalIdRight].L.value;
            } else {
              this.RL = null;
            }
            if (limits[this.signalIdRight].LL.value != "-") {
              this.RLL = limits[this.signalIdRight].LL.value;
            } else {
              this.RLL = null;
            }
            if (limits[this.signalIdRight].H.value != "-") {
              this.RH = limits[this.signalIdRight].H.value;
            } else {
              this.RH = null;
            }
            if (limits[this.signalIdRight].HH.value != "-") {
              this.RHH = limits[this.signalIdRight].HH.value;
            } else {
              this.RHH = null;
            }
          } else {
            this.RHasLimits = false;
          }

          this.DrawRangesMulti()
    },
  },

};
