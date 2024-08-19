components.twoOptionsPushButton = {
  props: [
    "buttonTitle",
    "buttonWidth",
    "optionOneText",
    "optionTwoText",
    "buttonColorClass",
    "signalId",
    "signalId2",
    "feedbackSignalId",
    "NC",
    "optionOneSignalIdToWrite",
    "optionTwoSignalIdToWrite",
    "optionOneValueToWrite",
    "optionTwoValueToWrite",
    "writeMode",
  ],
  template: /*html*/ `
            <div class="ui btn-multi" :class='[buttonFeedbackClass]' ref="twoOptionsPushButtonElement">
                <button v-bind="{ id: Id}" class="ui btn mini radius-no" :class='[buttonColor, buttonActiveClass]'>
                    <div class="content">
                            <div class=" font-semibold size2">{{buttonTitle}}</div>
                            <div v-if="displayOne" class="font-light size4"  v-on:click="write(1)">{{optionOneText}}</div>
                            <div v-if="displayTwo" class="font-light size4"  v-on:click="write(2)">{{optionTwoText}}</div>
                    </div>
                </button>
                <div class="borders">
                    <span class="border-tl"></span>
                    <span class="border-tr"></span>
                    <span class="border-bl"></span>
                    <span class="border-br"></span>
                </div>

                <span style="display: none;">{{value}}</span>    
                <span style="display: none;">{{value2}}</span>    
                <span style="display: none;">{{feedback}}</span>   

                <span style="display: none;">{{valueRewindMode1}}</span>    
                <span style="display: none;">{{valueRewindMode2}}</span>    
                <span style="display: none;">{{feedbackRewindMode}}</span>   

            </div>`,
  data() {

    return {
      value: valueRaw[this.signalId],
      value2: valueRaw[this.signalId2],
      feedback: valueRaw[this.feedbackSignalId],
      buttonColor: this.buttonColorClass,
      buttonActiveClass: ``,
      displayOne: false,
      displayTwo: false,
      signalMode: 0,
      Id:
        Math.floor(Math.random() * (1000 - 100)) +
        Date.now() +
        "_" +
        this.signalId,
      valueRewindMode1: null, 
      valueRewindMode2: null, 
      feedbackRewindMode: null, 
      rewindMode : rewindValuesMode,
      globalRewind : globalRewindUpdate
    };

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
  mounted(){
    $("#" + this.Id).parent().css("width", this.buttonWidth + "px");

    if (this.signalId == null && this.signalId2 == null) {
      this.signalMode = 0;
    }

    if (this.signalId2 == null && this.signalId != null) {
      this.signalMode = 1;
    }
    // TWO SIGNAL MODE
    if (this.signalId2 != null && this.signalId != null) {
      this.signalMode = 2;
    }

    this.rewindCheck();

    // Observer for push id to global array
    const twoOptionsPushButtonElement = this.$refs.twoOptionsPushButtonElement;
    if (twoOptionsPushButtonElement) {
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
        observer.observe(twoOptionsPushButtonElement);
    } else {
        console.error('Ref element is not available.');
    }

  },
  updated() {
    this.rewindCheck();
  },
  methods: {
    renderActiveButton(value, value2, feedback) {
      if (this.signalMode == 1) {
        // ONE SIGNAL MODE
        if (value == 1) {
          if (this.NC == 1) {
            this.toggleActive();
          } else {
            this.toggleInactive();
          }
        } else if (value == 0) {
          if (this.NC == 1) {
            this.toggleInactive();
          } else {
            this.toggleActive();
          }
        } else {
          this.disableButtons();
        }
      } else if (this.signalMode == 2) {
        if (value == 1 && value2 == 0) {
          this.toggleActive();
        } else if (value == 0 && value2 == 1) {
          this.toggleInactive();
        } else {
          this.disableButtons();
        }
      }

      if (feedback == 1) {
        this.buttonFeedbackClass = "feedback";
      } else {
        this.buttonFeedbackClass = "";
      }
    },
    disableButtons() {
      this.buttonActiveClass = "";
      this.displayOne = false;
      this.displayTwo = false;
    },
    toggleActive() {
      this.buttonActiveClass = "active";
      this.displayOne = true;
      this.displayTwo = false;
    },
    toggleInactive() {
      this.buttonActiveClass = "";
      this.displayOne = false;
      this.displayTwo = true;
    },
    write(button) {
      if (typeof this.writeMode !== "undefined") {
        if (button == 1) {
          writeSignalId = this.optionOneSignalIdToWrite;
          valueToWrite = this.optionOneValueToWrite;
        }

        if (button == 2) {
          writeSignalId = this.optionTwoSignalIdToWrite;
          valueToWrite = this.optionTwoValueToWrite;
        }
        //toggle button
        if (button == 3) {
          writeSignalId = this.optionOneSignalIdToWrite;
          if (this.optionToggleActive === "active") {
            valueToWrite = this.optionTwoValueToWrite;
          } else {
            valueToWrite = this.optionOneValueToWrite;
          }
        }

        var data = JSON.stringify({
          SignalId: parseInt(writeSignalId),
          Value: parseInt(valueToWrite),
          Mode: parseInt(this.writeMode),
        });
        if (helpers.profileCheck()) {
          var settings = {
            async: true,
            crossDomain: true,
            url: ACTIVE_SERVER + ":" + API.Port + "/writeBySignalId",
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            processData: false,
            data: data,
          };

          $.ajax(settings).done(function (response) {
            console.log(response);
          });
        } else {
          helpers.privilegesPopUp();
        }
      } else {
        console.log("writeMode not defined. Write cancelled!");
      }
    },
    rewindCheck(){

        if (!this.rewindMode == true) {
            if(!isNaN(this.value)){
                this.value = valueRaw[this.signalId]
            }
            if(!isNaN(this.value2)){
                this.value2 = valueRaw[this.signalId2]
            }
            if(!isNaN(this.feedback)){
                this.feedback = valueRaw[this.feedbackSignalId]
            }
           
            this.renderActiveButton(this.value, this.value2, this.feedback)
        } else{

            if(visibleHistoricalValue.includes(this.signalId) && visibleHistoricalValue.includes(this.signalId2) && visibleHistoricalValue.includes(this.feedbackSignalId) ){
          
                setTimeout(() => {
                    if((this.signalId in valueHistorical) && (this.signalId2 in valueHistorical) && (this.feedbackSignalId in valueHistorical)) {

                        this.valueRewindMode1 = parseFloat(valueHistorical[this.signalId][0].Value).toFixed(this.decimals)
                        this.valueRewindMode2 = parseFloat(valueHistorical[this.signalId2][0].Value).toFixed(this.decimals)
                        this.feedbackRewindMode = parseFloat(valueHistorical[this.feedbackSignalId][0].Value).toFixed(this.decimals)

                        this.renderActiveButton(this.valueRewindMode1, this.valueRewindMode2, this.feedbackRewindMode)
                    
                    }else {
                        this.valueRewindMode1 = null;
                        this.valueRewindMode2 = null;
                        this.feedbackRewindMode = null;
                    }

                }, 500);
            
            }else{
                return;
            }
        }
    },

  },
};

