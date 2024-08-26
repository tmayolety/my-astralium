components.iconTextValueDigitalLine = {
    props: ['signalId', 'icon', 'title', 'size', 'countingHoursSignalId', 'zeroText', 'oneText', 'zeroColor', 'oneColor', 'valueMode', 'sizeWidthTitle'],
    template: /*html*/`<li ref="iconTextValueDigitalLineElement">
                <div class="col-40 align-middle-center">
                <i class="ui" :class= '[iconSize, iconColor]' :id="svgId"></i>
                </div>
                <div class="col-150-min">

                    <div class="flip-col go-bt " :class="[flipClass]">

                        <div class="flip-col--container">

                           <div class="ui col col-150-min textColorTheme" style="font-size:11px; text-align:left;">  

                                Id: {{signalId}} {{deviceName}} RAW: {{rawToShow}}     

                           </div>                     

                           <div class="ui col " style=" text-align: left;" :class='[sizeWidth]' v-on:click="flipComponent()">
                               <span>{{title}}</span>
                           </div>

                        </div>

                    </div>
       
                </div>

                <div v-if="countingHours" className="col-100 align-middle-center "><span className="font-bold">{{countingHoursValue}}</span>&nbsp;<span>h</span></div>
                <div class="col-80 align-middle-left " :class= '[valueTextColor, valueCellColor]'><span class="font-bold glow">{{valueText}}</span></div>
                
                <span style="display: none;">{{value}}</span> 
                </li>
                
                `,

    data() {
        return {
                value: valueRaw[this.signalId],
                countingHoursValue: valueRaw[this.countingHoursSignalId],
                iconSize: 'icon-size-' + this.size,
                svgId:  (Math.floor(Math.random() * (1000 - 100)))  + Date.now() + '_svg_' + this.signalId,
                valueText: 'N/A',
                iconColor: null,
                valueTextColor: null,
                countingHours: false,
                valueCellColor: null,
                flipClass: 'event-click',
                raw: valueRaw[this.signalId],
                rawToShow: null,
                signalData: signalsData[this.signalId],
                deviceName: null,
                sizeWidth: null,
        }
    },
    mounted(){

        let rawData;
        if (Vue.isProxy(this.signalData)){
            rawData = Vue.toRaw(this.signalData)

        }
        if(typeof rawData !== "undefined"){
            this.deviceName = deviceData[rawData.Device].Name

        }
        
        this.getSize()

        if (!isNaN(this.value)) {
            this.evaluate(this.value)
            this.rawToShow = this.raw
        }

        const svgContent = iconRegistry[this.icon]
        $( "#"+this.svgId).html(svgContent)
        

    },
    updated(){
        
        if (!isNaN(this.value)) {
            this.evaluate(this.value)
            this.rawToShow = this.raw
        }

    },
    methods: {

        evaluate(value){

            if (this.countingHoursValue != null){ this.countingHours = true }
            if (value  == 1) {
                this.valueText = this.oneText;
                this.iconColor = 'color-fill-type-' + this.oneColor; this.valueTextColor = 'color-text-type-' + this.oneColor;
            } else if (value  == 0) {
                this.valueText = this.zeroText;
                this.iconColor = 'color-fill-type-'+ this.zeroColor; this.valueTextColor = 'color-text-type-'+ this.zeroColor;
            } else {
                this.valueText = 'N/A'
                this.iconColor = null
            }
        },
        getSize(){
            if(!this.sizeWidthTitle){
                this.sizeWidth = 'col-200-min';
            }else if(this.sizeWidthTitle == 'regular'){
                this.sizeWidth = 'col-200-min';
            }else if(this.sizeWidthTitle == 'small'){
                this.sizeWidth = 'col-150-min';
            }else if(this.sizeWidthTitle == 'med'){
                this.sizeWidth = 'col-240-min';
            }else if(this.sizeWidthTitle == 'large'){
                this.sizeWidth = 'col-400-min';
            }else if(this.sizeWidthTitle == 'xl'){
                this.sizeWidth = 'col-450-min';
            }
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

