components.basicTextWithTitle = {
    inheritAttrs: false,
    props: [
    'signalId',
    'signalId2',
    'title',
    'titleStyle',
    'valueStyle',
    'valueSmallStyle',
    'value2Style',
    'value2SmallStyle',
    'unit',
    'unit2',
    'valueMode',
    'valueDecimals',
    'limitsEditable',
    'limitFlagSignalId',
    'timeDelay'
],
    template: /*html*/`

        <div v-if="limitsEditable > 0" v-on:click="limitsEdit()">
            <div :class= '[titleClass, titleStyle]'> {{ title }}</div>
            <div :class= '[valueClass, valueStyle]'> {{ valueToShow }} <small :class= '[valueSmallStyle]'>{{ unit }}</small></div>
            <div class="font-bold resp" :class= '[value2Style]' v-if="value2Display"> {{ value2 }} <small :class= '[value2SmallStyle]'>{{ unit2 }}</small></div>
            <span style="display: none;">{{value}}</span>
            <span style="display: none;">{{LL}}</span>
            <span style="display: none;">{{L}}</span>                            
            <span style="display: none;">{{HH}}</span>
            <span style="display: none;">{{H}}</span>
        </div>
 
        <div v-else class="flip-col go-bt " :class="[flipClass]">
        
            <div class="flip-col--container">
                                                    
                <div class="ui col align-middle-center" style="font-size: 12px; display: flex; justify-content: center; text-align:left;" >
                    <button class="ui btn mini colored secondary textColorTheme" @click="callTimeline(this.signalId, this.title, this.timeDelay)" style="width: 100%; height: 100%;">
                        Id: {{signalId}}<br>
                        {{deviceName}}<br>
                        RAW: {{rawToShow}}
                    </button>                                                                             

                </div>                     

                <div class="ui col align-middle-center"  v-on:click="flipComponent()">

                    <div :class= '[titleClass, titleStyle]'> {{ title }}</div>
                    <div :class= '[valueClass, valueStyle]'> {{ valueToShow }} <small :class= '[valueSmallStyle]'>{{ unit }}</small></div>
                    <div class="font-bold resp" :class= '[value2Style]' v-if="value2Display"> {{ value2 }} <small :class= '[value2SmallStyle]'>{{ unit2 }}</small></div>
                    <span style="display: none;">{{value}}</span>
                    <span style="display: none;">{{LL}}</span>
                    <span style="display: none;">{{L}}</span>
                    <span style="display: none;">{{HH}}</span>
                    <span style="display: none;">{{H}}</span>
                
                </div>

            </div>

        </div>

        `,
    data() {
        return {
            value: null,
            value2: null,
            titleClass: 'color-text-type-secondary-white',
            valueToShow: null,
            unitClassSize: null,
            valueClass: 'color-text-type-white',
            value2Class: null,
            value2Display: true,
            LL: null,
            L: null,
            H: null,
            HH: null,
            hasLimits: true,
            hasLimitFlag: false,
            skipLimits: false,
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
    updated(){

        this.rewindCheck()

        if ( this.hasLimitFlag === true && typeof valueRaw[parseInt(this.limitFlagSignalId)] !== 'undefined' && valueRaw[parseInt(this.limitFlagSignalId)].value < 1)
        {
           this.skipLimits = true
        } else {
            this.skipLimits = false
        }

        if (this.hasLimits && !this.skipLimits) {

            let result = {};
            result.HH = false;
            result.H = false;
            result.L = false;
            result.LL = false;

            if ( parseFloat(this.value) >=  parseFloat(this.HH)) { result.HH = true; }
            if ( parseFloat(this.value) >=  parseFloat(this.H) &&  ( (parseFloat(this.value) <  parseFloat(this.HH) || this.HH == null)) ) { result.H = true; }
            if ( parseFloat(this.value) <=  parseFloat(this.L) &&  ( (parseFloat(this.value) >  parseFloat(this.LL)) || this.LL == null) ) { result.L = true; }
            if ( parseFloat(this.value) <=  parseFloat(this.LL) ) { result.LL = true; }

            if (result.HH || result.LL ) { this.valueClass = 'color-text-type-danger'; } else
            if (result.H || result.L ) { this.valueClass = 'color-text-type-warning'; } else
            if (!result.H || !result.L || !result.HH || !result.LL) { this.valueClass = 'color-text-type-white'; }

        } else {
            this.valueClass = 'color-text-type-white';
        }

    },
    mounted(){
        // Observer for push id to global array

        let observer = new IntersectionObserver((entries, observer) => {
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
        observer.observe(this.$el);

        let rawData;
        if (Vue.isProxy(this.signalData)){
            rawData = Vue.toRaw(this.signalData)
        }

        if(typeof rawData !== "undefined"){
            this.deviceName = deviceData[rawData.Device].Name

        }

        this.valueClass = 'color-text-type-white';
        switch (this.valueMode) {
            case "filtered":
                this.value = valueFiltered[this.signalId];
                this.value2 = valueFiltered[this.signalId2];
                break;
            case "escalated":
                this.value = valueEscalated[this.signalId];
                this.value2 = valueEscalated[this.signalId2];
                break;
            default:
            case "raw":
                this.value = valueRaw[this.signalId];
                this.value2 = valueRaw[this.signalId2];
                break;
        }

        if (typeof this.valueDecimals === 'undefined') {
            this.decimals = 0
        } else {
            this.decimals = this.valueDecimals
        }

        if (typeof this.limitFlagSignalId === 'undefined') {
            this.hasLimitFlag = false
        } else {
            this.hasLimitFlag = true
        }

        if (typeof limits[this.signalId] !== 'undefined') {
            if (limits[this.signalId].L.value != '-')  {  this.L = limits[this.signalId].L } else {  this.L = null;  }
            if (limits[this.signalId].LL.value != '-') {  this.LL = limits[this.signalId].LL } else {  this.LL = null;  }
            if (limits[this.signalId].H.value != '-')  {  this.H = limits[this.signalId].H } else {  this.H = null;  }
            if (limits[this.signalId].HH.value != '-') {  this.HH = limits[this.signalId].HH } else {  this.HH = null;  }
        } else { this.hasLimits = false }

        if (this.value == null){
            this.valueToShow = 'N/A'
            this.valueClass = 'color-text-type-secondary-dark'
        }
        if (this.value2 == null){
            this.value2Display = false
        }

    },
    methods:{

        callTimeline(signal, title, delay){
            window.signalGlobalTimelineVariable = signal;
            window.globalTimelineTitle = title;
            window.globalTimelineDelay = delay;

            eventBus.emit('timeline-variable-updated', signal);
            eventBus.emit('timeline-variable-updated-title', title);
            eventBus.emit('timeline-variable-update-delay', delay)
        },
        limitsEdit() {
            const signalID = this.signalId;
            signalList.editLimits(signalID);
        },
        flipComponent() {
            this.flipClass = '';
            setTimeout(this.unFlipComponent, 3000)
        },
        unFlipComponent() {
            this.flipClass = 'event-click';
        },
        rewindCheck(){
            if (!isNaN(this.value) && !this.rewindMode == true) {
                this.valueToShow = parseFloat(this.value).toFixed(this.decimals)
                this.rawToShow = this.raw
            }
            else{
                if(visibleHistoricalValue.includes(this.signalId)){
                setTimeout(() => {
                    if (this.signalId in valueHistorical){
                        this.valueToShow = parseFloat(valueHistorical[this.signalId][0].Value).toFixed(this.decimals)
                    } else {
                        this.valueToShow = 'N/A';
                    }
                }, 700);
            }else{
                return;
            }
          
            }

        },
    }
};
