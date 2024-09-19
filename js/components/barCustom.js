components.barCustom = {
    props: ['signalId', 'signalId2','signalId3', 'signalId4','signalId5', 'signalId6','signalId7', 'signalId8', 'orientation', 'unit', 'title', 'displayScale', 'displayCapacity', 'color', 'scaleBottom',
     'scaleTop', 'scaleStep', 'scaleSegments', 'size', 'limitFlag', 'showLimits', 'valueMode', 'icon', 'iconSize', 'iconMarginLeft', 'valueDecimals'],
    template:/*html*/ `
<div class="ui grid type2 cols-mini-1 col mini-1 gap-no pad-no" :class="[smContainer]">

    <div  class="ui col mini-1 top-center" v-if="orientation == 'horizontal' || icon !== 'undefined'">
        <i class="ui" :class= '[iconSizeClass, iconColor]' :id="svgId"></i>
    </div>

    <div class="ui col mini-1 top-center" v-if="orientation == 'horizontal' || icon !== 'undefined'">
        <div class="ui pbar label divider value-2 h-mini-300" :class="[orientation, sizeClass, smClass]">
            <header v-if="orientation == 'vertical'">
                <h4 class="ui" :class= '[headerColor, titleClassSize]' v-bind="{ id: rndIDTitle}">{{title}}</h4>
            </header>
            <div class="pbar--container" style="margin-top: 6px">
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
            <footer  v-if="orientation == 'vertical'">
                <div class="font-regular">                     
                    <h1 class="ui font-bold h2">{{valueDisplay}} 
                    <span style="display: none">{{value}}</span>
                     </h1>
                    <h5 v-if="displayCapacity" class="ui color-text-type-secondary-dark">/ {{scaleTop}} {{unit}}</h5>
                     <h5 class=" ui color-text-type-secondary-dark" v-if="!displayCapacity"> {{unit}}</h5>
                </div>
            </footer>
        </div>
    </div>
        
     <div class="ui col mini-1" v-if="orientation == 'horizontal'">
     <h1 class="ui font-bold h2" style="margin-left: 10px;">{{valueDisplay}}
     <span style="display: none">{{value}}</span>
     <small class="font-regular color-text-type-secondary-dark">{{unit}}</small>
     </h1></div>
    </div>`,
    data() {
        return {
            value: null,
            value2: null,
            value3: null,
            value4: null,
            value5: null,
            value6: null,
            value7: null,
            value8: null,
            valueDisplay: null, 
            HH: null,
            H: null,
            L: null,
            LL: null,
            hasLimits: false,
            positionH: null,
            positionHH: null,
            positionL: null,
            positionLL: null,
            headerColor: null,
            smContainer: null,
            rndID:  (Math.floor(Math.random() * (1000 - 100))) + Date.now() + '__' + this.signalId,
            rndIDTitle:  (Math.floor(Math.random() * (1000 - 100)))  + Date.now() + '_title__' + this.signalId,
            iconSizeClass: 'icon-size-' + this.iconSize,
            svgId: (Math.floor(Math.random() * (1000 - 100)))  + Date.now() + '_svg__' + this.signalId,
            iconColor: 'color-fill-type-light',
            smClass: null,
            titleClassSize: 'h4',
            
        }
    },
    watch: {
        value: {
           handler: 'updateSum',
           deep: true,
        },
        value2: {
            handler: 'updateSum',
            deep: true,
        },
        value3: {
            handler: 'updateSum',
            deep: true,
         },
         value4: {
             handler: 'updateSum',
             deep: true,
         },
         value5: {
            handler: 'updateSum',
            deep: true,
         },
         value6: {
             handler: 'updateSum',
             deep: true,
         },
         value7: {
            handler: 'updateSum',
            deep: true,
         },
         value8: {
             handler: 'updateSum',
             deep: true,
         }
     },      
    mounted()
    {
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
        // SUM 11 SIGNAL VALUES
        if(this.signalId3){
            switch (this.valueMode) {
                case "filtered":
                    this.value3 = valueFiltered[this.signalId3];
                    this.value4 = valueFiltered[this.signalId4];
                    this.value5 = valueFiltered[this.signalId5];
                    this.value6 = valueFiltered[this.signalId6];
                    this.value7 = valueFiltered[this.signalId7];
                    this.value8 = valueFiltered[this.signalId8];
                    break;
                case "escalated":
                    this.value3 = valueEscalated[this.signalId3];
                    this.value4 = valueEscalated[this.signalId4];
                    this.value5 = valueEscalated[this.signalId5];
                    this.value6 = valueEscalated[this.signalId6];
                    this.value7 = valueEscalated[this.signalId7];
                    this.value8 = valueEscalated[this.signalId8];
                    break;
                default:
                case "raw":
                    this.value3 = valueRaw[this.signalId3];
                    this.value4 = valueRaw[this.signalId4];
                    this.value5 = valueRaw[this.signalId5];
                    this.value6 = valueRaw[this.signalId6];
                    this.value7 = valueRaw[this.signalId7];
                    this.value8 = valueRaw[this.signalId8];
                    break;
            }
        }

        if (this.orientation == 'horizontal') {
            this.smClass = 'sm-3'
            this.smContainer = 'cols-mini-3'
            const svgContent = iconRegistry[this.icon]
            $( "#"+this.svgId).html(svgContent)
            $( "#" + this.svgId ).css('margin-left', this.iconMarginLeft);

            style="margin-left: 190px; "
        } else {
            this.smClass = 'mini-1'
            this.smContainer = ''
        }


        if (typeof this.valueDecimals === 'undefined') {
            this.decimals = 0
        } else {
            this.decimals = this.valueDecimals
        }


    }, updated() {
   
        this.barStyles()


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
                classOutput = 'size-lg h-mini-360 h-mini-320 h-phone-300 header-sm-x1 footer-lg-x1'
            }
            if (this.size == 'small') {
                classOutput = 'size-mini h-180 header-mini-x1 footer-mini-x1'
                this.titleClassSize = 'h6'
                this.valueFontClassVertical = 'h4'
                this.valueFontClassHorizontal = 'h4'
            }
            if (this.size == 'extraSmall') {
                classOutput = 'size-mini h-120 header-mini-x1 footer-mini-x1'
                this.titleClassSize = 'h6'
                this.valueFontClassVertical = 'h5'
                this.valueFontClassHorizontal = 'h5'
            }
            if (this.size == 'medium') {
                classOutput = 'size-med h-mini-270 header-mini-x1 footer-mini-x1'
            }
            if (this.orientation == 'horizontal') {
                classOutput = 'size-mini h-40'
            }

            return classOutput
        }

    }, methods: {
        barStyles () {
            document.getElementById(this.rndID).style['flex-basis'] =  this.percentage(this.valueDisplay) + '%';
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
        updateSum() {
            let sum = 0;
        
            const values = [this.value, this.value2, this.value3, this.value4, this.value5, this.value6, this.value7, this.value8];
            
            values.forEach(val => {
                if (!isNaN(parseFloat(val))) {
                    sum += parseFloat(val);
                }
            });
        
            this.valueDisplay = sum.toFixed(this.decimals);
        },
    }
};