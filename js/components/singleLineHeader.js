components.singleLineHeader = {
    props: [ 'signalIdOne', 'signalIdTwo','componentTitle', 'signalIdIcon', 'signalIdBox', 'NC', 'iconNC', 'icon','size', 'oneColor', 'zeroColor', 'headerSize', 'textHeaderSize', 'heightHeader', 'unitOne', 'unitTwo', 'valueMode', 'isAnalogue', 'isShore', 'signalIdOneToCheckGen', 'signalIdTwoToCheckGen' ],
    template: /*html*/`

    <div class="ui col mini-1 has-col-header pad-xl gap-xl" :class='[containerColorClass, containerSize]' ref="singleLineHeaderElement">
            <header class="col-header" :class='[containerColorClass, textSize, containerHeaderSize]'> {{componentTitle}} </header>
         <template v-if="icon">
             <i class="ui col mg-top-mini-ld-30 mg-top-phone-0 "  :class= '[containerColorClass, iconSize, iconColorClass, marginTopSize]' :id="svgId" style="border:none"></i>
         </template>

              <div v-if="signalIdOne && signalIdTwo">
                <div class="align-center" :class="[valueTextColor]" style="display:inline-block; margin-left:1em">
                  <span class="font-bold text-size-12">{{valueOneAnalogueToShow}}</span> &nbsp;
                  <small class="font-regular color-text-type-white">{{ unitOne }}</small>
                </div>

                <div class="align-center" :class="[valueTextColor]" style="display:inline-block; margin-left:2em">
                  <span class="font-bold text-size-12">{{valueTwoAnalogueToShow}}</span> &nbsp;
                  <small class="font-regular color-text-type-white">{{ unitTwo }}</small>
                </div>
              </div>

              <div v-else-if="signalIdOne">
                <div class="align-center" :class="[valueTextColor]" style="display:inline-block; margin-left:38%; margin-top:1em;">
                  <span class="font-bold text-size-12">{{valueOneAnalogueToShow}}</span> &nbsp;
                  <small class="font-regular color-text-type-white">{{ unitOne }}</small>
                </div>
              </div>

              <div v-else-if="signalIdTwo">
                <div class="align-center" :class="[valueTextColor]" style="display:inline-block; margin-left:38%; margin-top:1em;">
                  <span class="font-bold text-size-12">{{valueTwoAnalogueToShow}}</span> &nbsp;
                  <small class="font-regular color-text-type-white">{{ unitTwo }}</small>
                </div>
              </div>
    </div> 
                <span style="display: none;">{{LL}}</span>
                <span style="display: none;">{{L}}</span>
                <span style="display: none;">{{HH}}</span>
                <span style="display: none;">{{H}}</span>    

                <span style="display: none;">{{valueBox}}</span>
                <span style="display: none;">{{valueIcon}}</span>

                <span style="display: none;">{{valueToCheckGen1}}</span>
                <span style="display: none;">{{valueToCheckGen2}}</span>
    `,
    data() {
        return {
            valueBox: valueRaw[this.signalIdBox],
            valueToCheckGen1: valueRaw[this.signalIdOneToCheckGen],
            valueToCheckGen2: valueRaw[this.signalIdTwoToCheckGen],
            valueIcon: null,
            valueOneAnalogue: null,
            valueTwoAnalogue: null,
            valueOneAnalogueToShow: null,
            valueTwoAnalogueToShow: null,
            iconSize: 'icon-size-' + this.size,
            svgId:  (Math.floor(Math.random() * (1000 - 100)))  + Date.now() + '_svg_' + this.signalId,
            colors: {
                color1:"color-bg-type-primary active",
                color2:"",
                color3:"color-bg-type-primary-light",
            },
            containerSize:'h-mini-95 h-phone-70',
            marginTopSize:'mg-top-mini-6',
            textSize:'text-size-12',
            containerHeaderSize:'',
            valueTextColor: null,
            LL: null,
            L: null,
            H: null,
            HH: null,
 
            containerColorClass: '',
            iconColorClass: ''

        }
    },

    mounted(){
        const svgContent = iconRegistry[this.icon]
        $( "#"+this.svgId).html(svgContent)


        switch (this.valueMode) {
            case "filtered":
                this.valueOneAnalogue = valueFiltered[this.signalIdOne];
                this.valueTwoAnalogue = valueFiltered[this.signalIdTwo];
                this.valueIcon = valueFiltered[this.signalIdIcon];
                
                break;
            case "escalated":
                this.valueOneAnalogue = valueEscalated[this.signalIdOne];
                this.valueTwoAnalogue = valueEscalated[this.signalIdTwo];
                this.valueIcon = valueEscalated[this.signalIdIcon];
                break;
            default:
            case "raw":
                this.valueOneAnalogue = valueRaw[this.signalIdOne];
                this.valueTwoAnalogue = valueRaw[this.signalIdTwo];
                this.valueIcon = valueRaw[this.signalIdIcon];
                break;
        }
        
        this.valueOneAnalogueToShow = parseFloat(this.valueOneAnalogue).toFixed(1)
        this.valueTwoAnalogueToShow = parseFloat(this.valueTwoAnalogue).toFixed(1)

        if (this.headerSize == "extraSmall") {
            this.containerSize = "h-mini-10";
            this.marginTopSize = "mg-top-mini-0";
        }
        if (this.headerSize == "small") {
            this.containerSize = "h-mini-35";
        }

        if (this.headerSize == "regular") {
            this.containerSize = "h-mini-180";
            this.marginTopSize = "mg-top-mini-15";
        }
        if (this.headerSize == "large") {
            this.containerSize = "h-mini-180";
            this.marginTopSize = "mg-top-mini-30";
        }
        if (this.textHeaderSize == 'small') {
            this.textSize = "text-size-8";
        }
        if (this.textHeaderSize == 'regular') {
            this.textSize = "text-size-10";
        }
        if (this.textHeaderSize == 'large') {
            this.textSize = "text-size-14";
        }
        if(this.heightHeader == 'regular'){
            this.containerHeaderSize = 'h-mini-40'
        }

        if(!isNaN(this.valueIcon)){
            this.iconColor(this.valueIcon)
        }
        if(!isNaN(this.valueBox)){
            this.containerColor(this.valueBox)
        }

    },
    updated(){

        this.valueOneAnalogueToShow = parseFloat(this.valueOneAnalogue).toFixed(1)
        this.valueTwoAnalogueToShow = parseFloat(this.valueTwoAnalogue).toFixed(1)

        let result = {};
        result.HH = false;
        result.H = false;
        result.L = false;
        result.LL = false;

        if ( parseFloat(this.valueOneAnalogue) >=  parseFloat(this.HH)) { result.HH = true; }
        if ( parseFloat(this.valueOneAnalogue) >=  parseFloat(this.H) &&  ( (parseFloat(this.valueOneAnalogue) <  parseFloat(this.HH) || this.HH == null)) ) { result.H = true; }
        if ( parseFloat(this.valueOneAnalogue) <=  parseFloat(this.L) &&  ( (parseFloat(this.valueOneAnalogue) >  parseFloat(this.LL)) || this.LL == null) ) { result.L = true; }
        if ( parseFloat(this.valueOneAnalogue) <=  parseFloat(this.LL) ) { result.LL = true; }
        if ( parseFloat(this.valueTwoAnalogue) >=  parseFloat(this.HH)) { result.HH = true; }
        if ( parseFloat(this.valueTwoAnalogue) >=  parseFloat(this.H) &&  ( (parseFloat(this.valueTwoAnalogue) <  parseFloat(this.HH) || this.HH == null)) ) { result.H = true; }
        if ( parseFloat(this.valueTwoAnalogue) <=  parseFloat(this.L) &&  ( (parseFloat(this.valueTwoAnalogue) >  parseFloat(this.LL)) || this.LL == null) ) { result.L = true; }
        if ( parseFloat(this.valueTwoAnalogue) <=  parseFloat(this.LL) ) { result.LL = true; }
        if (result.HH || result.LL ) { this.valueTextColor = 'color-text-type-white'; } else
        if (result.H || result.L ) {  this.valueTextColor = 'color-text-type-white'; } else
        if (!result.H || !result.L || !result.HH || !result.LL) {  this.valueTextColor = null; }

        if(!isNaN(this.valueIcon)){
            this.iconColor(this.valueIcon)
        }
        if(!isNaN(this.valueBox)){
            this.containerColor(this.valueBox)
        }
    },
    methods: {
        iconColor(value){
            if(this.isAnalogue){
                if (value < 0.3 )  {
                    this.iconColorClass = this.zeroColor
                } else if (value >= 0.3 ){
                    this.iconColorClass = this.oneColor
                } else {
                    this.iconColorClass = this.zeroColor
                }
            }else{
                if(this.isShore){

                    if(this.valueToCheckGen1 < 1 && this.valueToCheckGen2 < 1 ){
                        if(this.iconNC == 1){
                            if(value >= 1){
                                this.iconColorClass = this.oneColor
                            }else{
                                this.iconColorClass = this.zeroColor
                            }
                        }else{
                            if(value < 1){
                                this.iconColorClass = this.oneColor
                            }else{
                                this.iconColorClass = this.zeroColor
                            }
                    
                        }
                    }else{
                        this.iconColorClass = this.zeroColor
                    }
                }else{

                    if(this.iconNC == 1){
                        if(value == 1){
                            this.iconColorClass = this.oneColor
                        }else{
                            this.iconColorClass = this.zeroColor
                        }
                    }else{
                        if(value == 0){
                            this.iconColorClass = this.oneColor
                        }else{
                            this.iconColorClass = this.zeroColor
                        }
                    }
                }
               
            }
        },

        containerColor(value){
            if(this.isShore){
                if(this.valueToCheckGen1 < 1 && this.valueToCheckGen2 < 1 ){
                    if(this.NC == 1){
                        if(value >= 1) {
                            this.containerColorClass = this.colors.color1
                           
                        }else{
                            this.containerColorClass = ''
                        }
                    } else if(this.NC == 0){
                        if(value == 0) {
                            this.containerColorClass = this.colors.color1
                        }else{
                            this.containerColorClass = ''
                        }
                    }
                }else{
                     this.containerColorClass = ''
                }
            }else{
                if(this.NC == 1){
                    if(value == 1) {
                        this.containerColorClass = this.colors.color1
                       
                    }else{
                        this.containerColorClass = ''
                    }
                } else if(this.NC == 0){
                    if(value == 0) {
                        this.containerColorClass = this.colors.color1
                    }else{
                        this.containerColorClass = ''
                    }
                }
            }

        },

        checkShore(){
            if(!isNaN(this.valueIcon)){
                this.iconColor(this.valueIcon)
            }
            if(!isNaN(this.valueBox)){
                this.containerColor(this.valueBox)
            }
        }


    }
};

