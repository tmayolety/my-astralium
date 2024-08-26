components.iconTwoOptionsDigitalLine = {
    props: ['signalIdOptionOne', 'signalIdOptionTwo', 'icon', 'title', 'size', 'zeroOptionOneText', 'zeroOptionTwoText',
     'oneOptionOneText', 'oneOptionTwoText','zeroOptionOneColor', 'zeroOptionTwoColor', 'oneOptionOneColor',
      'oneOptionTwoColor', 'NC1', 'NC2', 'sizeWidthTitle'],
    template: /*html*/`
            <li ref="iconTwoOptionsDigitalLineElement" >

                <div class="col-40 align-middle-center">
                <i class="ui" :class= '[iconSize, iconColor]' :id="svgId"></i>
                </div>

                <div class="col-200-min">
                

                    <div class="flip-col go-bt " :class="[flipClass]">

                        <div class="flip-col--container">

                           <div v-if="!isFlipped" class="ui col col-150-min textColorTheme" style="font-size:12px; text-align:left;">  
                                Id1: {{signalIdOptionOne}} {{deviceNameOne}} RAW1: {{rawToShowOne}} 
                           </div>           
                           
                           <div v-if="isFlipped" class="ui col col-150-min textColorTheme" style="font-size:12px; text-align:left;">  

                            Id2: {{signalIdOptionTwo}} {{deviceNameTwo}} RAW2: {{rawToShowTwo}} 

                            </div>  
                           <div class="ui col " style=" text-align: left;" :class='[sizeWidth]' v-on:click="flipComponent()">
                               <span>{{title}}</span>
                           </div>
                        </div>
                    </div>

                </div>

                <div class="col-60 align-middle-center " :class= '[valueTextColor, valueCellColor]' ><span class="font-bold glow">{{valueText}}</span></div>
                <div class="col-60 align-middle-center " :class= '[valueTextColor2, valueCellColor2]'><span class="font-bold glow">{{valueText2}}</span></div>
                <span style="display: none;">{{value1}}</span> 
                <span style="display: none;">{{value2}}</span>

            </li>

                `,
    data(){
        return{
            value1: valueRaw[this.signalIdOptionOne],
            value2: valueRaw[this.signalIdOptionTwo],
            iconSize: 'icon-size-' + this.size,
            svgId:  (Math.floor(Math.random() * (1000 - 100)))  + Date.now() + '_svg_' + this.signalIdOptionOne,
            valueText: 'N/A',
            valueText2: 'N/A',
            iconColor: null,
            valueCellColor: null,
            valueCellColor2: null,
            countingHours: false,
            valueTextColor: null,
            valueTextColor2: null,
            sizeWidth: null,
            flipClass: 'event-click',
            rawOne: valueRaw[this.signalIdOptionOne],
            rawToShowOne: null,
            signalDataOne: signalsData[this.signalIdOptionOne],
            deviceNameOne: null,
            rawTwo: valueRaw[this.signalIdOptionTwo],
            rawToShowTwo: null,
            signalDataTwo: signalsData[this.signalIdOptionTwo],
            deviceNameTwo: null,
            sizeWidth: null,
            isFlipped: false,

        }
    },

    mounted(){

        this.getSize()

        let rawDataOne;
        if (Vue.isProxy(this.signalDataOne)){
            rawDataOne = Vue.toRaw(this.signalDataOne)
        }
        if(typeof rawDataOne !== "undefined"){
            this.deviceNameOne = deviceData[rawDataOne.Device].Name
        }

        let rawDataTwo;
        if (Vue.isProxy(this.signalDataTwo)){
            rawDataTwo = Vue.toRaw(this.signalDataTwo)
        }
        if(typeof rawDataTwo !== "undefined"){
            this.deviceNameTwo = deviceData[rawDataTwo.Device].Name
        }

        if (!isNaN(this.value1) && !isNaN(this.value2)) {

            this.value1 = valueRaw[this.signalIdOptionOne]
            this.value2 = valueRaw[this.signalIdOptionTwo]
         
            this.evaluate(this.value1, this.value2)
        }

        const svgContent = iconRegistry[this.icon]
        $( "#"+this.svgId).html(svgContent)



    },
    updated(){
        
        if (!isNaN(this.value1) && !isNaN(this.value2)) {

            this.value1 = valueRaw[this.signalIdOptionOne]
            this.value2 = valueRaw[this.signalIdOptionTwo]
         
            this.evaluate(this.value1, this.value2)
        }
        
        if (!isNaN(this.value1)) {

            this.rawToShowOne = this.rawOne
        }
        if (!isNaN(this.value2)) {

            this.rawToShowTwo = this.rawTwo
        }
    },
    methods:{
        evaluate(value1, value2){
            if(value1 == 1){
                this.valueText = this.oneOptionOneText;
                this.valueTextColor = 'color-text-type-' + this.oneOptionOneColor;
            } else if (value1  == 0){
                this.valueText = this.zeroOptionOneText;
                this.valueTextColor = 'color-text-type-' + this.zeroOptionOneColor;
            }else{
                this.valueText = 'N/A'
            }

            if(value2 == 1){
                this.valueText2 = this.oneOptionTwoText;
                this.valueTextColor2 = 'color-text-type-' + this.oneOptionTwoColor;
                this.iconColor = 'color-fill-type-' + this.oneOptionTwoColor;
            } else if (value2  == 0){
                this.valueText2 = this.zeroOptionTwoText;
                this.valueTextColor2 = 'color-text-type-' + this.zeroOptionTwoColor;
                this.iconColor = 'color-fill-type-' + this.zeroOptionTwoColor;
            }else{
                this.valueText2 = 'N/A'
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
            setTimeout(() => {
                this.isFlipped = true;
                setTimeout(() => {
                    this.isFlipped = false;
                    this.unFlipComponent();
                }, 3000);
            }, 3000);
        },
        unFlipComponent() {
            this.flipClass = 'event-click';
        }
    }


}