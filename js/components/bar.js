components.bar = {
  props: [
    "signalId",
    "orientation",
    "unit",
    "title",
    "displayScale",
    "displayCapacity",
    "color",
    "pbarGrid",
    "pbarTitle",
    "pbarSize",
    "pbarValue",
    "scaleBottom",
    "scaleTop",
    "scaleStep",
    "scaleSegments",
    "size",
    "limitFlag",
    "showLimits",
    "valueMode",
    "icon",
    "iconSize",
    "iconMarginLeft",
    "valueDecimals",
    "limitsEditable",
    "scaleEditable",
    "timeDelay",
    "buttonTool",
  ],
  template: /*html*/ `

        <div class="ui col-button-tools" :class="[buttonTools]" style="z-index:11" v-if="(limitsEditable > 0  || scaleEditable > 0) ">
            <button class="ui btn mini icon icon-only link" v-if="scaleEditable > 0" v-on:click="scaleEdit">
                <svg class="ui icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M44.17,99.6c-.1-.23-1.2-3.33-2.47-6.87s-2.33-6.46-2.4-6.53-1.8-.77-3.83-1.6l-3.7-1.53L25.33,86.4,18.9,89.73,15,85.8a28.22,28.22,0,0,1-4-4.43,72.49,72.49,0,0,1,3-6.77l3-6.3L15.4,64.47l-1.53-3.84L7.1,58.47.33,56.27V44.5l6.5-2.33c3.6-1.27,6.64-2.4,6.77-2.5a23.16,23.16,0,0,0,1.8-3.84l1.53-3.63L13.8,25.93a72.65,72.65,0,0,1-3.13-6.7A32.5,32.5,0,0,1,14.6,14.9L18.53,11l6.64,3.13,6.63,3.1,3.5-1.47c2-.8,3.7-1.6,3.87-1.73a60.43,60.43,0,0,0,2.5-7.13L43.83,0l5.84.07,5.8.1L57.83,6.9c1.27,3.7,2.5,6.87,2.67,7.07a47.74,47.74,0,0,0,7.4,3,65.49,65.49,0,0,0,6.67-3.2l6.16-3.23,4.14,4.13L89,18.83,85.83,25.4,82.73,32l1.54,3.8,1.56,3.77,6.94,2.3,6.9,2.3-.07,5.76-.1,5.8-6.77,2.44c-3.73,1.33-6.8,2.46-6.86,2.53s-.77,1.8-1.6,3.8l-1.5,3.67L86,74.7l3.24,6.53L85.2,85.3l-4.07,4.07-6.6-3.17-6.6-3.13-3.56,1.5a24,24,0,0,0-3.9,1.86c-.2.24-1.3,3.37-2.47,7L55.87,100H50.1C45.77,100,44.27,99.9,44.17,99.6ZM54.3,65A13.85,13.85,0,0,0,61,60.77a14.4,14.4,0,0,0,4.3-10.64,15.37,15.37,0,0,0-8.93-14c-2.5-1.27-2.57-1.27-6.57-1.27s-4.06,0-6.53,1.24a18.89,18.89,0,0,0-6.87,6.13,16.79,16.79,0,0,0-1.56,12.17A16.47,16.47,0,0,0,45.27,65,17.29,17.29,0,0,0,54.3,65Z"></path></svg>
            </button>
            <button class="ui btn mini icon icon-only link" v-if="limitsEditable > 0 "  v-on:click="limitsEdit()">
                <svg class="ui icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M100,91.67H0c.64-2.6,1.25-5.15,1.92-7.68.07-.26.5-.47.81-.6a2.19,2.19,0,0,1,.77,0q46.49,0,93,0c1.07,0,1.58.21,1.8,1.39C98.72,87,99.39,89.27,100,91.67Z"></path><path d="M68.74,62.53,50,79.21,31.31,62.6H45.74V29.23H40L39.88,29,50,20.84,60.31,29.1H54.24V62.53Z"></path><path d="M20.85,16.59c.62-2.52,1.24-4.95,1.81-7.39.15-.68.47-.88,1.16-.87H76.16c.67,0,1,.18,1.16.86.57,2.44,1.19,4.87,1.81,7.4Z"></path><path d="M20.84,29.18A4.17,4.17,0,1,1,25,25.06,4.21,4.21,0,0,1,20.84,29.18Z"></path><path d="M83.33,25a4.17,4.17,0,1,1-4.27-4.12A4.19,4.19,0,0,1,83.33,25Z"></path><path d="M20.81,41.65a4.17,4.17,0,1,1-4.27-4.13A4.2,4.2,0,0,1,20.81,41.65Z"></path><path d="M83.27,45.86a4.17,4.17,0,1,1,4.23-4.17A4.21,4.21,0,0,1,83.27,45.86Z"></path><path d="M12.48,54.19A4.17,4.17,0,1,1,8.31,58.3,4.21,4.21,0,0,1,12.48,54.19Z"></path><path d="M87.5,54.19a4.17,4.17,0,1,1-4.17,4.11A4.21,4.21,0,0,1,87.5,54.19Z"></path><path d="M8.2,79.21a4.17,4.17,0,1,1,4.28-4A4.22,4.22,0,0,1,8.2,79.21Z"></path><path d="M95.83,75.07a4.17,4.17,0,1,1-4.07-4.2A4.2,4.2,0,0,1,95.83,75.07Z"></path></svg>
            </button>
        </div>

        <div class="flip-col go-bt" :class="[flipClass]">
        <div class="flip-col--container">
            <div class="ui col align-middle-center"
             :style="{ fontSize: '12px', display: 'flex', justifyContent: 'center', textAlign: 'left', height: orientation === 'horizontal' ? '3.5em' : '' }">
                <template v-if="orientation === 'horizontal'">
                <div style="display: flex; flex-direction: column; align-items: center; text-align: center;">
                        Id: {{signalId}}
                         {{deviceName}}
                        RAW: {{rawToShow}}
                    </div>
                </template>
                <template v-else>
                <div style="display: flex; flex-direction: column; align-items: center; text-align: center;">
                        Id: {{signalId}}<br/><br/>
                         {{deviceName}}<br/><br/>
                        RAW: {{rawToShow}}
                    </div>
                </template>
            </div>
            <div class="ui col tankClass" v-on:click="flipComponent()" ref="tankElement" style="overflow:hidden!important;">
                <div class="ui grid type2 gap-lg pad-no" :class="[smContainer, pbarGrid]">
                    <div :class="[pbarTitle]" v-if="orientation == 'horizontal' || icon !== 'undefined'">
                        <i class="ui" :class='[iconSizeClass, iconColor]' :id="svgId"></i>
                    </div>
                    <div class="col" :class="[pbarSize]">
                        <div class="ui pbar label divider value-2" :class="[orientation, sizeClass, smClass]">
                            <header v-if="orientation == 'vertical'">
                                <h4 class="ui" :class='[headerColor, titleClassSize]' v-bind="{ id: rndIDTitle }">{{title}}</h4>
                            </header>
                            <div class="pbar--container" style="margin-top: 6px">
                                <ul class="ui pbar--label" v-if="displayScale" v-html="scaleCode"></ul>
                                <ul class="ui pbar--label-divider" v-html="labelCode"></ul>
                                <div class="ui pbar--item">
                                    <div :class='[color]' v-bind="{ id: rndID }"></div>
                                </div>
                                <ul class="pbar--value">
                                    <li style="border-top: 1px solid #eea667;" v-if="H && showLimits" :style="positionH"><div>H</div></li>
                                </ul>
                                <ul class="pbar--value">
                                    <li class="value-red" v-if="HH && showLimits" :style="positionHH"><div>HH</div></li>
                                </ul>
                                <ul class="pbar--value">
                                    <li style="border-top: 1px solid #eea667;" v-if="L && showLimits" :style="positionL"><div>L</div></li>
                                </ul>
                                <ul class="pbar--value">
                                    <li class="value-red" v-if="LL && showLimits" :style="positionLL"><div>LL</div></li>
                                </ul>
                            </div>
                            <footer v-if="orientation == 'vertical'">
                                <div class="font-regular">
                                    <h1 class="ui font-bold" :class="[valueFontClassVertical]">{{valueToShow}}<span style="display: none;" >{{value}}</span></h1>
                                    <h5 v-if="displayCapacity" class="ui clr-subvalue-ui">/ {{scaleTop}} {{unit}}</h5>
                                    <h5 class=" ui clr-subvalue-ui" v-if="!displayCapacity">{{unit}}</h5>
                                </div>
                            </footer>
                        </div>
                    </div>
                    <div class="col" :class="[pbarValue]" v-if="orientation == 'horizontal'">
                        <h1 class="ui font-bold" :class="[valueFontClassHorizontal]">{{valueToShow}} <span style="display: none;" >{{value}}</span><small class="font-regular clr-subvalue-ui">{{unit}}</small></h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div v-bind:id="rndIDEdit" class="ui modal size-xl">
        <div class="modal-container">
            <div class="ui grid type1 cols-1 pad-no gap-mini">
                <div class="ui grid cols-1 col sm-1 gap-mini pad-no has-header has-footer" style="margin-bottom:50px">
                    <header class="ui col">
                        <font>{{title}}</font>
                        <span class="gradients">
                            <span class="gradient-left"></span>
                            <span class="gradient-right"></span>
                        </span>
                        
                        <button class="ui btn sm icon primary colored icon-only active" v-on:click="closePopup">
                            <svg class="ui icon" id="close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                <path d="M98.74,81.26q2.52,2.14,0,4.47l-13,13q-2.33,2.33-4.47,0L50,67.67,18.74,98.74q-2.14,2.52-4.47,0l-13-13q-2.33-2.33,0-4.47L32.33,50,1.26,18.93q-2.33-2.33,0-4.47l13-13.2q2.32-2.33,4.47,0L50,32.33,81.26,1.26c1.56-1.68,3-1.68,4.47,0l13,13q2.33,2.32,0,4.47L67.67,50Z"></path>
                            </svg>
                        </button>
                    </header>
                    <div class="ui col sm-1 pad-no">
                        <div class="col-content overflow modal-content">
                            <div class="ui col sm-1 pad-no gap-no bg-no">
                                <div class="sm-1 col overflow modalHeight" style="overflow-y: auto;">
                                    <ul class="ui table size-mini resp">
                                        <li class="thead">
                                            <div class="col-260" style="justify-content: center"><span>Interval</span></div>
                                            <div class="col-330" style="justify-content: center">RAW</div>
                                            <div class="col-330" style="justify-content: center">Unit</div>
                                            <div class="col-230-min" style="justify-content: center"></div>
                                        </li>
                                    </ul>
                                    <ul class="ui table size-mini resp overflow" style="height:600px">
                                        <li v-for="(item, key, index) in intervalList" :key="item.Id" v-bind="{ id: 'intervalId_' + item.Id }">
                                            <div class="col-260" style="justify-content: center; font-size:14px">
                                                <h5>{{key+1}}</h5>
                                            </div>
                                            <div class="ui col-330 h2 font-lcd middle-center raw" style="justify-content: center; font-size:14px" v-bind:data-order="key+1" v-bind:data-interval="item.Id" v-on:click="selectInterval">{{item.Raw}}</div>
                                            <div class="ui col-330 h2 font-lcd middle-center unit" style="justify-content: center; font-size:14px" v-bind:data-order="key+1" v-bind:data-interval="item.Id" v-on:click="selectInterval">{{item.Unit}}</div>
                                            <div class="col-230-mini" style="justify-content: center">
                                                <button class="ui btn sm gutter-mini" v-bind:data-interval="item.Id" style="padding: 5px!important; width: 120px;" v-on:click="deleteInterval">Delete</button>
                                                <button class="ui btn sm gutter-mini" v-bind:data-interval="item.Id" style="padding: 5px!important; width: 120px;" @click="updateInterval();">Update</button>
                                            </div>
                                        </li>
                                        <li id="intervalId_0">
                                            <div class="col-260" style="justify-content: center; font-size:14px">
                                                New
                                            </div>
                                            <div class="col-330 ui h3 font-lcd middle-center raw" style="justify-content: center; font-size:14px" data-order="new" data-interval="0" v-on:click="selectInterval">-</div>
                                            <div class="ui col-330 h3 font-lcd middle-center unit" style="justify-content: center; font-size:14px" data-order="new" data-interval="0" v-on:click="selectInterval">-</div>
                                            <div class="col-230-mini" style="justify-content: center">
                                                <button class="ui btn sm gutter-mini" style="padding: 5px!important; width: 120px;" @click="addNew();">Add</button>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="sm-1 col overflow middle-center gap-mini">
                                    <br><br><br>
                                    <ul class="ui table size-med resp">
                                        <li class="thead has-col-header">
                                            <div class="middle-center align-top-center">{{selectedIntervalText}}</div>
                                        </li>
                                    </ul>
                                    <ul class="ui table size-mini resp align-top-center">
                                        <li>
                                            <button class="ui btn sm gutter-mini" style="padding: 5px!important; width: 120px; margin:0.5em " v-on:click="valueModify" data-operation="+10000">+10000</button>
                                            <button class="ui btn sm gutter-mini" style="padding: 5px!important; width: 120px; margin:0.5em " v-on:click="valueModify" data-operation="+1000">+1000</button>
                                            <button class="ui btn sm gutter-mini" style="padding: 5px!important; width: 120px; margin:0.5em " v-on:click="valueModify" data-operation="+100">+100</button>
                                            <button class="ui btn sm gutter-mini" style="padding: 5px!important; width: 120px; margin:0.5em " v-on:click="valueModify" data-operation="+10">+10</button>
                                            <button class="ui btn sm gutter-mini" style="padding: 5px!important; width: 120px; margin:0.5em " v-on:click="valueModify" data-operation="+1">+1</button>
                                        </li>
                                        <li>
                                            <button class="ui btn sm gutter-mini" style="padding: 5px!important; width: 120px; margin:0.5em " v-on:click="valueModify" data-operation="-10000">-10000</button>
                                            <button class="ui btn sm gutter-mini" style="padding: 5px!important; width: 120px; margin:0.5em " v-on:click="valueModify" data-operation="-1000">-1000</button>
                                            <button class="ui btn sm gutter-mini" style="padding: 5px!important; width: 120px; margin:0.5em " v-on:click="valueModify" data-operation="-100">-100</button>
                                            <button class="ui btn sm gutter-mini" style="padding: 5px!important; width: 120px; margin:0.5em " v-on:click="valueModify" data-operation="-10">-10</button>
                                            <button class="ui btn sm gutter-mini" style="padding: 5px!important; width: 120px; margin:0.5em " v-on:click="valueModify" data-operation="-1">-1</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    

`,
  data() {
    return {
      value: null,
      valueToShow: null,
      HH: null,
      H: null,
      L: null,
      LL: null,
      hasLimits: true,
      positionH: null,
      positionHH: null,
      positionL: null,
      positionLL: null,
      headerColor: null,
      smContainer: null,
      rndID:
        Math.floor(Math.random() * (1000 - 100)) +
        Date.now() +
        "_" +
        this.signalId,
      rndIDTitle:
        Math.floor(Math.random() * (1000 - 100)) +
        Date.now() +
        "_title_" +
        this.signalId,
      rndIDEdit:
        Math.floor(Math.random() * (1000 - 100)) +
        Date.now() +
        "_edit_" +
        this.signalId,
      iconSizeClass: "icon-size-" + this.iconSize,
      svgId:
        Math.floor(Math.random() * (1000 - 100)) +
        Date.now() +
        "_svg_" +
        this.signalId,
      iconColor: "color-fill-type-light",
      smClass: null,
      titleClassSize: "h4",
      valueFontClassVertical: "h1",
      valueFontClassHorizontal: "h2",
      selectedIntervalText: "Select an interval value",
      selectedObject: null,
      intervalList: null,
      scaleType: null,
      newUnit: null,
      newRaw: null,
      changes: false,
      profileSelected: $("#activeProfile").val(),
      selectedRaw: null,
      selectedUnit: null,
      selectedIntervalId: null,
      flipClass: "event-click",
      raw: valueRaw[this.signalId],
      rawToShow: null,
      signalData: signalsData[this.signalId],
      deviceName: null,
      buttonTools: "",
    };
  },
  watch: {
    reactiveUpdate(newValue) {
      if (newValue) {
        this.drawLimits();
        setTimeout(() => {
          updateComponent[this.signalId].value = false;
        }, 1000);
      }
    },
  },
  mounted() {
    let rawData;
    if (Vue.isProxy(this.signalData)) {
      rawData = Vue.toRaw(this.signalData);
    }

    if (typeof rawData !== "undefined") {
      this.deviceName = deviceData[rawData.Device].Name;
    }

    if (this.orientation == "horizontal") {
      this.smClass = "mini-3";
      this.smContainer = "cols-mini-3";
      const svgContent = iconRegistry[this.icon];
      $("#" + this.svgId).html(svgContent);
      $("#" + this.svgId).css("margin-left", this.iconMarginLeft);

      style = "margin-left: 190px; ";
    } else {
      this.smClass = "sm-1";
      this.smContainer = "";
    }
    if (this.buttonTool) {
      this.buttonTools = "buttonTools";
    } else {
      this.buttonTools = "";
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

    if (this.value == null || this.value === "undefined") {
      this.valueToShow = "N/A";
    }

    if (typeof this.valueDecimals === "undefined") {
      this.decimals = 0;
    } else {
      this.decimals = this.valueDecimals;
    }
    this.drawLimits();

    this.initializeComponent();
  },
  updated() {
    if (!isNaN(this.value)) {
      this.valueToShow = parseFloat(this.value).toFixed(this.decimals);
      this.rawToShow = this.raw;
    }

    if (this.hasLimits && this.limitFlag == "onTitle") {
      if (this.value >= this.HH && this.HH != null) {
        $("#" + this.rndIDTitle).removeClass("color-text-type-warning ");
        $("#" + this.rndIDTitle).addClass("color-text-type-danger glow");
        this.iconColor = "color-fill-type-danger";
      } else if (
        this.value >= this.H &&
        this.value < this.HH &&
        this.HH != null &&
        this.H != null
      ) {
        $("#" + this.rndIDTitle).removeClass("color-text-type-danger");
        $("#" + this.rndIDTitle).addClass("color-text-type-warning glow");
        this.iconColor = "color-fill-type-warning";
      } else if (this.value > this.L && this.value < this.H) {
        $("#" + this.rndIDTitle).removeClass(
          "color-text-type-danger color-text-type-warning"
        );
        this.iconColor = "color-fill-type-success";
      } else if (
        this.value <= this.L &&
        this.value > this.LL &&
        this.L != null &&
        this.LL != null
      ) {
        $("#" + this.rndIDTitle).removeClass("color-text-type-danger");
        $("#" + this.rndIDTitle).addClass("color-text-type-warning glow");
        this.iconColor = "color-fill-type-warning";
      } else if (this.value <= this.LL && this.LL != null) {
        $("#" + this.rndIDTitle).removeClass("color-text-type-warning ");
        $("#" + this.rndIDTitle).addClass("color-text-type-danger glow");
      } else {
        $("#" + this.rndIDTitle).removeClass(
          "color-text-type-danger color-text-type-warning"
        );
        this.iconColor = "color-fill-type-danger";
      }
    }
    if (this.hasLimits && this.limitFlag == "onBar") {
      if (this.value >= this.HH && this.HH != null) {
        $("#" + this.rndID).removeClass("color-fl-yellow " + this.color);
        $("#" + this.rndID).addClass("color-fl-red glow");
        this.iconColor = "color-fill-type-danger";
      } else if (
        this.value >= this.H &&
        this.value < this.HH &&
        this.HH != null &&
        this.H != null
      ) {
        $("#" + this.rndID).removeClass("color-fl-red " + this.color);
        $("#" + this.rndID).addClass("color-fl-yellow glow");
        this.iconColor = "color-fill-type-warning";
      } else if (this.value > this.L && this.value < this.H) {
        $("#" + this.rndID).removeClass("color-fl-red color-fl-yellow ");
        $("#" + this.rndID).addClass(this.color);
        this.iconColor = "color-fill-type-success";
      } else if (
        this.value <= this.L &&
        this.value > this.LL &&
        this.L != null &&
        this.LL != null
      ) {
        $("#" + this.rndID).removeClass("color-fl-red color-fl-green");
        $("#" + this.rndID).addClass("color-fl-yellow glow");
        this.iconColor = "color-fill-type-warning";
      } else if (this.value <= this.LL && this.LL != null) {
        $("#" + this.rndID).removeClass("color-fl-yellow " + this.color);
        $("#" + this.rndID).addClass("color-fl-red glow");
        this.iconColor = "color-fill-type-danger";
      }
    }
    this.barStyles(this.value);
  },
  computed: {
    reactiveUpdate() {
      return updateComponent[this.signalId]?.value || false;
    },
    scaleCode() {
      let codeResult = "";
      for (let i = this.scaleBottom; i <= this.scaleTop; i += this.scaleStep) {
        codeResult = codeResult + "<li><div>" + i + "</div></li>";
      }
      return codeResult;
    },
    labelCode() {
      let codeResult = "";
      for (let i = 0; i <= this.scaleSegments; i++) {
        codeResult = codeResult + "<li></li>";
      }
      return codeResult;
    },
    sizeClass() {
      var classOutput;
      if (this.size == "regular") {
        classOutput = "size-lg h-mini-360 header-sm-x1 footer-lg-x1";
      }
      if (this.size == "small") {
        classOutput = "size-mini h-180 header-mini-x1 footer-mini-x1";
        this.titleClassSize = "h6";
        this.valueFontClassVertical = "h4";
        this.valueFontClassHorizontal = "h4";
      }
      if (this.size == "extraSmall") {
        classOutput = "size-mini h-120 header-mini-x1 footer-mini-x1";
        this.titleClassSize = "h6";
        this.valueFontClassVertical = "h5";
        this.valueFontClassHorizontal = "h5";
      }
      if (this.size == "medium") {
        classOutput = "size-med h-mini-320 header-mini-x1 footer-mini-x1";
      }
      if (this.orientation == "horizontal") {
        classOutput = "size-mini h-40";
      }

      return classOutput;
    },
  },
  methods: {
    initializeComponent() {
      if (this.reactiveUpdate) {

        this.drawLimits();

        setTimeout(() => {
            updateComponent[this.signalId].value = false;
        }, 1000);
       
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
    barStyles(value) {
      document.getElementById(this.rndID).style["flex-basis"] =
        this.percentage(value) + "%";
    },
    percentage(sentValue) {
      if (parseInt(this.scaleBottom) >= 0) {
        range = Number(this.scaleTop) - Number(this.scaleBottom);
      } else {
        range = Number(this.scaleTop) + Math.abs(this.scaleBottom);
      }
      var result = (parseInt(sentValue) * 100) / parseInt(range);
      return result.toFixed(2);
    },
    scaleEdit() {
      if (typeof this.scaleEditable !== "undefined" || this.scaleEditable > 0) {
        this.fetchData();
        this.closePopup();
      }
    },
    limitsEdit() {
      const signalID = this.signalId;
      signalList.editLimits(signalID);
    },
    closePopup() {
      $(".raw").removeClass("color-bg-type-primary-light");
      $(".unit").removeClass("color-bg-type-primary-light");
      this.selectedIntervalText = "Select an interval value";
      this.selectedObject = null;

      if ($("#" + this.rndIDEdit).hasClass("open") && this.changes) {
        let deviceId = signalsData[this.signalId].Device;
        let deviceName = deviceData[deviceId].Name;
        helpers.bringCollector(deviceName);
        this.changes = false;
      }

      $("#" + this.rndIDEdit).toggleClass("open");
    },
    async fetchData() {
      await new Promise((resolve) => {
        setTimeout(resolve, 600);
      });
      const res = await fetch(
        ACTIVE_SERVER +
          ":" +
          API.Port +
          "/scaleTableIntervals/" +
          this.scaleEditable
      );
      const data = await res.json();
      this.intervalList = data;
      this.scaleType = this.scaleEditable;
    },
    selectInterval(event) {
      this.selectedObject = event.target;

      $(".raw").removeClass("color-bg-type-primary-light");
      $(".unit").removeClass("color-bg-type-primary-light");
      $(event.target).addClass("color-bg-type-primary-light");

      let interval = $(event.target).attr("data-interval");
      let order = $(event.target).attr("data-order");
      let valueType;

      if ($(event.target).hasClass("raw")) {
        valueType = " Raw ";
      }
      if ($(event.target).hasClass("unit")) {
        valueType = " Unit ";
      }

      this.selectedIntervalText =
        "Interval " + order + " " + valueType + " modify";
      this.valueToModify = $(event.target).text();

      if (this.valueToModify == "-") {
        this.valueToModify = 0;
      }
    },
    valueModify(event) {
      let outputValue =
        parseInt(this.valueToModify) +
        parseInt($(event.target).attr("data-operation"));
      this.valueToModify = outputValue;
      $(this.selectedObject).html(outputValue);

      let selectedIntervalIdValue = $(this.selectedObject).attr(
        "data-interval"
      );

      //UPDATE
      if (selectedIntervalIdValue > 0) {
        let selectIntervalRaw = null;
        let selectIntervalUnit = null;

        $("#intervalId_" + selectedIntervalIdValue)
          .find("div")
          .each(function () {
            if ($(this).hasClass("raw")) {
              console.log($(this).text());
              selectIntervalRaw = $(this).text();
            }
            if ($(this).hasClass("unit")) {
              selectIntervalUnit = $(this).text();
            }
          });
        console.log(selectIntervalRaw, selectIntervalUnit);
        this.selectedRaw = selectIntervalRaw;
        this.selectedUnit = selectIntervalUnit;
        this.selectedIntervalId = selectedIntervalIdValue;

        //INSERT
      } else {
        if ($(this.selectedObject).hasClass("raw")) {
          this.newRaw = outputValue;
        }
        if ($(this.selectedObject).hasClass("unit")) {
          this.newUnit = outputValue;
        }
      }
      this.changes = true;
    },

    updateInterval() {
      if (this.selectedRaw != null && this.selectedUnit != null) {
        this.sendUpdate(
          this.selectedIntervalId,
          this.selectedRaw,
          this.selectedUnit,
          this.scaleType
        );
      }
    },

    addNew(event) {
      $(this.selectedObject)
        .parent()
        .parent()
        .find("h1")
        .each(function () {
          $(this).css("background-color", "transparent");
          $(this).html("-");
        });

      if (this.newUnit != null && this.newRaw != null) {
        this.sendUpdate(0, this.newRaw, this.newUnit, this.scaleType);
        this.newUnit = null;
        this.newRaw = null;
      }
    },
    sendUpdate(id, raw, unit, scaletype) {
      var data = JSON.stringify({
        Id: parseInt(id),
        Raw: parseInt(raw),
        Unit: parseInt(unit),
        ScaleType: scaletype,
      });

      var settings = {
        async: true,
        crossDomain: true,
        url: ACTIVE_SERVER + ":" + API.Port + "/scaleTableIntervalUpdate",
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        processData: false,
        data: data,
      };

      $.ajax(settings).done(function () {
        console.log(
          id + "=Raw->" + raw + " Unit->" + unit + " ScaleType->" + scaletype
        );
      });
      this.fetchData();
    },
    deleteInterval(event) {
      let intervalId = parseInt($(event.target).attr("data-interval"));
      var settings = {
        async: true,
        crossDomain: true,
        url:
          ACTIVE_SERVER +
          ":" +
          API.Port +
          "/scaleTableIntervalsDelete/" +
          intervalId,
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
        processData: false,
      };

      $.ajax(settings).done(function () {
        console.log("Deleted->" + intervalId);
      });
      this.fetchData();
    },
    drawLimits() {
      if (typeof limits[this.signalId] !== "undefined") {
        if (typeof limits[this.signalId].L !== "undefined") {
          if (limits[this.signalId].L.value != "-") {
            this.L = limits[this.signalId].L.value;
            this.positionL = { flex: "0 0 " + this.percentage(this.L) + "%" };
          } else {
            this.L = null;
          }
        }
        if (typeof limits[this.signalId].LL !== "undefined") {
          if (limits[this.signalId].LL.value != "-") {
            this.LL = limits[this.signalId].LL.value;
            this.positionLL = { flex: "0 0 " + this.percentage(this.LL) + "%" };
          } else {
            this.LL = null;
          }
        }
        if (typeof limits[this.signalId].H !== "undefined") {
          if (limits[this.signalId].H.value != "-") {
            this.H = limits[this.signalId].H.value;
            this.positionH = { flex: "0 0 " + this.percentage(this.H) + "%" };
          } else {
            this.H = null;
          }
        }
        if (typeof limits[this.signalId].HH !== "undefined") {
          if (limits[this.signalId].HH.value != "-") {
            this.HH = limits[this.signalId].HH.value;
            this.positionHH = { flex: "0 0 " + this.percentage(this.HH) + "%" };
          } else {
            this.HH = null;
          }
        }
      } else {
        this.hasLimits = false;
      }
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
