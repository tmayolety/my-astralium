components.twoOptionsSwitchButton = {
    props: ['optionOneText', 'optionTwoText', 'optionOneColorClass', 'optionTwoColorClass', 'signalId', 'signalId2', 'NC', 'optionOneSignalIdToWrite', 'optionTwoSignalIdToWrite', 'optionOneValueToWrite', 'optionTwoValueToWrite', 'writeMode', 'buttonType', 'horizontalTime1', 'horizontalTime2'],
    template: /*html*/`
        <div ref="twoOptionsSwitchButtonElement">
            <div v-if="buttonTypeClass == 'regular'" class="ui btn-group toggle horizontal resp">
                <button class="ui btn mini" :class='[optionOneColor, optionOneActive, btnPulsedRegular]' v-on:click="write(1)"><span v-if="btnPulsedRegular != 'btnPulse'">{{optionOneText}}</span></button>
                <button class="ui btn mini" :class='[optionTwoColor, optionTwoActive, btnPulsedRegular2]' v-on:click="write(2)"><span v-if="btnPulsedRegular2 != 'btnPulse2'">{{optionTwoText}}</span></button>
            </div> 
                <button v-else-if="buttonTypeClass == 'toggle'" v-on:click="write(3)" class="ui btn switch med w-120 switch-2clr" :class="[optionToggleActive, optionOneColor, optionTwoColor]">
                     <div :class='[btnPulsed]' class="active"><span v-if="btnPulsed != 'btnPulse'">{{optionOneText}}</span></div>
                     <div :class='[btnPulsed2]' class="inactive"><span v-if="btnPulsed2 != 'btnPulse2'">{{optionTwoText}}</span></div>
                </button>
            <span style="display: none;">{{value}}</span> 
            <span style="display: none;">{{value2}}</span> 
        </div>`,
    data() {
        return {
            value: null,
            value2: null,
            optionOneColor: this.optionOneColorClass,
            optionTwoColor: this.optionTwoColorClass,
            optionOneActiveClass: ``,
            optionTwoActiveClass: '',
            optionTwoActive: '',
            optionOneActive: '',
            optionToggleActive: '',
            signalMode: 0,
            buttonTypeClass: '',
            btnPulsed: '',
            btnPulsed2: '',
            btnPulsedRegular: '',
            btnPulsedRegular2: '',
            optionNulltext: '',

        }
    },

    mounted(){

        if (this.signalId == null && this.signalId2 == null){
            this.signalMode = 0
        }

        if (this.signalId2 == null && this.signalId != null){
            this.signalMode = 1
        }

        if (this.signalId2 != null && this.signalId != null){
            this.signalMode = 2
        }

        switch (this.buttonType){
            case 'regular':
                this.buttonTypeClass = 'regular';
                break;
            case 'toggle':
                this.buttonTypeClass = 'toggle';
                break;
            default:
                this.buttonTypeClass = 'regular';
        }

        if(!isNaN(this.value)){
            this.value = valueRaw[this.signalId]
        }
        if(!isNaN(this.value2)){
            this.value2= valueRaw[this.signalId2]
        }
        
        this.renderActiveButton(this.value, this.value2)

    },
    updated(){
        if(!isNaN(this.value)){
            this.value = valueRaw[this.signalId]
        }
        if(!isNaN(this.value2)){
            this.value2= valueRaw[this.signalId2]
        }
        
        this.renderActiveButton(this.value, this.value2)

    },
    methods: {
        renderActiveButton(value, value2) {
            if (this.signalMode == 1) {
                // ONE SIGNAL MODE
                if (value == 1) {

                        if (this.NC == 1) {
                            this.buttonOneActive()
                            this.toggleActive()
                            this.buttonPulseActive()

                            this.buttonOneActivePulse()
                        } else {
                            this.toggleInactive()
                            this.buttonTwoActive()
                            this.buttonTwoPulseActive()

                            this.buttonTwoActivePulse()
                        }

                } else if (value == 0) {

                        if (this.NC == 1) {
                            this.toggleInactive()
                            this.buttonTwoActive()
                            this.buttonTwoPulseActive()

                            this.buttonTwoActivePulse()
                        } else {
                            this.buttonOneActive()
                            this.toggleActive()
                            this.buttonPulseActive()

                            this.buttonOneActivePulse()
                        }

                } else {
                        this.disableButtons()
                }

                } else if (this.signalMode == 2) {

                        // TWO SIGNAL MODE
                        if (value == 1 && value2 == 0) {
                            this.buttonOneActive()
                           
                            this.buttonOneActivePulse()
                            this.buttonPulseActive()
                        } else if (value == 0 && value2 == 1) {
                            this.buttonTwoActive()
                            
                            this.buttonTwoActivePulse()
                            this.buttonTwoPulseActive()
                        } else {
                            this.disableButtons()
                        }
                }
        },
        buttonOneActive() {
            this.optionOneActive = 'active'
            this.optionOneColor = this.optionOneColorClass
            this.optionTwoActive = ''
            this.optionTwoColor = ''
        },
        //horizontal
        buttonOneActivePulse(){
            if( this.optionOneActive = 'active'){
                this.btnPulsedRegular = null
            }
        },
        buttonTwoActive() {
            this.optionOneActive = ''
            this.optionOneColor = ''
            this.optionTwoActive = 'active'
            this.optionTwoColor = this.optionTwoColorClass
        },
        //horizontal
        buttonTwoActivePulse(){
            if( this.optionTwoActive = 'active'){
                this.btnPulsedRegular2 = null
            }
        },
        disableButtons() {
            this.optionOneActive = ''
            this.optionOneColor = ''
            this.optionTwoActive = ''
            this.optionTwoColor = ''
        },
        toggleActive() {
            this.optionToggleActive = 'active'
        },
        buttonPulseActive(){
            if( this.optionToggleActive = 'active'){
                this.btnPulsed2 = null
            }
            
        },
        toggleInactive() {
            this.optionToggleActive = ''
        },
        buttonTwoPulseActive(){
            if( this.optionToggleActive != 'active'){
                this.btnPulsed = null
            }
           
        },
        write (button) {

            if ( typeof this.writeMode !== 'undefined' ) {
                if (button == 1) {
                    writeSignalId = this.optionOneSignalIdToWrite
                    valueToWrite = this.optionOneValueToWrite

                    if (helpers.profileCheck()) {
                        if(this.optionOneActive != 'active'){
                            this.btnPulsedRegular = 'btnPulse'
                            setTimeout(() => {
                                this.btnPulsedRegular = null
                            }, 4000);
                    
                            if(this.horizontalTime1){
                                setTimeout(() => {
                                    this.btnPulsedRegular = null

                                  }, this.horizontalTime1);
                            }
                        }                            
                    } 
                }

                if (button == 2) {
                    writeSignalId = this.optionTwoSignalIdToWrite
                    valueToWrite = this.optionTwoValueToWrite

                    if (helpers.profileCheck()) {
                        if(this.optionTwoActive != 'active'){
                            this.btnPulsedRegular2 = 'btnPulse2'
                            setTimeout(() => {
                                this.btnPulsedRegular2 = null
                            }, 4000);
                            if(this.horizontalTime2){
                                setTimeout(() => {
                                    this.btnPulsedRegular2 = null
                                  }, this.horizontalTime2);
                            }
                        }
                    }
                }

                //toggle button
                if (button == 3) {
                    writeSignalId = this.optionOneSignalIdToWrite
                    if(this.optionToggleActive == 'active'){
                        if (helpers.profileCheck()) {
                            this.btnPulsed = 'btnPulse'
                            setTimeout(() => {
                                this.btnPulsed = null
                            }, 4000);
                        }
                        valueToWrite = this.optionTwoValueToWrite
                    }else{
                        if (helpers.profileCheck()) {
                            this.btnPulsed2 = 'btnPulse2'
                            setTimeout(() => {
                                this.btnPulsed2 = null
                            }, 4000);
                        }
                        valueToWrite = this.optionOneValueToWrite
                    }
                }


                var data = JSON.stringify({
                    "SignalId": parseInt(writeSignalId),
                    "Value": parseInt(valueToWrite),
                    "Mode": parseInt(this.writeMode)
                });
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

