components.basicHorizontalBar = {
    props: [
        'signalId',
        'unit',
        'title',
        'displayScale',
        'displayCapacity',
        'color',
        'scaleBottom',
        'scaleTop',
        'scaleStep',
        'scaleSegments',
        'size',
        'limitFlag',
        'showLimits',
        'valueMode',
        'headerSize',
        'footerSize',
        'timeDelay' ],

    template:/*HTML*/ `

        
        <div class="flip-col go-bt " :class="[flipClass]">
        
        <div class="flip-col--container">
                                        
            <div class="ui col align-middle-center" style="font-size: 12px; display: flex; justify-content: center; text-align: left;">  
            <div style="display: flex; flex-direction: column; align-items: center; text-align: center;">
                    Id: {{signalId}} <br/>
                    {{deviceName}} <br/>                                                
                    RAW: {{rawToShow}} 
                </div>               
            </div>                     

            <div class="ui col"  v-on:click="flipComponent()" ref="horizontalBarElement">

    
            <div class="ui pbar horizontal" :class='[size, headerSize, footerSize]'>
            <header>                
                <h5 class="font-semibold" v-bind="{ id: rndIDTitle}">{{title}}</h5>
            </header>
            <div class="pbar--container" style="margin-top: 2px">
                <ul class="ui pbar--label" v-if="displayScale" v-html="scaleCode">
                </ul>
                <ul class="ui pbar--label-divider" v-html="labelCode">
                </ul>
                <div class="ui pbar--item">
                    <div :class= '[color]' v-bind="{ id: rndID}"></div>
                </div>
                <ul class="pbar--value">
                    <li class="value-yellow" v-if="H && showLimits" :style="positionH"><div>H</div></li>
                </ul>
                    <ul class="pbar--value">
                        <li class="value-red" v-if="HH && showLimits" :style="positionHH"><div>HH</div></li>
                    </ul>
                <ul class="pbar--value">
                    <li class="value-yellow" v-if="L && showLimits" :style="positionL"><div>L</div></li>
                </ul>
                <ul class="pbar--value">
                    <li class="value-red" v-if="LL && showLimits" :style="positionLL"><div>LL</div></li>
                </ul>
            </div>
            <footer>
                <div className="font-regular">
                    <h5 class="font-bold mg-left-10">{{value}} <small class="font-regular text-size-mini-7 clr-subvalue-ui"> {{unit}}</small></h5>
                </div>
            </footer>
        </div>

            </div>

        </div>

    </div>
        
        
        `
    ,
    data() {
        return {
            value: null,
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
            rndID:  (Math.floor(Math.random() * (1000 - 100))) + Date.now() + '_' + this.signalId,
            rndIDTitle:  (Math.floor(Math.random() * (1000 - 100)))  + Date.now() + '_title_' + this.signalId,
            iconSizeClass: 'icon-size-' + this.iconSize,
            iconColor: 'color-fill-type-light',
            smClass: null,
            flipClass: 'event-click',
            raw: valueRaw[this.signalId],
            rawToShow: null,
            signalData: signalsData[this.signalId],
            deviceName: null,
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

        if (typeof limits[this.signalId] !== 'undefined') {
            if (typeof limits[this.signalId].L !== 'undefined') {  if (limits[this.signalId].L.value != '-'){
                this.L = limits[this.signalId].L.value
                this.positionL = { flex: '0 0 '+ this.percentage(this.L) +'%' }
            } else {  this.L = null;  } }
            if (typeof limits[this.signalId].LL !== 'undefined') { if (limits[this.signalId].LL.value != '-'){
                this.LL = limits[this.signalId].LL.value
                this.positionLL = { flex: '0 0 '+ this.percentage(this.LL) +'%' }
            } else {  this.LL = null;  }  }
            if (typeof limits[this.signalId].H !== 'undefined') { if (limits[this.signalId].H.value != '-'){
                this.H = limits[this.signalId].H.value
                this.positionH = { flex: '0 0 '+ this.percentage(this.H) +'%' }
            } else {  this.H = null;  }  }
            if (typeof limits[this.signalId].HH !== 'undefined') { if (limits[this.signalId].HH.value != '-'){
                this.HH = limits[this.signalId].HH.value
                this.positionHH = { flex: '0 0 '+ this.percentage(this.HH) +'%' }
            } else {  this.HH = null;  }  }
        } else { this.hasLimits = false }

        if (this.value == null){
            this.value = 'N/A'
        }



    }, updated() {

        if (!isNaN(this.value)) {
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
            this.rawToShow = this.raw
        }

        if (!isNaN(this.value)) {
            this.rawToShow = this.raw
        }

        if (this.hasLimits && this.limitFlag == 'onTitle') {
            if (this.value  >= this.HH && this.HH != null) { $('#' + this.rndIDTitle).removeClass('color-text-type-warning '); $('#' + this.rndIDTitle).addClass('color-text-type-danger glow'); this.iconColor = 'color-fill-type-danger'; } else
            if (this.value  >= this.H && this.value  < this.HH && (this.HH != null && this.H != null)) { $('#' + this.rndIDTitle).removeClass('color-text-type-danger'); $('#' + this.rndIDTitle).addClass('color-text-type-warning glow'); this.iconColor = 'color-fill-type-warning'; } else
            if ((this.value  > this.L && this.value  < this.H)) { $('#' + this.rndIDTitle).removeClass('color-text-type-danger color-text-type-warning'); this.iconColor = 'color-fill-type-success'; } else
            if (this.value  <= this.L && this.value  > this.LL && (this.L != null && this.LL != null)) { $('#' + this.rndIDTitle).removeClass('color-text-type-danger'); $('#' + this.rndIDTitle).addClass('color-text-type-warning glow'); this.iconColor = 'color-fill-type-warning'; } else
            if (this.value  <= this.LL && this.LL != null) {  $('#' + this.rndIDTitle).removeClass('color-text-type-warning '); $('#' + this.rndIDTitle).addClass('color-text-type-danger glow');  } else {$('#' + this.rndIDTitle).removeClass('color-text-type-danger color-text-type-warning'); this.iconColor = 'color-fill-type-danger';  }
        }

        if (this.hasLimits && this.limitFlag == 'onBar') {
            if (this.value  >= this.HH && this.HH != null) { $('#' + this.rndID).removeClass('color-fl-yellow ' + this.color); $('#' + this.rndID).addClass('color-fl-red glow'); this.iconColor = 'color-fill-type-danger';  } else
            if (this.value  >= this.H && this.value  < this.HH && (this.HH != null && this.H != null)) { $('#' + this.rndID).removeClass('color-fl-red ' + this.color); $('#' + this.rndID).addClass('color-fl-yellow glow'); this.iconColor = 'color-fill-type-warning';   } else
            if ((this.value  > this.L && this.value  < this.H)) { $('#' + this.rndID).removeClass('color-fl-red color-fl-yellow ');  $('#' + this.rndID).addClass(this.color); this.iconColor = 'color-fill-type-success'; } else
            if (this.value  <= this.L && this.value  > this.LL && (this.L != null && this.LL != null)) { $('#' + this.rndID).removeClass('color-fl-red color-fl-green'); $('#' + this.rndID).addClass('color-fl-yellow glow');  this.iconColor = 'color-fill-type-warning';  } else
            if (this.value  <= this.LL && this.LL != null) {  $('#' + this.rndID).removeClass('color-fl-yellow ' + this.color); $('#' + this.rndID).addClass('color-fl-red glow');  this.iconColor = 'color-fill-type-danger';  }
        }

        this.barStyles(this.value)

    },
    computed: {
        scaleCode() {
            let codeResult = ''
            for (let i = this.scaleBottom; i <= this.scaleTop; i += this.scaleStep) {
                codeResult = codeResult + '<li><div>' +  i + '</div></li>'
            }
            return codeResult
        },
        labelCode () {
            let codeResult = ''
            for (let i = 0; i <= this.scaleSegments; i ++) {
                codeResult = codeResult + '<li></li>'
            }
            return codeResult
        },
        sizeClass () {
            var classOutput
            if (this.size == 'regular') {
                classOutput = 'size-lg h-mini-360 h-phone-300 header-sm-x1 footer-lg-x1'
            }
            if (this.size == 'small') {
                classOutput = 'size-mini h-180 header-mini-x1 footer-mini-x1'
            }
            if (this.size == 'medium') {
                classOutput = 'size-mini h-mini-350 header-mini-x1 footer-mini-x1'
            }
            if (this.orientation == 'horizontal') {
                classOutput = 'size-mini h-40'
            }

            return classOutput
        }

    }, methods: {

        callTimeline(signal, title, delay){
            window.signalGlobalTimelineVariable = signal;
            window.globalTimelineTitle = title;
            window.globalTimelineDelay = delay;

            eventBus.emit('timeline-variable-updated', signal);
            eventBus.emit('timeline-variable-updated-title', title);
            eventBus.emit('timeline-variable-update-delay', delay)
        },
        barStyles (value) {
            document.getElementById(this.rndID).style['flex-basis'] =  this.percentage(value) + '%';
        },
        percentage (sentValue) {
            if (parseInt(this.scaleBottom) >= 0) {
                range = Number(this.scaleTop) - Number(this.scaleBottom)
            } else {
                range = Number(this.scaleTop) + Math.abs(this.scaleBottom)
            }
            var result = (parseInt(sentValue) * 100) / parseInt(range);
            return result.toFixed(2)
        },
        flipComponent() {
            this.flipClass = '';
            setTimeout(this.unFlipComponent, 3000)
        },
        unFlipComponent() {
            this.flipClass = 'event-click';
        }
    }
};

