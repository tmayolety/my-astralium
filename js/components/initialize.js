components.initializeApp = {
    props: ['projectTitle', 'projectVersion'],
    template: /*html*/`<!-- INIT STATUS CHECK -->
    <article style="display:flex;height:100%;align-items:center;">
        <div class="ui grid type1 cols-sm-1 pad-lg gap-med middle-center radius shadow" style="align-self:auto;">
            <div class="ui col xs-1 sm-1 align-middle-center">
                <img src="img/bluewave.png" class="bluewave-logo"><br>
                  <h5 class="ui h4 font-regular align-center glow">{{projectTitle}} - Version {{projectVersion}}</h5>
                  <br/>
                  <span class="loader" style="margin-left: 13em"></span>
            </div>
            <div class="ui col sm-1 align-middle-center h-100" :class="socketResultClass">
                <h5 class="ui h4 font-regular align-center glow">Checking socket</h5>
                <h5 class="ui h5 font-regular align-center glow">{{socketInfo}}</h5>
            </div>
            <div class="ui col sm-1 align-middle-center h-100" :class="APIResultClass">
                <h5 class="ui h4 font-regular mg-sm align-center glow">Connecting to API</h5>
                <h5 class="ui h5 font-regular align-center glow">{{loadingInfo}}</h5>
            </div>
            <div class="ui col  sm-1 align-middle-center h-100" :class="loadingResultClass">
                <h5 class="ui h4 font-strong mg-sm align-center glow">Graphical User Interface</h5>
                <h5 class="ui h5 font-regular align-center glow">{{loadingComponents}}</h5>
            </div>
        </div>
        <div style="display:none;">{{socketStatus}}{{APIStatus}}{{loadingStep}}</div>
    </article>
    <!-- INIT STATUS CHECK -->`,
    data() {
        return {
            socketResultClass: '',
            APIResultClass: '',
            loadingResultClass: '',
            socketStatus: socketConnectionEstablished,
            APIStatus: APIConnectionEstablished,
            loadingStep: 0,
            loadingInfo : null,
            socketInfo : null,
            loadingComponents: componentLoadingText
        }
    },
    updated () {

        if (this.socketStatus) {
            this.socketResultClass = 'color-bg-type-success';
            this.socketInfo = "Connection success!"
        }
        if (this.APIStatus && this.socketStatus) {
            this.APIStatus = false
            this.socketStatus = false
            this.loadingStep = 1
        }

        switch (this.loadingStep) {
            case 1:
                this.loadingStep = 0
                this.loadingInfo = "Alarms settings loading..."
                this.getAlarmSettings()
                break;

            case 2:
                this.loadingStep = 0
                this.loadingInfo = "Alarms groups loading..."
                this.getAlarmGroups()
                break;

            case 3:
                this.loadingStep = 0
                this.loadingInfo = "Devices loading..."
                this.getDevices()
                break;

            case 4:
                this.loadingStep = 0
                this.loadingInfo = "Signals loading..."
                this.getSignals()
                break;

            case 5:
                this.loadingStep = 0
                this.loadingInfo = "Locations loading..."
                this.getLocations()
                break;

            case 6:
                this.loadingStep = 0
                this.loadingInfo = "Getting Screen ID..."
                this.getScreenId()
                break;

            case 7:
                this.loadingStep = 0
                this.loadingInfo = "Alarms loading..."
                this.getAlarms()
                break;

            case 8:
                this.loadingStep = 0
                this.loadingInfo = "API data loaded!"
                this.APIResultClass = 'color-bg-type-success';
                alarms.refreshAlarmLog();
                events.refreshEvents();
                dataCache.getStatus();
                this.getComponentFile();
                break;

            case 9:
                this.loadingStep = 0
                componentLoadingText.value = "Initializing components..."
                setTimeout( initComponents, 100);
                break;

        }


    },
    mounted()
    {

    },
    methods: {
        getAlarmSettings() {
            const _this = this;
            $.ajax({
                url: ACTIVE_SERVER + ":" + API.Port + "/alarmSettings",
                method: 'GET',
                success: function (data) {
                    var json = JSON.parse(data);
                    $('#presetUMS').val(json.Preset);
                    $('#elevateTimer').val(json.ElevateTimer);
                    helpers.setVisualUMSSettings(json.Preset, json.ElevateTimer);
                    _this.loadingInfo = "Alarms settings loaded!"
                    _this.loadingStep = 2
                }
            })
        },
        getAlarmGroups() {
            const _this = this;
            $.getJSON(ACTIVE_SERVER + ":" + API.Port + "/alarmGroups", function (data) {
                groupList = data;
                inhibits.groupInhibitButtons();
                _this.loadingInfo = "Alarms groups loaded!"
                _this.loadingStep = 3
            });

        },
        getAlarms() {
            const _this = this;
                $.ajax({
                    url: ACTIVE_SERVER + ":" + API.Port + "/alarms"
                }).then(function(data) {
                    var json = JSON.parse(data);

                    json.forEach(function(item) {
                        alarmData[parseInt(item.alarmId)] = item;

                    });

                    _this.loadingInfo = "Alarms loaded!"
                    _this.loadingStep = 8

            });
        },
        getDevices() {
            const _this = this;
            $.ajax({
                url: ACTIVE_SERVER + ":" + API.Port + "/devices"
            }).then(function (data) {
                var json = JSON.parse(data);
                json.forEach(function (item) {
                    deviceData[parseInt(item.Id)] = item;
                });
                helpers.printDevices();
                _this.loadingStep = 4
                _this.loadingInfo = "Devices loaded!"
            });
        },
        getSignals() {
            const _this = this;
            $.ajax({
                url: ACTIVE_SERVER + ":" + API.Port + "/signals"
            }).then(function (data) {

                var json = JSON.parse(data);

                json.forEach(function (item) {
                    signalsData[parseInt(item.Id)] = item;
                    dataCache.buildSignalSourceLayer(item);

                    if (typeof updateComponent[parseInt(item.Id)] === 'undefined') {
                        updateComponent[parseInt(item.Id)] = Vue.ref(false);
                    }
                });

                _this.loadingStep = 5
                _this.loadingInfo = "Signals loaded!"
            });
        },
        getLocations() {
            const _this = this;
            $.ajax({
                url: ACTIVE_SERVER + ":" + API.Port + "/screens"
            }).then(function (data) {

                var json = JSON.parse(data);

                json.forEach(function (item) {
                    locationsData[parseInt(item.Id)] = item;
                });

                _this.loadingStep = 6
                _this.loadingInfo = "Locations loaded!"

            });
        },
        getScreenId () {
            const _this = this;
            $.ajax({
                url: ACTIVE_SERVER + ":" + API.Port + "/getScreenId"
            }).then(function (data) {
                $('#ScreenLocationId').val(parseInt(data.Message));
                setTimeout(function () {
                    if (typeof locationsData[parseInt(data.Message)] !== 'undefined' ){
                        $('#screenIdName').html('[' + locationsData[parseInt(data.Message)].Name + ']');
                    } else {
                        $('#screenIdName').html('[ Unknown Location ]');
                    }
                }, 3000)
                _this.loadingStep = 7
                _this.loadingInfo = "Screen ID assigned!!"
            });
        },
        getComponentFile () {
            const _this = this;
                $.getJSON('js/components/config.json', function(data) {
                    vueComponents =  data;
                    _this.loadingStep = 9
                    componentLoadingText.value = "Component file description loaded!!"
                });
        }
    }
};


