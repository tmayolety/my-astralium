components.gauge = {
    inheritAttrs: false,
    props: [
        'title',
        'signalId',
        'unit',
        'icon',
        'iconClass',
        'height',
        'width',
        'textSize',
        'scaleVisible',
        'scaleInterval',
        'type',
        'valueMode',
        'unitTextSize',
        'marginTopValue',
        'valueDecimals',
        'limitsEditable',
        'timeDelay',
    ],

    template: /*html*/`

        <div class="ui col-button-tools" style="z-index:11; margin-top:1em;" v-if="limitsEditable > 0">
            <button class="ui btn mini icon icon-only link" v-if="limitsEditable > 0 "  v-on:click="limitsEdit()">
                <svg class="ui icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <path d="M100,91.67H0c.64-2.6,1.25-5.15,1.92-7.68.07-.26.5-.47.81-.6a2.19,2.19,0,0,1,.77,0q46.49,0,93,0c1.07,0,1.58.21,1.8,1.39C98.72,87,99.39,89.27,100,91.67Z"></path><path d="M68.74,62.53,50,79.21,31.31,62.6H45.74V29.23H40L39.88,29,50,20.84,60.31,29.1H54.24V62.53Z"></path><path d="M20.85,16.59c.62-2.52,1.24-4.95,1.81-7.39.15-.68.47-.88,1.16-.87H76.16c.67,0,1,.18,1.16.86.57,2.44,1.19,4.87,1.81,7.4Z"></path><path d="M20.84,29.18A4.17,4.17,0,1,1,25,25.06,4.21,4.21,0,0,1,20.84,29.18Z"></path><path d="M83.33,25a4.17,4.17,0,1,1-4.27-4.12A4.19,4.19,0,0,1,83.33,25Z"></path><path d="M20.81,41.65a4.17,4.17,0,1,1-4.27-4.13A4.2,4.2,0,0,1,20.81,41.65Z"></path><path d="M83.27,45.86a4.17,4.17,0,1,1,4.23-4.17A4.21,4.21,0,0,1,83.27,45.86Z"></path><path d="M12.48,54.19A4.17,4.17,0,1,1,8.31,58.3,4.21,4.21,0,0,1,12.48,54.19Z"></path><path d="M87.5,54.19a4.17,4.17,0,1,1-4.17,4.11A4.21,4.21,0,0,1,87.5,54.19Z"></path><path d="M8.2,79.21a4.17,4.17,0,1,1,4.28-4A4.22,4.22,0,0,1,8.2,79.21Z"></path><path d="M95.83,75.07a4.17,4.17,0,1,1-4.07-4.2A4.2,4.2,0,0,1,95.83,75.07Z"></path></svg>
            </button>
        </div>

        <div class="flip-col go-bt " :class="[flipClass]">
            <div class="flip-col--container">                       
            <div class="ui col align-middle-center"
            style="font-size: 12px; display: flex; justify-content: center; text-align: left;">  
                <button class="ui btn mini colored secondary textColorTheme" @click="callTimeline(this.signalId, this.title, this.timeDelay)" style="width: 100%;">
                    Id: {{signalId}} <br/>
                    {{deviceName}} <br/>                                                
                    RAW: {{rawToShow}} 
                </button>                                                                                                                                      
            </div> 
            
            <div class="ui col has-col-header"  v-on:click="flipComponent()" ref="gaugeElement">
                <header class="col-header ">{{title}}</header>
                <div class="ui grid type1 cols-mini-1" :class= '[heightClass, widthClass]'>
    
                    <div class="ui col mini-1 circularGauge-wrapper status-type-success" :class= '[valueClass]' style="padding: 10px 0 0 0;">
                        <div v-bind="{ id: rndID}"  class="circularGauge"></div>


                            <div class="infos-container visible" :class='[marginTopValue]'>
                                <i class="ui status-icon glow visible" :class='[icon, iconClass]' :id="svgId"></i>
                                <div class="ui clr-subvalue-ui color-text-type-secondary-dark" :class='[unitTextSizeClass]'>{{unit}}</div>
                                <div class="ui font-bold" :class='[textSizeClass]'>{{valueDisplay}}</div>
                                <div style="display: none!important;">{{value}}</div>
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
            valueDisplay: null,
            unitClass: '',
            valueClass: 'status-type-success',
            LL: null,
            L: null,
            H: null,
            HH: null,
            Min: null,
            Max: null,
            hasLimits: true,
            rndID:  (Math.floor(Math.random() * (1000 - 100))) + Date.now() + '_' + this.signalId,
            svgId:  (Math.floor(Math.random() * (1000 - 100)))  + Date.now() + '_icon_' + this.signalId,
            heightClass: '' + this.height,
            widthClass: '' + this.width,
            iconSizeClass: '' + this.iconSize,
            textSizeClass: 'text-size-' + this.textSize,
            marginTopIcon: '',
            marginTopValueClass: '' + this.marginTopValue + '' + this.marginTopValue,
            unitTextSizeClass: 'text-size-' + this.unitTextSize,
            flipClass: 'event-click',
            raw: valueRaw[this.signalId],
            rawToShow: null,
            signalData: signalsData[this.signalId],
            deviceName: null,
            rewindMode : rewindValuesMode,
            globalRewind : globalRewindUpdate
        }
    },
    created() {
        eventBus.subscribe('rewindValuesModeChanged', (newVal) => {
          this.rewindMode = newVal;
        });
        eventBus.subscribe('globalRewindUpdateChanged', (newVal) => {
           this.globalRewind = newVal;
        });

      },
    watch: {
        rewindMode(newVal, oldVal) {
            this.rewindCheck()
        },
        globalRewind(newVal, oldVal) {
            this.rewindCheck()
            },
    },
    updated()
    {
        this.rewindCheck()

        if (this.hasLimits) {

            let result = {};
            result.HH = false;
            result.H = false;
            result.L = false;
            result.LL = false;

            this.HH = limits[this.signalId].HH.value;
            this.H = limits[this.signalId].H.value;
            this.L = limits[this.signalId].L.value;
            this.LL = limits[this.signalId].LL.value;

            if ( parseFloat(this.value) >=  parseFloat(this.HH)) { result.HH = true; }
            if ( parseFloat(this.value) >=  parseFloat(this.H) &&  ((parseFloat(this.value) <  parseFloat(this.HH) || this.HH == '-'))) { result.H = true; }
            if ( parseFloat(this.value) <=  parseFloat(this.L) &&  ((parseFloat(this.value) >  parseFloat(this.LL)) || this.LL == '-')) { result.L = true; }
            if ( parseFloat(this.value) <=  parseFloat(this.LL) ) { result.LL = true; }

            if (result.HH || result.LL ) { this.valueClass = 'status-type-danger'; } else
            if (result.H || result.L ) { this.valueClass = 'status-type-warning2'; } else
            if (!result.H || !result.L || !result.HH || !result.LL) { this.valueClass = 'status-type-success'; }

            if (updateComponent[this.signalId] === true) {

                updateComponent[this.signalId] = false;
                this.reDrawRanges();

            }
        }

    },
    mounted()
    {
        let rawData;
        if (Vue.isProxy(this.signalData)){
            rawData = Vue.toRaw(this.signalData)
        }
        if(typeof rawData !== "undefined"){
            this.deviceName = deviceData[rawData.Device].Name
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

        if (this.value == null){
            this.valueDisplay = 'N/A'
            this.valueClass = 'status-type-light'
        }
        if (typeof this.valueDecimals === 'undefined') {
            this.decimals = 0
        } else {
            this.decimals = this.valueDecimals
        }
        if ( typeof this.type !== 'undefined' ) {
            var preset = this.type
        } else {
            var preset = 0
        }
        if ( typeof this.scaleInterval === 'undefined' ) {
            this.scaleIntervalSet = 5
        } else {
            this.scaleIntervalSet = this.scaleInterval
        }

        if ( typeof this.unitTextSize == 'undefined' ){
            this.unitTextSizeClass = 'text-size-5'
        }

        if ( typeof this.marginTopValue == 'undefined' ){
            this.marginTopValueClass = 'mg-top-mini-50'
        }

        switch (preset) {
            default:
                startAngle = -180
                endAngle = 0
                barSize = 30
                if (this.height < 131) {
                    this.marginTopValueClass = ''
                    this.marginTopIcon = ''
                    barSize = 12
                }
                break;
            case 1:
                startAngle = -140
                endAngle = -40
                barSize = 20
                if (this.width < 300) {
                    barSize = 9
                }
                break;
        }

        if ( typeof limits === 'undefined' || typeof limits[this.signalId] === 'undefined' ) {
            this.Min = 0
            this.Max = 1000
        } else {
            this.Min = limits[this.signalId].Min
            this.Max = limits[this.signalId].Max
        }

        if (typeof limits[this.signalId] !== 'undefined') {
            if (typeof limits[this.signalId].L !== 'undefined') {  if (limits[this.signalId].L.value != '-'){  this.L = limits[this.signalId].L } else {  this.L = null;  } }
            if (typeof limits[this.signalId].LL !== 'undefined') { if (limits[this.signalId].LL.value != '-'){  this.LL = limits[this.signalId].LL } else {  this.LL = null;  }  }
            if (typeof limits[this.signalId].H !== 'undefined') { if (limits[this.signalId].H.value != '-'){  this.H = limits[this.signalId].H } else {  this.H = null;  }  }
            if (typeof limits[this.signalId].HH !== 'undefined') { if (limits[this.signalId].HH.value != '-'){  this.HH = limits[this.signalId].HH } else {  this.HH = null;  }  }
        } else {
            this.hasLimits = false
        }

        const svgContent = iconRegistry[this.icon]
        $( "#"+this.svgId).html(svgContent)

        this.gaugeData =  $('#'+this.rndID).dxCircularGauge({

            geometry: {
                startAngle: startAngle,
                endAngle: endAngle,
            },
            scale: {
                startValue: this.Min,
                endValue: this.Max,
                tickInterval: this.scaleIntervalSet,
                tick: {
                    color:"RGBA(var(--clr-subvalue-ui) / 40%",
                    length:8,
                    visible: this.scaleVisible,
                    width:1
                },
                minorTick: {
                    color:"RGBA(var(--clr-subvalue-ui) / 25%",
                    length:4,
                    visible: this.scaleVisible,
                    width:1
                },
                label: {
                    indentFromTick: 2,
                    visible:  this.scaleVisible,
                    customizeText(arg) {
                        return `${arg.valueText}`;
                    },
                },
                orientation: "outside",
            },
            // MARGIN
            margin: {
                bottom: 0,
                left: 0,
                right: 0,
                top: 0
            },
            // RANGE
            rangeContainer: {
                backgroundColor:"RGBA(var(--clr-subvalue-ui) / 15%",
                offset:7,
                width: 1,
                orientation:"outside"
            },
            // GAUGE
            value: 0,
            valueIndicator: {
                type: 'rangebar',
                backgroundColor:"RGBA(var(--clr-subvalue-ui) / 15%)",
                baseValue: 0,
                offset: 10,
                size: barSize,
            },
            redrawOnResize:false
        }).dxCircularGauge('instance');
        this.gaugeData.option('value', this.value);
        this.reDrawRanges()

        this.valueDisplay = this.value;

        // Observer for push id to global array
        const gaugeElement = this.$refs.gaugeElement;
    
        if (gaugeElement) {
            let observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
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
            observer.observe(gaugeElement);
        } else {
            console.error('Ref element is not available.');
        }


    },
    methods: {
        rewindCheck(){
           if (!isNaN(this.value) && !this.rewindMode == true) {
                this.valueDisplay = parseFloat(this.value).toFixed(this.decimals)
                this.rawToShow = this.raw
                this.gaugeData.option('value', this.value);
            }
            else{
                if(visibleHistoricalValue.includes(this.signalId)){
                setTimeout(() => {
                    if (this.signalId in valueHistorical) {
                        this.valueDisplay = parseFloat(valueHistorical[this.signalId][0].Value).toFixed(this.decimals)
                        this.gaugeData.option('value', this.valueDisplay);
                    
                    } else {
                        this.valueDisplay = 'N/A';
                    }
                }, 500);  
            }else{
                return;
            }  
            }
        },
        callTimeline(signal, title, delay){
            window.signalGlobalTimelineVariable = signal;
            window.globalTimelineTitle = title;
            window.globalTimelineDelay = delay;

            eventBus.emit('timeline-variable-updated', signal);
            eventBus.emit('timeline-variable-updated-title', title);
            eventBus.emit('timeline-variable-update-delay', delay);
        },
        limitsEdit() {

            const signalID = this.signalId;
            signalList.editLimits(signalID);

        },
        reDrawRanges () {

            if (this.LL == null && this.L == null && this.HH == null && this.H == null) {
                this.gaugeData.option('rangeContainer', { ranges: [
                        { startValue: this.Min, endValue: this.Max, color: 'RGBA(var(--clr-subvalue-ui) / 15%)'}
                    ] });
            }

            if ( (this.LL != null && this.L != null) && this.HH != null && this.H != null ) {
                this.gaugeData.option('rangeContainer', { ranges: [
                        { startValue: this.Min, endValue: this.LL, color: 'RGBA(var(--clr-type-danger) / 50%)' },
                        { startValue: this.LL, endValue: this.L, color: 'RGBA(var(--clr-type-warning2) / 50%)' },
                        { startValue: this.L, endValue: this.H, color: 'RGBA(var(--clr-subvalue-ui) / 15%)'  },
                        { startValue: this.H, endValue: this.HH, color: 'RGBA(var(--clr-type-warning2) / 50%)'  },
                        { startValue: this.HH, endValue: this.Max, color: 'RGBA(var(--clr-type-danger) / 50%)'  },
                    ] });
            }

            if ( (this.HH == null && this.H == null) && (this.LL != null && this.L != null)) {
                this.gaugeData.option('rangeContainer', { ranges: [
                        { startValue: this.Min, endValue: this.LL, color: 'RGBA(var(--clr-type-danger) / 50%)' },
                        { startValue: this.LL, endValue: this.L, color: 'RGBA(var(--clr-type-warning2) / 50%)' },
                        {  startValue: this.L, endValue: this.Max, color: 'RGBA(var(--clr-subvalue-ui) / 15%)' }
                    ] });
            }

            if ( (this.HH != null && this.H != null) && (this.LL == null && this.L == null)) {
                this.gaugeData.option('rangeContainer', { ranges: [
                        { startValue: this.HH, endValue: this.Max, color: 'RGBA(var(--clr-type-danger) / 50%)' },
                        { startValue: this.H, endValue: this.HH, color: 'RGBA(var(--clr-type-warning2) / 50%)' },
                        {  startValue: this.Min, endValue: this.H, color: 'RGBA(var(--clr-subvalue-ui) / 15%)' }
                    ] });
            }

            if ( (this.HH != null && this.H == null) && (this.LL != null && this.L != null)) {
                this.gaugeData.option('rangeContainer', { ranges: [
                        {  startValue: this.Min, endValue: this.LL, color: 'RGBA(var(--clr-type-danger) / 50%)' },
                        { startValue: this.LL, endValue: this.L, color: 'RGBA(var(--clr-type-warning2) / 50%)'  },
                        { startValue: this.L, endValue: this.HH, color: 'RGBA(var(--clr-subvalue-ui) / 15%)'   },
                        { startValue: this.HH, endValue: this.Max, color: 'RGBA(var(--clr-type-danger) / 50%)'  },
                    ] });
            }

            if ( (this.HH != null && this.H == null) && (this.LL != null && this.L == null)) {
                this.gaugeData.option('rangeContainer', { ranges: [
                        {  startValue: this.Min, endValue: this.LL, color: 'RGBA(var(--clr-type-danger) / 50%)' },
                        { startValue: this.LL, endValue: this.HH, color: 'RGBA(var(--clr-subvalue-ui) / 15%)'   },
                        { startValue: this.HH, endValue: this.Max, color: 'RGBA(var(--clr-type-danger) / 50%)'  },
                    ] });
            }

            if ( (this.HH != null && this.H == null) && (this.LL == null && this.L != null)) {
                this.gaugeData.option('rangeContainer', { ranges: [
                        {  startValue: this.Min, endValue: this.L, color: 'RGBA(var(--clr-type-warning2) / 50%)' },
                        { startValue: this.L, endValue: this.HH, color: 'RGBA(var(--clr-subvalue-ui) / 15%)'   },
                        { startValue: this.HH, endValue: this.Max, color: 'RGBA(var(--clr-type-danger) / 50%)'  },
                    ] });
            }

            if ( (this.HH == null && this.H != null) && (this.LL != null && this.L != null)) {
                this.gaugeData.option('rangeContainer', { ranges: [
                        {  startValue: this.Min, endValue: this.LL, color: 'RGBA(var(--clr-type-danger) / 50%)' },
                        { startValue: this.LL, endValue: this.L, color: 'RGBA(var(--clr-type-warning2) / 50%)' },
                        { startValue: this.L, endValue: this.H, color: 'RGBA(var(--clr-subvalue-ui) / 15%)'   },
                        { startValue: this.H, endValue: this.Max, color: 'RGBA(var(--clr-type-warning2) / 50%)' },
                    ] });
            }


            if ( (this.HH == null && this.H != null) && (this.LL != null && this.L == null)) {
                this.gaugeData.option('rangeContainer', { ranges: [
                        { startValue: this.Min, endValue: this.LL, color: 'RGBA(var(--clr-type-danger) / 50%)' },
                        { startValue: this.LL, endValue: this.H, color: 'RGBA(var(--clr-subvalue-ui) / 15%)'   },
                        { startValue: this.H, endValue: this.Max, color: 'RGBA(var(--clr-type-warning2) / 50%)' },
                    ] });
            }

            if ( (this.HH == null && this.H != null) && (this.LL == null && this.L != null)) {
                this.gaugeData.option('rangeContainer', { ranges: [
                        { startValue: this.Min, endValue: this.L, color: 'RGBA(var(--clr-type-warning2) / 50%)' },
                        { startValue: this.L, endValue: this.H, color: 'RGBA(var(--clr-subvalue-ui) / 15%)'   },
                        { startValue: this.H, endValue: this.Max, color: 'RGBA(var(--clr-type-warning2) / 50%)' },
                    ] });
            }

            if ( (this.L != null) && ( this.LL == null && this.H == null && this.HH == null )) {
                this.gaugeData.option('rangeContainer', { ranges: [
                        { startValue: this.Min, endValue: this.L, color: 'RGBA(var(--clr-subvalue-ui) / 15%)' },
                        { startValue: this.L, endValue: this.Max, color: 'RGBA(var(--clr-type-warning2) / 50%)'  }
                    ] });
            }

            if ( (this.LL != null) && ( this.HH == null && this.L == null && this.H == null )) {
                this.gaugeData.option('rangeContainer', { ranges: [
                        { startValue: this.Min, endValue: this.LL, color: 'RGBA(var(--clr-type-danger) / 50%)'  },
                        { startValue: this.LL, endValue: this.Max, color: 'RGBA(var(--clr-subvalue-ui) / 15%)'   }
                    ] });
            }

            if ( (this.H != null) && ( this.LL == null && this.L == null && this.HH == null )) {
                this.gaugeData.option('rangeContainer', { ranges: [
                        { startValue: this.Min, endValue: this.H, color: 'RGBA(var(--clr-subvalue-ui) / 15%)' },
                        { startValue: this.H, endValue: this.Max, color: 'RGBA(var(--clr-type-danger) / 50%)'   }
                    ] });
            }

            if ( (this.HH != null) && ( this.LL == null && this.L == null && this.H == null )) {
                this.gaugeData.option('rangeContainer', { ranges: [
                        { startValue: this.Min, endValue: this.HH, color: 'RGBA(var(--clr-subvalue-ui) / 15%)' },
                        { startValue: this.HH, endValue: this.Max, color: 'RGBA(var(--clr-type-danger) / 50%)' }
                    ] });
            }

            if ( (this.LL == null && this.L == null) && (this.HH != null && this.H != null)) {
                this.gaugeData.option('rangeContainer', { ranges: [
                        { startValue: this.Min, endValue: this.H, color: 'RGBA(var(--clr-subvalue-ui) / 15%)' },
                        { startValue: this.H, endValue: this.HH, color: 'RGBA(var(--clr-type-warning2) / 50%)' },
                        { startValue: this.HH, endValue: this.Max, color: 'RGBA(var(--clr-type-danger) / 50%)' }
                    ] });
            }

            if ( (this.LL == null && this.L != null) && (this.HH != null && this.H != null)) {
                this.gaugeData.option('rangeContainer', { ranges: [
                        { startValue: this.Min, endValue: this.L , color: 'RGBA(var(--clr-type-warning2) / 50%)' },
                        { startValue: this.L, endValue: this.H, color: 'RGBA(var(--clr-subvalue-ui) / 15%)' },
                        { startValue: this.H, endValue: this.HH, color: 'RGBA(var(--clr-type-warning2) / 50%)' },
                        { startValue: this.HH, endValue: this.Max, color: 'RGBA(var(--clr-type-danger) / 50%)' },
                    ] });
            }

            if ( (this.LL != null && this.L == null) && (this.HH != null && this.H != null)) {
                this.gaugeData.option('rangeContainer', { ranges: [
                        { startValue: this.Min, endValue: this.LL , color: 'RGBA(var(--clr-type-danger) / 50%)' },
                        { startValue: this.LL, endValue: this.H, color: 'RGBA(var(--clr-subvalue-ui) / 15%)' },
                        { startValue: this.H, endValue: this.HH, color: 'RGBA(var(--clr-type-warning2) / 50%)' },
                        { startValue: this.HH, endValue: this.Max, color: 'RGBA(var(--clr-type-danger) / 50%)' },
                    ] });
            }

        },
        flipComponent(){
            this.flipClass = '';
            setTimeout(this.unFlipComponent, 3000)
        },
        unFlipComponent() {
            this.flipClass = 'event-click';
        }
    }
};

