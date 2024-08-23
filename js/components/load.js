components.load = {
    props: [
    'optionOneText',
    'optionTwoText',
    'feedbackStartText',
    'feedbackStopText',
    'signalId',
    'countingHoursSignalId',
    'feedbackStartSignalId',
    'feedbackStopSignalId',
    'feedbackFailSignalId',
    'NC',
    'size',
    'optionOneSignalIdToWrite',
    'optionTwoSignalIdToWrite',
    'optionOneValueToWrite',
    'optionTwoValueToWrite',
    'writeMode',
    'buttonUpColor',
    'buttonDownColor',
    'feedbackColorStart',
    'feedbackColorStop',
    'NFC'
    ],
    template: /*html*/`
    <div ref="loadElement">
        <div v-if="!tripped" class="ui btn-group switch-2" :class='[size]'>
            <button class="ui btn" :class='[optionOneActive, colorUpButton()]' v-on:click="write(1)" :style="'font-size:' + fontSize + 'px!important'"><span :class='[btnPulsed]' v-if="btnPulsed != 'btnPulseLoad'">{{optionOneText}}</span> <div v-else :class='[btnPulsed]'  ></div> </button>
            <div v-if="countingHoursSignalId"><span>{{countingHours}} </span> h</div>
             <div v-if="feedbackFailSignalId||feedbackStopSignalId||feedbackStartSignalId" :class='[feedbackColor]'><span>{{feedbackText}}</span></div>
            <button class="ui btn" :class='[optionTwoActive, colorDownButton()]' v-on:click="write(2)" :style="'font-size:' + fontSize + 'px!important'"><span :class='[btnPulsed2]' v-if="btnPulsed2 != 'btnPulse2Load'">{{optionTwoText}}</span><div v-else :class='[btnPulsed2]'  ></div></button>
        </div>

        <div v-if="tripped" class="ui btn-group switch-2 middle-center" :class='[size]' style="height:227px">
            <h4 class="ui">NOT AVAILABLE</h4> <br>
            <i class="ui icon-size-75 color-fill-type-warning2 glow"><svg class="ui icon" id="close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M98.74,81.26q2.52,2.14,0,4.47l-13,13q-2.33,2.33-4.47,0L50,67.67,18.74,98.74q-2.14,2.52-4.47,0l-13-13q-2.33-2.33,0-4.47L32.33,50,1.26,18.93q-2.33-2.33,0-4.47l13-13.2q2.32-2.33,4.47,0L50,32.33,81.26,1.26c1.56-1.68,3-1.68,4.47,0l13,13q2.33,2.32,0,4.47L67.67,50Z"></path></svg></i>
        </div>
           
        <span style="display: none;">{{value}}{{feedbackStart}}{{feedbackStop}}{{feedbackFail}}{{feedbackText}}</span> 

    </div>    
`
    ,
    data() {
        return {

            value: null,
            countingHours: null,
            optionOneColor: this.optionOneColorClass,
            optionTwoColor: this.optionTwoColorClass,
            optionOneActiveClass: ``,
            optionTwoActiveClass: '',
            optionTwoActive: '',
            optionOneActive: '',
            signalMode: 0,
            feedbackStart: null,
            feedbackStop: null,
            feedbackFail: null,
            feedbackText: null,
            feedbackColor: null,
            tripped: false,
            fontSize: null,
            btnPulsed: '',
            btnPulsed2: ''

            }
    },
    mounted(){

        if (this.size == 'xl') { this.fontSize = 25 }
        this.signalMode = 1
        
        if (!isNaN(this.value)) {
       
            this.value = valueRaw[this.signalId]
            this.countingHours = valueRaw[this.countingHoursSignalId]
            this.feedbackStart = valueRaw[this.feedbackStartSignalId]
            this.feedbackStop = valueRaw[this.feedbackStopSignalId]
            this.feedbackFail = valueRaw[this.feedbackFailSignalId]
          
            this.renderActiveButton(this.value, this.feedbackStart, this.feedbackStop, this.feedbackFail)
        }


    },
    updated(){
        if (!isNaN(this.value)) {
       
            this.value = valueRaw[this.signalId]
            this.countingHours = valueRaw[this.countingHoursSignalId]
            this.feedbackStart = valueRaw[this.feedbackStartSignalId]
            this.feedbackStop = valueRaw[this.feedbackStopSignalId]
            this.feedbackFail = valueRaw[this.feedbackFailSignalId]
          
            this.renderActiveButton(this.value, this.feedbackStart, this.feedbackStop, this.feedbackFail)
        }
    },
    methods: {
        renderActiveButton(value, feedbackStart, feedbackStop, feedbackFail) {

            if (this.signalMode == 1) {
                // ONE SIGNAL MODE
                if (value == 1) {
                    if (this.NC == 1) {
                        this.buttonOneActive()
                        this.buttonOneActivePulse()
                    } else {
                        this.buttonTwoActive()
                        this.buttonTwoActivePulse()
                    }
                } else if (value == 0) {
                    if (this.NC == 1) {
                        this.buttonTwoActive()
                        this.buttonTwoActivePulse()
                    } else {
                        this.buttonOneActive()
                        this.buttonOneActivePulse()
                    }
                } else {
                        this.disableButtons()
                }
            }
            
            if (feedbackStart == 1) { this.feedbackColor = this.feedbackColorStart; this.feedbackText = "STARTED" }
            if (feedbackStop == 0) { this.feedbackColor = this.feedbackColorStop; this.feedbackText = "STOPPED" }
 
            if(this.NFC == 1){
                if(feedbackFail == 1) { this.tripped = true } else { this.tripped = false }
            }else {
                if(feedbackFail == 0) { this.tripped = true } else { this.tripped = false }
            }
            
        },
        buttonOneActive() {
            this.optionOneActive = 'active'
            this.optionTwoActive = ''
            this.optionTwoColor = ''

        },
        buttonTwoActive() {
            this.optionOneActive = ''
            this.optionOneColor = ''
            this.optionTwoActive = 'active'

        },

        buttonOneActivePulse(){
            if( this.optionOneActive = 'active'){
                this.btnPulsed = null
            }
        },

        buttonTwoActivePulse(){
            if( this.optionTwoActive = 'active'){
                this.btnPulsed2 = null
            }
        },

        disableButtons() {
            this.optionOneActive = ''
            this.optionOneColor = ''
            this.optionTwoActive = ''
            this.optionTwoColor = ''
        },
        colorUpButton(){
            if (this.optionOneActive == 'active'){
                return this.buttonUpColor
            }else{
                return null
            }
        },
        colorDownButton(){
            if (this.optionTwoActive == 'active'){
                return this.buttonDownColor
            }else{
                return null
            }
        },
        write (button) {

            if ( typeof this.writeMode !== 'undefined' ) {

                if (button == 1) {
                    writeSignalId = this.optionOneSignalIdToWrite
                    valueToWrite = this.optionOneValueToWrite
                    
                    if (helpers.profileCheck()) {
                        if(this.optionOneActive != 'active'){
                            this.btnPulsed = 'btnPulseLoad'
                            setTimeout(() => {
                                this.btnPulsed = null
                            }, 4000);
                        }
                    } 
                }

                if (button == 2) {
                    writeSignalId = this.optionTwoSignalIdToWrite
                    valueToWrite = this.optionTwoValueToWrite

                    if (helpers.profileCheck()) {
                        if(this.optionTwoActive != 'active'){
                            this.btnPulsed2 = 'btnPulse2Load'
                            setTimeout(() => {
                                this.btnPulsed2 = null
                            }, 4000)
                        }
                    }
                }

                var data = JSON.stringify({
                    "SignalId": parseInt(writeSignalId),
                    "Value": parseInt(valueToWrite),
                    "Mode": parseInt(this.writeMode)
                });
                console.log(data);
                if (helpers.profileCheck()) {
                    var settings = {
                        "async": true,
                        "crossDomain": true,
                        "url": ACTIVE_SERVER + ":" + API.Port + "/writeRedundancyBySignalId",
                        "method": "POST",
                        "headers": {
                            "content-type": "application/json"
                        },
                        "processData": false,
                        "data": data
                    }

                    $.ajax(settings).done(function (response) {
                        console.log(response);
                    });


                } else {
                    helpers.privilegesPopUp();

                }
            } else {
                console.log('writeMode not defined. Write cancelled!');
            }
        },

    }
};

