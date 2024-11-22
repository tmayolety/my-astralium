let alarmData = [];
let deviceData = {};
let signalsData = [];
let locationsData = {};
let statusData = [];
let limits =  [];
let valueRaw = [];
let valueEscalated = [];
let valueFiltered = [];
let updateComponent = Vue.reactive([]);
let groupList;

window.signalGlobalTimelineVariable = null;
window.globalTimelineTitle = ''
window.globalTimelineDelay = null;

const eventBus = {

    callbacks: {},
  
    subscribe(event, callback) {
        if (!this.callbacks[event]) {
            this.callbacks[event] = [];
        }
        this.callbacks[event].push(callback);
    },

    emit(event, data) {
        if (this.callbacks[event]) {
            this.callbacks[event].forEach(callback => callback(data));
        }
    }
};


const dataCache = {
    getAlarmGroups: async function() {
        return new Promise(resolve => {
            $.getJSON( ACTIVE_SERVER + ":" + API.Port + "/alarmGroups", function( data ) {

                groupList = data;
                inhibits.groupInhibitButtons();
                dataCache.getAlarms();
                resolve(true);

            });
        });
    },
    getAlarms: async function () {
        return new Promise(resolve => {
            $.ajax({
                url: ACTIVE_SERVER + ":" + API.Port + "/alarms"
            }).then(function(data) {
                var json = JSON.parse(data);

                json.forEach(function(item) {

                    alarmData[parseInt(item.alarmId)] = item;
                    alarmData[0] = item;

                });

                alarmData[0].alarmId = 0;
                alarmData[0].alarmDescription = "ALL";
                resolve(true);
            });
        });
    },
    getLogs : async function () {
        return new Promise(resolve => {
            $.ajax({
                url: "http://192.168.10.49:10002/log/getAll",
                dataType: 'json',
            }).then(function(data) {
                console.log(data)
                data.forEach(function(item) {
                logsData.push(item)
                });

             
                resolve(true);
            });
        });
    }, 
    getAlarmSettings: async function () {
        return new Promise(resolve => {
            $.ajax({
                url: ACTIVE_SERVER + ":" + API.Port + "/alarmSettings"
            }).then(function(data) {

                var json = JSON.parse(data);
                $('#presetUMS').val(json.Preset);
                $('#elevateTimer').val(json.ElevateTimer);
                helpers.setVisualUMSSettings(json.Preset, json.ElevateTimer);

                resolve(true);
            });
        });
    },
    getDevices: async function () {
        return new Promise(resolve => {
            $.ajax({
                url: ACTIVE_SERVER + ":" + API.Port + "/devices"
            }).then(function(data) {
           
                var json = JSON.parse(data);
                json.forEach(function(item) {
                    deviceData[parseInt(item.Id)] = item;
                });
                helpers.printDevices();
                resolve(true);
            });
        });
    },
    getSignals: async function () {
        return new Promise(resolve => {
            $.ajax({
                url: ACTIVE_SERVER + ":" + API.Port + "/signals"
            }).then(function(data) {

                var json = JSON.parse(data);

                json.forEach(function(item) {
                  
                    signalsData[parseInt(item.Id)] = item;
                    dataCache.buildSignalSourceLayer(item);

                    if (typeof updateComponent[parseInt(item.Id)] === 'undefined'){
                        updateComponent[parseInt(item.Id)] =  Vue.ref(false);
                    }
                });
                resolve(true);
            });
        });
    },
    getLocations: async function () {
        return new Promise(resolve => {
            $.ajax({
                url: ACTIVE_SERVER + ":" + API.Port + "/screens"
            }).then(function(data) {

                    var json = JSON.parse(data);

                    json.forEach(function(item) {
                        locationsData[parseInt(item.Id)] = item;
                    });

                    locationsData[0]= JSON.parse('{' +
                        '    "Id": 0,' +
                        '    "Name": "Bluewave System",' +
                        '    "Ip": 0, }');

                    resolve(true);
            });
        });
    },
    getScreenId:  function () {
            $.ajax({
                url: ACTIVE_SERVER + ":" + API.Port + "/getScreenId"
            }).then(function(data) {
                $('#ScreenLocationId').val(parseInt(data.Message));
                setTimeout(function (){$('#screenIdName').html('[' + locationsData[parseInt(data.Message)].Name + ']'); }, 3000)

            });
    },
    getStatus: function () {

        statusData[9] = "Active";
        statusData[1] = "Inhibited";
        statusData[2] = "Muted";
        statusData[3] = "Acknowledged";
        statusData[0] = "Reset";

    },
    buildSignalSourceLayer: function (item) {

        limits[item.Id] = { "LL": Vue.ref(item.SignalLL), "L": Vue.ref(item.SignalL), "H": Vue.ref(item.SignalH), "HH": Vue.ref(item.SignalHH), "Min": item.SignalMin, "Max": item.SignalMax  };
        if (typeof valueRaw[parseInt(item.Id)] == 'undefined') {
            valueRaw[item.Id] = Vue.ref();
            valueEscalated[item.Id] = Vue.ref();
            valueFiltered[item.Id] = Vue.ref();
        }
    }
};
