let socketStatus = null;
let APIStatus = null;
let loadingStatus = null;
let socketConnected = false;
let lastNotificationTime = 0;
let socketConnectionEstablished = Vue.ref(false);
let APIConnectionEstablished = Vue.ref(false);
let componentLoadingText = Vue.ref('');

$( document ).ready(function() {

    status.initConnections ();

    setTimeout(function() {

        let initSocketPromise = new Promise(function(resolve) {

            sock.on('deviceStats', function(msg) {
                sock.off('deviceStats');
                socketConnectionEstablished.value = true;
                helpers.clockAndDate();
                resolve(true);
            });
        });

        initSocketPromise.then(function() {

            let checkAPIPromise = new Promise(function(resolve) {

                $.getJSON(ACTIVE_SERVER + ":" + API.Port + "/devices", function() {
                    APIConnectionEstablished.value = true;
                    resolve(true);
                })
                .fail(function() {
                    APIConnectionEstablished.value = false;
                });
            });

            checkAPIPromise.then(function() {
                console.log('Getting Data...');
            });

        });

    }, 1000);

});


const status = {
    initConnections: function () {

        console.log('Init Connection...');

        let connectServer_1 = new Promise(function(resolve, reject) {

            setTimeout( function() {
                if (ACTIVE_SERVER == null) {
                    reject(true);
                    sock.disconnect();
                }
            }, 2000);

            sock = io.connect(SERVER_1_IP + ':8000', {
                'reconnection': true,
                'reconnectionDelay': 500,
                'reconnectionAttempts': 1,
                transports: ['websocket'],
                upgrade: false
            });

            sock.on('connect', function(){

                clearTimeout(socketConnected);
                $('#alarmPLC').removeClass('open');
                ACTIVE_SERVER = SERVER_1_IP;
                STANDBY_SERVER = SERVER_2_IP;
                SERVER_1_ACTIVE = true;
                resolve(true);

            });

        });
        connectServer_1.then(function() {
            console.log('Connected to Server 1');
            status.initSocketConnections();

        }).catch(function() {

            console.log('Server 1 failed. Connecting Server 2');

            let connectServer_2 = new Promise(function(resolve, reject) {

                setTimeout( function() {
                    if (ACTIVE_SERVER == null) {
                        sock.disconnect();
                        reject(true);
                    }
                }, 2000);

                sock = io.connect(SERVER_2_IP + ':8000' , {
                    'reconnection': true,
                    'reconnectionDelay': 500,
                    'reconnectionAttempts': 1,
                    transports: ['websocket'],
                    upgrade: false
                });

                sock.on('connect', function(){

                    clearTimeout(socketConnected);
                    $('#alarmPLC').removeClass('open');
                    ACTIVE_SERVER = SERVER_2_IP;
                    STANDBY_SERVER = SERVER_1_IP;
                    SERVER_2_ACTIVE = true;
                    resolve(true);
                });
            });

            connectServer_2.then(function() {
                console.log('Connected to Server 2');
                status.initSocketConnections();
            }).catch(function() {
                sock.disconnect();
                console.log('BOTH SERVER FAILED TO CONNECT. Retrying again in 20 seconds...');
                setTimeout( function() {
                    status.initConnections ();
                }, 20000);
            });
        });

    },
    initSocketConnections: function () {

        setTimeout( function() {
            status.subscribeChannels();
        }, 12000);


        sock.on('disconnect', function(){

            socketConnected = setTimeout(function() {

                $('#popUpAlarmTitle').html('SERVER CONNECTION LOST');
                $('#popUpAlarmMessage').html('The connection between this screen and the server has been lost.');
                $('#alarmPLC').addClass('open');

                sock.disconnect();
                ACTIVE_SERVER = null;

                status.initConnections ();

            }, 2000);

        });

        sock.on('connect', function(){
            clearTimeout(socketConnected);
            $('#alarmPLC').removeClass('open');

        });

        //SIGNAL LIMITS CHANNEL SUBSCRIBE
        sock.on('limits', function(msg) {

            var json = JSON.parse(msg);

            if (typeof json.HH !== 'undefined')
            {
                helpers.limitChange(json.alarmId, json.HH, json.H, json.L, json.LL);
            }

            if (typeof json.delay !== 'undefined')
            {
                $('#alarmDelay_' + json.alarmId).html(json.delay/1000);
            }

            if (typeof json.Preset !== 'undefined')
            {
                helpers.setVisualUMSSettings(json.Preset, json.ElevateTimer);
                $('#presetUMS').val(parseInt(json.Preset));
            }

            if (typeof json.UMS !== 'undefined')
            {
                helpers.coundownUMSControl(json);
            }

            if (typeof json.ClearDeadman !== 'undefined')
            {
                var presetUMS = parseInt($('#presetUMS').val());
                if (presetUMS > 0) {
                    $('#UMSTextBig').html('UNATTENDED');
                }
            }

            if (typeof json.type !== 'undefined')
            {
                $('#alarmType_' + json.alarmId ).removeClass(typeAClass);
                switch (json.type) {
                    case 1:
                        alarms.alarmTypePreAlarm(json.alarmId);
                        break;
                    case 0:
                        alarms.alarmTypeAlarm(json.alarmId);
                        break;
                    }

            }
        });

        sock.on('sync', function(msg) {

            var json = JSON.parse(msg);
            document.getElementById("timeZone").value = json.Action;
            $("#timeZoneSelector").val(json.Type);

        });
    },
    subscribeChannels: function () {

        //SIGNAL DEVICES TO DISPLAY CHANNELS SUBSCRIBE
        $.each( deviceData, function( key, value ) {
            if (value.IP != '0') {
                console.log('Channel connected: ' + key);
                sock.on( key, function(msg) {

                    screen.renderData(msg);
                    bringValues(msg);

                });
            }
        });

        sock.on( "deviceStats", function(msg) {
            var item = JSON.parse(msg);

            if ($("#deviceLast_" + item.deviceId).length) {
                if (item.deviceId == 1) {
                    if ($('#popUpAlarmTitle').text() == 'ALARM PLC CONNECTION LOST') {
                        $('#alarmPLC').removeClass('open');
                    }
                }
                document.getElementById('deviceLast_' + item.deviceId).innerHTML = item.last.toFixed(1);
                document.getElementById('deviceTotal_' + item.deviceId).innerHTML = item.total.toFixed(1);
            }
        });

        alarms.activeAlarmSubscribe();
    }
}

function bringValues(msg) {
    var json = JSONH.parse(msg);
    json.forEach(function (item) {

        if (typeof valueRaw[item.signalId] == 'undefined') {
            valueRaw[item.signalId] =  Vue.ref();
            valueEscalated[item.signalId] = Vue.ref();
            valueFiltered[item.signalId] = Vue.ref();
        } else {
            valueRaw[item.signalId].value = item.raw;
            valueEscalated[item.signalId].value = item.escalatedValue;
            valueFiltered[item.signalId].value = item.filteredValue;
        }

    });
}


