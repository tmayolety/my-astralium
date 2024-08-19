components.pumpLayout = {
    props: ['runStopSignalId', 'faultSignalId', 'runCommandSignalId', 'runWriteValue', 'stopCommandSignalId' ,'stopWriteValue', 'writeMode' ,'name' , 'x', 'y', 'openColor', 'closeColor', 'size', 'icon'],
    template: /*html*/`
    <div ref="pumpLayoutElement">
    <i class="ui blink" :class= '[iconSize, iconColor]' :style="styleObject" v-bind="{ id: svgId}" v-on:click="openPopUp"></i>
        <div class="ui modal open size-mini w-310" v-bind="{ id: popUpId}"  :style="stylePopUp" style="display: none;">
                    <div class="ui grid type1 cols-1 pad-no gap-no">
                      <div class="ui grid cols-1 col sm-1 gap-no pad-no has-header">
                        <header class="ui col" style="font-size: 18px;">
                        <font style="margin-right: 30px;">{{name}}</font>
                        <span class="gradients">
                        <span class="gradient-left"></span>
                        <span class="gradient-right"></span>
                        </span>
                        
                        <button class="ui btn sm icon primary  icon-only" style="border-width: 0px;" v-on:click="closePopUp">
                        <svg class="ui icon" id="close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M98.74,81.26q2.52,2.14,0,4.47l-13,13q-2.33,2.33-4.47,0L50,67.67,18.74,98.74q-2.14,2.52-4.47,0l-13-13q-2.33-2.33,0-4.47L32.33,50,1.26,18.93q-2.33-2.33,0-4.47l13-13.2q2.32-2.33,4.47,0L50,32.33,81.26,1.26c1.56-1.68,3-1.68,4.47,0l13,13q2.33,2.32,0,4.47L67.67,50Z"></path></svg></button>
                        </header>
                        <div class="ui col sm-1 pad-no">
                        <div class="col-content modal-content">
                        <div class="btn-group">
                        <button class="ui btn sm gutter-sm colored danger" :class='[statusOpen]' v-on:click="write('run')" style="border-width: 0px;">RUN</button>
                        <button class="ui btn sm gutter-sm colored success" :class='[statusClose]' v-on:click="write('stop')" style="border-width: 0px;">STOP</button>
                        </div>
                        </div>           
                        </div>
                    </div>
                </div>
        </div>
                <span style="display: none;">{{valueOpenClose}}</span>
                <span style="display: none;">{{valueOvertime}}</span>

                <span style="display: none"> {{valueRewindModeOpenClose}} </span>
                <span style="display: none"> {{valueRewindModeOvertime}} </span>
    </div>

`,
    data() {
        return {
        valueOpenClose: null,
        valueOvertime: null,
        iconSize: 'icon-size-' + this.size,
        svgId: (Math.floor(Math.random() * (1000 - 100))) + Date.now() + '_' + this.runStopSignalId,
        popUpId: (Math.floor(Math.random() * (1000 - 100))) + Date.now() + '_' + this.runStopSignalId + '_popUp',
        iconColor: null,
        styleObject: {
            position: 'absolute',
            top: this.y + '%',
            left: this.x + '%'
        },
        stylePopUp: {
            position: 'absolute',
            top: (this.y + 1.25) + '%',
            left: (this.x + 1.2) + '%'
        },
        statusOpen: null,
        statusClose: null,
        valueRewindModeOpenClose: null,
        valueRewindModeOvertime: null,
        rewindMode: rewindValuesMode,
        globalRewind: globalRewindUpdate
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
            this.rewindCheck();
        },
        globalRewind(newVal, oldVal) {
            this.rewindCheck();
        },
    },
    mounted(){
        if (this.valueOpenClose == null  || this.valueOvertime == null){
            this.iconColor = 'color-fill-type-dark'
            this.statusOpen = ''
            this.statusClose = ''
        }
        const svgContent = iconRegistry[this.icon]
        $( "#"+this.svgId).html(svgContent)
        this.iconSize = 'icon-size-' + this.size

        this.rewindCheck()

        // Observer for push id to global array
        const pumpLayoutElement = this.$refs.pumpLayoutElement;
        if (pumpLayoutElement) {
            let observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (!visibleHistoricalValue.includes(this.signalId)) {
                            visibleHistoricalValue.push(this.signalId);
                        }
                        if (this.signalIdTwo && !visibleHistoricalValue.includes(this.signalIdTwo)) {
                            visibleHistoricalValue.push(this.signalIdTwo);
                        }
                    } else {
                        const index = visibleHistoricalValue.indexOf(this.signalId);
                        if (index > -1) {
                            visibleHistoricalValue.splice(index, 1);
                        }
                        if (this.signalIdTwo) {
                            const indexSignalIdTwo = visibleHistoricalValue.indexOf(this.signalIdTwo);
                            if (indexSignalIdTwo > -1) {
                                visibleHistoricalValue.splice(indexSignalIdTwo, 1);
                            }
                        }
                    }
                });
            });
            observer.observe(pumpLayoutElement);
        } else {
            console.error('Ref element is not available.');
        }

    },
    updated () {

        this.rewindCheck()
  
      },
    methods: {
        openPopUp: function () {
                let el = $('#'+this.svgId);
                let distance = $(window).width() - (el.offset().left + el.outerWidth());
                if (distance < 350) {
                    $('#'+this.popUpId).css({left:  (this.x - 16.3) + '%'})
                }
                $('#'+this.popUpId).show()
        },
        closePopUp: function () {
                $('#'+this.popUpId).hide()
        },
        write (action) {
            if ( typeof this.writeMode !== 'undefined' ) {

                if (action == 'run') {
                    writeSignalId = this.runCommandSignalId
                    valueToWrite = 1
                } else if (action == 'stop') {
                    writeSignalId = this.stopCommandSignalId
                    valueToWrite = 1
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
                        "url": ACTIVE_SERVER + ":" + API.Port + "/writeBySignalId",
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
            }
        },
        rewindCheck() {
            if (!this.rewindMode) {

                if(!isNaN(this.valueOpenClose)){
                    this.valueOpenClose = valueRaw[this.runStopSignalId]
                    this.updateOpenCloseStatus(this.valueOpenClose)
                }

                if(!isNaN(this.valueOvertime)){
                    this.valueOvertime = valueRaw[this.faultSignalId]
                    this.updateOvertimeStatus(this.valueOvertime)
                }

            }else {
                if(visibleHistoricalValue.includes(this.runStopSignalId) || visibleHistoricalValue.includes(this.faultSignalId) ){
                setTimeout(() => {
                    
                    if (this.runStopSignalId in valueHistorical) {
                        this.valueRewindModeOpenClose = parseFloat(valueHistorical[this.runStopSignalId][0].Value).toFixed(this.decimals);
                        
                        this.updateOpenCloseStatus(this.valueRewindModeOpenClose)
                    }
                    
                    if (this.faultSignalId in valueHistorical) {
                        this.valueRewindModeOvertime = parseFloat(valueHistorical[this.faultSignalId][0].Value).toFixed(this.decimals);
                       
                        this.updateOvertimeStatus(this.valueRewindModeOvertime)
                    }
                
                }, 500);
            }else{
                return;
            }
            }
        },
        updateOpenCloseStatus(valueOpenClose) {
     
            $('#'+this.svgId).removeClass('blink');

            if (valueOpenClose  == 1) {
                this.iconColor = 'glow color-fill-type-' + this.openColor
                this.statusOpen = 'active'
                this.statusClose = ''
            }
            else if(valueOpenClose  == 0){
                this.iconColor = 'glow color-fill-type-'+ this.closeColor
                this.statusClose = 'active'
                this.statusOpen = ''
            }
        },
        updateOvertimeStatus(valueOvertime){

            if (valueOvertime  == 1) {
                $('#'+this.svgId).addClass('blink');
                this.iconColor = 'glow color-fill-type-warning2'
         
            }else{
                return
            }
        },

    }
};

