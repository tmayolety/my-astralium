var decksCenterHeight;
var decksCenterWidth;
var bilgesCenterWidth;
var bilgesCenterHeight;
var bilgesCenterWidth_2;
var bilgesCenterHeight_2;
var landscape;
var passwordToValidate = '';
var UMSCountdown;
var brightnessResponse = true

const helpers = {

    calculatePercentage: function (id, value) {

        var top = document.getElementById("scaleTop_" + id).value;
        var bottom = document.getElementById("scaleBottom_" + id).value;

        if (bottom >= 0) {
            var range = Number(top) - Number(bottom);
        } else {
            var range = Number(top) + Math.abs(bottom);
        }

        var result = (value * 100) / range;
        return result.toFixed(2);

    },
    evaluatePerformance: function (renderTime, iterationTime, toleranceMS, deviceId) {

        if (parseFloat(renderTime) + parseFloat(toleranceMS) > iterationTime) {
            latencyDivider[deviceId] = parseInt(latencyDivider[deviceId]) + 1;
        } else if (parseInt(latencyDivider[deviceId]) > 1) {
            latencyDivider[deviceId] = parseInt(latencyDivider[deviceId]) - 1;
        }

    },
    socketConnect: function () {

        //SOCKET CONNECTION
        sock = io.connect(REDISURL);

        $.each(Object.keys(latencyDivider), function (key, val) {

            helpers.deviceConnect(val);

        });

    },
    deviceConnect: function (deviceId) {

        var count = 0;
        var iterationStart = performance.now();

        sock.on(deviceId, function (msg) {

            count = parseInt(count) + 1;

            document.getElementById("divider_" + deviceId).innerHTML = latencyDivider[deviceId];

            if (parseInt(count) >= parseInt(latencyDivider[deviceId])) {

                var iterationEnd = performance.now();
                var iterationTime = (iterationEnd - iterationStart);
                document.getElementById("iterationTime_" + deviceId).innerHTML = iterationTime.toFixed(3);
                iterationStart = performance.now();

                var startTime = performance.now();

                var json = JSONH.parse(msg);

                var parsingEnd = performance.now();
                var parsingTime = (parsingEnd - startTime);

                document.getElementById("parsingTime_" + deviceId).innerHTML = parsingTime.toFixed(3);

                json.forEach(function (item) {

                    screen.renderData(item);
                    data.storeCacheData(item);

                });

                var renderEnd = performance.now();
                var renderTime = (renderEnd - startTime);

                if (parseFloat(renderTime) > 1) {
                    document.getElementById("renderTime_" + deviceId).innerHTML = renderTime.toFixed(3);
                }

                helpers.evaluatePerformance(renderTime, iterationTime, 10 * latencyDivider[deviceId], deviceId);

                count = 0;
            }

        });

    },
    getValueActualInterval: function (id, percentage) {

        var result = {};

        result.HH = false;
        result.H = false;
        result.L = false;
        result.LL = false;

        var HH = parseFloat(document.getElementById("HH_" + id).value);
        var H = parseFloat(document.getElementById("H_" + id).value);
        var L = parseFloat(document.getElementById("L_" + id).value);
        var LL = parseFloat(document.getElementById("LL_" + id).value);

        if (percentage >= HH) { result.HH = true; }
        if (percentage >= H && percentage < HH) { result.H = true; }
        if (percentage <= L && percentage > LL) { result.L = true; }
        if (percentage <= LL) { result.LL = true; }

        return result;

    },
    activeEventPulse: function () {
        $('#eventBell').animate({ opacity: 0.1 });
        setTimeout(() => {
            $('#eventBell').animate({ opacity: 1 });
        }, 800);
    },
    writteValue: function (writeSignalId, valueToWrite, writeMode) {

        if (typeof writeMode !== 'undefined') {

            var data = JSON.stringify({
                "SignalId": parseInt(writeSignalId),
                "Value": parseInt(valueToWrite),
                "Mode": parseInt(writeMode)
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
        } else {
            console.log('writeMode not defined. Write cancelled!');
        }

    },
    screenBrightChange: function (value, object) {
        jQuery('body').css('opacity', value / 100);
        $('.dev-brightButton').addClass('active');
        $('.dev-brightButton').not(object).removeClass('active');
        if ($('#ScreenBrightLevel').val() <= 0) {
            $('#ScreenBrightLevel').val(80);
            helpers.screenBrightDown();
        }
    },
    screenBrightDown: function () {

        let brightLevel = $('#ScreenBrightLevel').val();

        if (brightLevel >= 20) {

            brightLevel = brightLevel - 20;
            console.log(brightLevel)
            jQuery('body').css('opacity', brightLevel / 100);
            setTimeout(function () {
                $('#ScreenBrightLevel').val(brightLevel);
                $('.dev-brightController').removeClass('inactive');
            }, 100);

        } else {

            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "http://127.0.0.1:60000/down",
                "method": "POST",
                "headers": {
                    "content-type": "application/json"
                },
                "processData": false
            }
            if (brightnessResponse === true) {
                $.ajax(settings).done(function (response) {
                    $('.dev-brightController').removeClass('inactive');

                    console.log(response);
                    brightnessResponse = true;
                }).fail(function (response) {
                    console.log(response + "este es el console.log FAIL DOWN")
                    return brightnessResponse = false
                })
            }



        }
    },
    screenBrightUp: function () {


        let brightLevel = parseInt($('#ScreenBrightLevel').val());

        if (brightLevel < 100) {

            brightLevel = parseInt(brightLevel) + 20;
            console.log(brightLevel)
            jQuery('body').css('opacity', brightLevel / 100);
            setTimeout(function () {
                $('#ScreenBrightLevel').val(brightLevel);
                $('.dev-brightController').removeClass('inactive');
            }, 100);

        } else {

            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "http://127.0.0.1:60000/up",
                "method": "POST",
                "headers": {
                    "content-type": "application/json"
                },
                "processData": false
            }
            if (brightnessResponse === true) {
                $.ajax(settings).done(function (response) {
                    $('.dev-brightController').removeClass('inactive');
                    console.log(response);
                    brightnessResponse = true;
                }).fail(function (response) {
                    console.log(response + "este es el console.log FAIL UP")
                    return brightnessResponse = false

                })

            }

        }




    },
    screenMode: function (element) {
        var actualMode = $(document.body).attr('data-scheme');
        if (actualMode == 'dark') { $(document.body).attr('data-scheme', 'light'); $(element).find('span').html('Night Mode'); } else { $(document.body).attr('data-scheme', 'dark'); $(element).find('span').html('Day Mode'); }
    },
    clockAndDate: function () {
        var timezone = parseInt(document.getElementById('timeZone').value);
        var actual = new Date().getTime() + (timezone * 60 * 60 * 1000);
        var today = new Date(actual);
    
        var hr = today.toUTCString();
        var length = hr.length;
        var hour = parseInt(hr.substring(length - 12, length - 10));
        var time = hr.substring(length - 10, length - 4);
        var date = hr.substring(0, length - 12);
    
        if (timezone < 0) {
            var displayTimezone = ' (GMT' + timezone + ')';
        } else {
            var displayTimezone = ' (GMT+' + timezone + ')';
        }
    
        var clockContent = '<span style="font-size: 19px; position: absolute; left: 0; top: 0;">' + hour + time + '</span><span style="font-size: 18px; position: absolute; right: 0; top: 0;">' + displayTimezone + '</span>';
    
        document.getElementById("clock").innerHTML = clockContent;
        document.getElementById("date").innerHTML = date;

        if (this.clockTimer) {
            clearTimeout(this.clockTimer);
        }
        
        this.clockTimer = setTimeout(function () { helpers.clockAndDate() }, 1000);

    },
    bringCollector: function (deviceName) {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": ACTIVE_SERVER + ":" + API.Port + "/bringCollector2/" + deviceName,
            "method": "GET",
            "processData": false
        }

        $.ajax(settings).done(function (response) {
            if (response.Code = 0) {

                console.log(response.Message);

            }
        });
    },
    limitChange: function (id, HH, H, L, LL) {

        $('#signalListHH_' + id).html(HH);
        $('#signalListH_' + id).html(H);
        $('#signalListL_' + id).html(L);
        $('#signalListLL_' + id).html(LL);
        limits[parseInt(id)].HH.value = parseFloat(HH);
        limits[parseInt(id)].H.value = parseFloat(H);
        limits[parseInt(id)].L.value = parseFloat(L);
        limits[parseInt(id)].LL.value = parseFloat(LL);
        updateComponent[parseInt(id)] = true;
    },
    passwordValidate: function (password) {

        passwordToValidate = password;

        if (passwordToValidate.length > 4) {
            if (parseInt(passwordToValidate) == 11111) {

                $('#typePassword').html('');
                $('#incorrectPassword').hide();
                $('#engineerIcon').show();
                $('#userIcon').hide();
                $('#engineerProfile').addClass('active');
                $('#padNumber').removeClass('active');
                $('#defaultProfile').removeClass('active');
                $('#activeProfile').val(99);

                setTimeout(function () {
                    $('#userPanel').removeClass('active');
                }, 800);
                passwordToValidate = '';
            } else {

                $('#typePassword').hide();
                $('#incorrectPassword').show();
                $('#activeProfile').val(0);
                passwordToValidate = '';

                setTimeout(function () {
                    $('#incorrectPassword').hide();
                    $('#typePassword').html('').show();
                }, 900);

            }
        } else {
            $('#typePassword').append('*');
        }
    },
    setDefaultProfile: function () {
        $('#engineerIcon').hide();
        $('#userIcon').show();
        $('#defaultProfile').addClass('active');
        $('#padNumber').removeClass('active');
        $('#engineerProfile').removeClass('active');
        $('#activeProfile').val(0);
        passwordToValidate = '';
        setTimeout(function () {
            $('#userPanel').removeClass('active');
        }, 800);
    },
    profileCheck: function () {

        if ($('#activeProfile').val() == 99) {
            return true;
        } else {
            return false;
        }
    },
    privilegesPopUp: function () {
        $('#popUpAlarmTitle').html('NOT ALLOWED');
        $('#popUpAlarmMessage').html('Your profile has no privileges to execute this action.');
        $('#alarmPLC').addClass('open');
        setTimeout(() => {
            $('#alarmPLC').removeClass('open');
        }, 1500);
    },
    printDevices: function () {
        let classActive = 'active';

        $.each(deviceData, function (key, value) {
            if (key > 0 && typeof value != 'undefined') {

                $('#devicesListMenu').append('<li data-alert="" data-section="settings' + value.Id + '" class="signalTab ' + classActive + '" onClick="signalList.deviceSelection(' + value.Id + ',this);"><a>' + value.Name + '</a></li>');
                classActive = '';

            }
        });
    },
    changeTimeZone() {

        var timeZone = document.getElementById("timeZoneSelector").value;
        var adjustment = parseInt($("#timeZoneSelector option:selected").attr('adjustment'));
        var data = JSON.stringify({
            "Type": parseInt(timeZone),
            "Action": adjustment
        });

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": ACTIVE_SERVER + ":" + API.Port + "/setTimeZone",
            "method": "POST",
            "headers": {
                "content-type": "application/json"
            },
            "processData": false,
            "data": data
        }

        $.ajax(settings).done(function () {
            document.getElementById("timeZone").value = adjustment;
        });

    },
    setVisualUMSSettings(preset, delay) {

        $('.presetModify').removeClass('active');
        $('#UMSPresetID_' + preset).addClass('active');
        if (preset > 0) {

            $('#UMSDelayID_' + delay).addClass('active');
            $('#UMSTextBig').html('UNATTENDED');

        } else {

            $('#UMSTextBig').html('ATTENDED');

        }
    },
    coundownUMSControl(json) {

        if (parseInt(json.UMS) == 1) {
            switch (parseInt(json.Action)) {

                //COUNTDOWN START RESTARTº
                case 0:
                    clearInterval(UMSCountdown);
                    $('#UMSTextBig').html('UNATTENDED');
                    $('#UMSTextSmall').html('Alarm Mode');
                    break;
                //DEADMAN ALARM ACTIVE

                //COUNTDOWN START RESTART
                case 1:
                    clearInterval(UMSCountdown);
                    if ($('#UMSTextBig').html() != 'DEAD MAN ALARM!') {
                        $('#UMSTextSmall').html('Alarm Mode');
                        helpers.UMSCountdown(parseInt(json.ElevateTimer) / 1000)
                    }
                    break;

                case 2:
                    clearInterval(UMSCountdown);
                    $('#UMSTextBig').html('DEAD MAN ALARM!');
                    $('#UMSTextSmall').html('');
                    break;
            }
        }
    }
    , UMSCountdown(duration) {

        clearInterval(UMSCountdown);
        $('#UMSTextBig').html('UNATTENDED');
        var timer = duration, minutes, seconds;
        UMSCountdown = setInterval(function () {

            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            $('#UMSTextBig').html(minutes + ":" + seconds);

            if (--timer < 0) {
                $('#UMSTextBig').html('DEAD MAN ALARM!');
                clearInterval(UMSCountdown);
            }
        }, 1000);
    },
    ackCheck: function () {

        if ($('#presetUMS').val() != 0) {
            if ($('#ScreenLocationId').val() == 5) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    },
    ackPopUp: function () {
        $('#popUpAlarmTitle').html('NOT ALLOWED');
        $('#popUpAlarmMessage').html('Under UNATTENDED alarm mode this action is only allowed from Engine Room´s screens.');
        $('#alarmPLC').addClass('open');
        setTimeout(() => {
            $('#alarmPLC').removeClass('open');
        }, 2000);
    },
    resetPopUp: function () {
        $('#popUpAlarmTitle').html('NOT ALLOWED');
        $('#popUpAlarmMessage').html('Only acknowledged alarms can be reset!');
        $('#alarmPLC').addClass('open');
        setTimeout(() => {
            $('#alarmPLC').removeClass('open');
        }, 2000);
    },

};

$(document).on('click', 'body *', function () {
    if ($('#ScreenBrightLevel').val() <= 0) { helpers.screenBrightChange(80, this) }
});

function cleanScreen() {
    const overlay = document.createElement('div');
    overlay.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: black; opacity: 0.8; pointer-events: all; z-index: 9999;';


    const countdown = document.createElement('div');
    countdown.style.cssText = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; font-size: 36px; z-index: 99999;';

    document.body.append(overlay, countdown);

    let counter = 20;
    countdown.textContent = `Screen Cleaner for: ${counter} seconds`;

    const countdownInterval = setInterval(() => {
        counter--;
        countdown.textContent = `Screen Cleaner for: ${counter} seconds`;
        if (counter === 0) {
            clearInterval(countdownInterval);
            document.body.removeChild(overlay);
            document.body.removeChild(countdown);
        }
    }, 1000);
}

var signalList = {
    printSignalsStart: function (device) {

        $('.dev-deviceList').hide();
        $('#signalList').html('');
        $('#editSignalDeviceName').val(deviceData[device].Name);
        signalsData.forEach(function(item) {
            signalList.printSignalsList(item);
        });
        this.displaySignals(device);

    },
    printSignalsList(item) {

        if (item.TypeInOut == 'in' && !$("#signalList_" + item.Id).length) {

            var type = "ANALOGUE";
            var iconSVG = "<i class=\"ui icon-size-20 glow\"><svg class=\"ui icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><path d=\"M25.78,92.71l-1.45-4c-.74-2.08-1.37-3.81-1.41-3.85l-2.25-.94L18.49,83l-3.78,2-3.79,2L8.61,84.59A16.18,16.18,0,0,1,6.27,82c0-.14.79-1.94,1.77-4l1.74-3.71L8.86,72,8,69.78,4,68.51,0,67.22V60.29l3.82-1.37c2.12-.74,3.91-1.41,4-1.47A14,14,0,0,0,8.86,55.2l.9-2.14L7.92,49.37a42.37,42.37,0,0,1-1.84-3.94,19.41,19.41,0,0,1,2.31-2.55l2.32-2.31,3.9,1.84,3.9,1.83,2.06-.87a22,22,0,0,0,2.27-1,33.46,33.46,0,0,0,1.47-4.19l1.28-4,3.43,0,3.41.06,1.39,4c.75,2.17,1.47,4,1.57,4.15a27.38,27.38,0,0,0,4.36,1.79,42.47,42.47,0,0,0,3.92-1.88l3.62-1.91,2.44,2.43,2.41,2.44-1.85,3.86-1.82,3.88.9,2.24.92,2.21,4.08,1.36,4.06,1.35,0,3.39-.06,3.41-4,1.43c-2.19.79-4,1.45-4,1.49s-.45,1.06-.94,2.24l-.88,2.16,1.92,3.84,1.9,3.84-2.39,2.39-2.39,2.4-3.88-1.87L39.76,83l-2.09.88a13.76,13.76,0,0,0-2.3,1.1c-.12.14-.76,2-1.45,4.12l-1.25,3.86h-3.4C26.73,92.94,25.84,92.88,25.78,92.71Zm6-20.34a8.21,8.21,0,0,0,4-2.51,8.48,8.48,0,0,0,2.53-6.25A9.06,9.06,0,0,0,33,55.35c-1.47-.74-1.51-.74-3.86-.74s-2.39,0-3.85.72a11.18,11.18,0,0,0-4,3.61,9.88,9.88,0,0,0-.93,7.16,9.73,9.73,0,0,0,6.12,6.27A10.21,10.21,0,0,0,31.75,72.37Z\"></path><path d=\"M68.45,58.39a35.77,35.77,0,0,0-1.47-4,13.88,13.88,0,0,0-2.14-1l-1.9-.78-3.57,1.78-3.55,1.79-2.23-2.24-2.24-2.23L53,48l1.71-3.61-.85-2.1-.84-2.09L49.27,39l-3.78-1.24V31.41l.84-.31c.45-.18,2.14-.79,3.77-1.37L53,28.67l.86-2.06.85-2L52.94,21l-1.8-3.59,2.23-2.23,2.24-2.24,3.59,1.67c2,.92,3.62,1.68,3.7,1.68s1-.37,2.16-.82l2-.82,1.21-3.79,1.22-3.78h6.35l.55,1.53,1.37,3.76.81,2.26,2.06.84,2.06.86,3.53-1.76,3.53-1.79L92,15.06l2.27,2.29-1.68,3.53-1.67,3.51.33.94c.18.51.57,1.49.89,2.16l.55,1.24,3.66,1.15L100,31v6.51l-3.55,1.27a39.1,39.1,0,0,0-3.78,1.47,13.09,13.09,0,0,0-1,2.14l-.79,1.92,1.79,3.57,1.78,3.59-2.18,2.18A26.91,26.91,0,0,1,90,55.88c-.06,0-1.72-.74-3.67-1.66l-3.54-1.67-2.06.82-2.06.85-1.2,3.72c-.67,2.06-1.23,3.84-1.27,4s-.87.24-3.26.24H69.71Zm7.82-16.15A8.53,8.53,0,1,0,65,31c-.55,1.18-.59,1.43-.61,3.43s0,2.24.63,3.47a9,9,0,0,0,5.25,4.73,7.24,7.24,0,0,0,2.85.27A6.12,6.12,0,0,0,76.27,42.24Z\"></path></svg></i>";

            if (item.Type ==  1) {
                type = "DIGITAL";
                item.SignalMin = '';
                item.SignalMax = '';
                item.SignalHH = '';
                item.SignalH = '';
                item.SignalL = '';
                item.SignalLL = '';
                iconSVG = '';
            }

            if (!$("#signalsDevice_" + item.Device).length) {
                $('#signalList').append('<ul class="ui table size-sm resp" id="signalsDevice_'+ item.Device +'">' +
                    '</ul>');
            }

            $('#signalsDevice_'+ item.Device).append('<li id="signalList_' + item.Id + '">' +
                '<div class="col-50 align-middle-center"><span>' + item.Id + '</span></div>' +
                '<div class="col-760  align-middle-center"><span>' + item.Title + '</span></div>' +
                '<div class="col-90 align-middle-center"><span> ' + type + '</span></div>' +
                '<div class="col-90 align-middle-center"><span class="font-bold"  id="signalRaw_' + item.Id + '"></span></div>' +
                '<div class="col-90 align-middle-center"><span class="font-bold" id="signalEscalated_' + item.Id + '"></span></div>' +
                '<div class="col-90 align-middle-center hidden-tv-pt"><span>' + item.SignalMin + '</span></div>' +
                '<div class="col-90 align-middle-center hidden-tv-pt"><span>' + item.SignalMax + '</span></div>' +
                '<div class="col-90 align-middle-center"><span id="signalListHH_' + item.Id + '">' + item.SignalHH + '</span></div>' +
                '<div class="col-90 align-middle-center"><span id="signalListH_' + item.Id + '">' + item.SignalH + '</span></div>' +
                '<div class="col-90 align-middle-center"><span id="signalListL_' + item.Id + '">' + item.SignalL + '</span></div>' +
                '<div class="col-90 align-middle-center"><span id="signalListLL_' + item.Id + '">' + item.SignalLL + '</span></div>' +

                '</li>' +
                '<signal-list-render v-bind="{ signalId: ' + parseInt(item.Id) +' }"></signal-list-render>');
        }
    },
    displaySignals: function (device) {

        $('.dev-deviceList').not('.deviceId_' + device).hide();
        $('.deviceId_' + device).show();
        $('#editSignalDeviceName').val(deviceData[device].Name);
        $('.dev-deviceListing').not('.signalsDevice_' + device).hide();
        $('.signalsDevice_'  + device).show();

    },
    deviceSelection: function (deviceId, object) {

        $('.signalTab').not(object).removeClass('active');
        $(object).addClass('active');
        signalList.displaySignals(deviceId);

    },
    editLimits: function (signalId) {
        $.getJSON( ACTIVE_SERVER + ":" + API.Port + "/signal/"+signalId, function( data ) {

            var data = data[0];
            document.getElementById('editSignalSignalName').innerHTML = data.Title;
            document.getElementById('editSignalHH').innerHTML = data.SignalHH;
            document.getElementById('editSignalH').innerHTML = data.SignalH;
            document.getElementById('editSignalL').innerHTML = data.SignalL;
            document.getElementById('editSignalLL').innerHTML = data.SignalLL;
            document.getElementById('editSignalAlarmId').value = signalId;
            document.getElementById('editSignalMirrorTo').value = data.SignalMirrorTo;
            document.getElementById('editSignalButton').innerHTML = 'Set new limits';

            if (isNaN(data.SignalHH)) {   $('#disableLimitHH').removeClass('active');} else { $('#disableLimitHH').addClass('active'); }
            if (isNaN(data.SignalH)) { $('#disableLimitH').removeClass('active'); } else { $('#disableLimitH').addClass('active');  }
            if (isNaN(data.SignalL)) { $('#disableLimitL').removeClass('active'); } else { $('#disableLimitL').addClass('active'); }
            if (isNaN(data.SignalLL)) {  $('#disableLimitLL').removeClass('active'); } else { $('#disableLimitLL').addClass('active'); }
            $('#editSignal').addClass('open');
            $('#intervalForModification').html('&nbsp;')

        });

        $.getJSON( ACTIVE_SERVER + ":" + API.Port + "/limitsAndAlarms", function( data ) {

            $('#linkedAlarm_HH').html('-');
            $('#linkedAlarm_H').html('-');
            $('#linkedAlarm_LL').html('-');
            $('#linkedAlarm_L').html('-');
            $('#intervalForModification').html('&nbsp;')
            $('#disableLimitH').show();
            $('#disableLimitHH').show();
            $('#disableLimitL').show();
            $('#disableLimitLL').show();
            $('#limitInhibit_HH').find('button').hide();
            $('#limitInhibit_H').find('button').hide();
            $('#limitInhibit_LL').find('button').hide();
            $('#limitInhibit_L').find('button').hide();

            var data = data[signalId];

            var HH = data.HH;
            var H = data.H;
            var L = data.L;
            var LL = data.LL;

            if (!isNaN(data.HH)) {
                $.getJSON( ACTIVE_SERVER + ":" + API.Port + "/alarm/"+alarmData[HH].alarmId, function( data ) {
                    $('#limitInhibit_HH').find('button').show();
                    $('#limitInhibit_HH').attr('data-alarmId', alarmData[HH].alarmId);
                    HH =   alarmData[HH].alarmDescription + "  (" + alarmData[HH].alarmId + ")";
                    $('#linkedAlarm_HH').html(HH);
                    if (data[0].Status != 1) {
                        $('#disableLimitHH').hide();
                        $('#limitInhibit_HH').find('button').html('OFF');
                        $('#limitInhibit_HH').find('button').removeClass('danger').addClass('success');
                    } else {
                        $('#limitInhibit_HH').find('button').html('ON');
                        $('#limitInhibit_HH').find('button').removeClass('success').addClass('danger');
                    }
                });
            }

            if (!isNaN(data.H)) {
                $.getJSON( ACTIVE_SERVER + ":" + API.Port + "/alarm/"+alarmData[H].alarmId, function( data ) {
                    $('#limitInhibit_H').find('button').show();
                    $('#limitInhibit_H').attr('data-alarmId', alarmData[H].alarmId);
                    H = alarmData[H].alarmDescription + "  (" + alarmData[H].alarmId + ")";
                    $('#linkedAlarm_H').html(H);
                    if (data[0].Status != 1) {
                        $('#disableLimitH').hide();
                        $('#limitInhibit_H').find('button').html('OFF');
                        $('#limitInhibit_H').find('button').removeClass('danger').addClass('success');
                    } else {
                        $('#limitInhibit_H').find('button').html('ON');
                        $('#limitInhibit_H').find('button').removeClass('success').addClass('danger');
                    }
                });
            }

            if (!isNaN(data.L)) {
                $.getJSON( ACTIVE_SERVER + ":" + API.Port + "/alarm/"+alarmData[L].alarmId, function( data ) {
                    $('#limitInhibit_L').find('button').show();
                    $('#limitInhibit_L').attr('data-alarmId', alarmData[L].alarmId);
                    L = alarmData[L].alarmDescription + "  (" + alarmData[L].alarmId + ")";
                    $('#linkedAlarm_L').html(L);
                    if (data[0].Status != 1) {
                        $('#disableLimitL').hide();
                        $('#limitInhibit_L').find('button').html('OFF');
                        $('#limitInhibit_L').find('button').removeClass('danger').addClass('success');
                    } else {
                        $('#limitInhibit_L').find('button').html('ON');
                        $('#limitInhibit_L').find('button').removeClass('success').addClass('danger');
                    }
                });
            }

            if (!isNaN(data.LL)) {
                $.getJSON( ACTIVE_SERVER + ":" + API.Port + "/alarm/"+alarmData[LL].alarmId, function( data ) {
                    $('#limitInhibit_LL').find('button').show();
                    $('#limitInhibit_LL').attr('data-alarmId', alarmData[LL].alarmId);
                    LL = alarmData[LL].alarmDescription + "  (" + alarmData[LL].alarmId + ")";
                    $('#linkedAlarm_LL').html(LL);
                    if (data[0].Status != 1) {
                        $('#disableLimitLL').find('button').hide();
                        $('#limitInhibit_LL').find('button').html('OFF');
                        $('#limitInhibit_LL').find('button').removeClass('danger').addClass('success');
                    } else {
                        $('#limitInhibit_LL').find('button').html('ON');
                        $('#limitInhibit_LL').find('button').removeClass('success').addClass('danger');
                    }
                });
            }
        });
    },
    closeEditLimits: function(){

        $('#intervalForModification').html('&nbsp;')
        $('.limitSelected').removeClass("color-bg-type-primary-light");
        $('.ui.modal').removeClass('open')
    },

    editSignalLimitModify: function (action, step) {

             var signalName = $('#intervalLimitsValue').val()


            var value = document.getElementById('editSignal' + signalName).innerHTML;


            if ($('.limitSelected').hasClass("color-bg-type-primary-light")  && !isNaN(value)) {

                document.getElementById('editSignalButton').innerHTML = 'Save new limits';

                if (action == 1) {

                    var targetValue = parseInt(value) + parseInt(step);
                    document.getElementById('editSignal' + signalName).innerHTML = targetValue;

                } else {

                    var targetValue = parseInt(value) - parseInt(step);
                    document.getElementById('editSignal' + signalName).innerHTML = targetValue;

                }

                signalList.editSignalLimitCheck();
            }

    },
    selectInterval(event, limit) {
            if (!isNaN($(event).text())){

                $('#intervalForModification').html('Modify'+' '+ limit +' '+ 'limit')
                $('#intervalLimitsValue').val(limit)
                $('.limitSelected').removeClass("color-bg-type-primary-light");
                $(event).addClass("color-bg-type-primary-light");

            }

            let interval = $(event.target).attr("data-interval");
            let order = $(event.target).attr("data-order");
            let valueType;

            if ( $(event.target).hasClass('raw') ) {
                valueType = " Raw ";
            }
            if ($(event.target).hasClass('unit')) {
                valueType = " Unit ";
            }

            this.selectedIntervalText = 'Interval ' + order + ' ' + valueType + ' modify';
            this.valueToModify = $(event.target).text();

            if ( this.valueToModify === "-" ) {
                this.valueToModify = 0;
            }
        }
,
    editSignalLimitCheck() {

        var HH = document.getElementById('editSignalHH').innerHTML;
        var H = document.getElementById('editSignalH').innerHTML;
        var L = document.getElementById('editSignalL').innerHTML;
        var LL = document.getElementById('editSignalLL').innerHTML;

        if ((Number(HH) > Number(H) || (isNaN(HH) || isNaN(H))) && (Number(H) > Number(L) || (isNaN(L) || isNaN(H))) && (Number(L) > Number(LL) || (isNaN(L) || isNaN(LL))) &&
            (Number(LL) < Number(L) || (isNaN(LL) || isNaN(L))) && (Number(L) < Number(H) || (isNaN(L) || isNaN(H))) && (Number(H) < Number(HH) || (isNaN(HH) || isNaN(H)))) {
            $('#editSignalButton').removeClass('content-disabled');
        } else {
            $('#editSignalButton').addClass('content-disabled');
        }
    },
    editSignalSave: function () {

        var alarmId = $('#editSignalAlarmId').val();
        var mirrorTo = $('#editSignalMirrorTo').val();
        var HH =  $('#editSignalHH').html();
        var H = $('#editSignalH').html();
        var L = $('#editSignalL').html();
        var LL = $('#editSignalLL').html();

        var data = JSON.stringify({
            "alarmId": parseInt(alarmId),
            "HH": String(HH),
            "H": String(H),
            "L": String(L),
            "LL": String(LL)
        });

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": ACTIVE_SERVER + ":" + API.Port + "/updateAlarmLimits",
            "method": "POST",
            "headers": {
                "content-type": "application/json"
            },
            "processData": false,
            "data": data
        }

        $.ajax(settings).done(function (response) {
            if (response.Code = 1) {

                if (isNaN(mirrorTo)) {
                    dataCache.getSignals();
                    $('#signalListHH_' + alarmId).html(HH);
                    $('#signalListH_' + alarmId).html(H);
                    $('#signalListL_' + alarmId).html(L);
                    $('#signalListLL_' + alarmId).html(LL);
                } else {
                    signalList.editSignalToMirror();
                }

                document.getElementById('editSignalButton').innerHTML = 'Limits saved!';
                helpers.bringCollector($('#editSignalDeviceName').val());
                $('#editSignalButton').addClass('content-disabled');

                updateComponent[parseInt(alarmId)] = true;

            } else {
                document.getElementById('editSignalButton').innerHTML = 'Limit change failed!';
            }

        });
    },
    editSignalToMirror: function () {

        var alarmId = $('#editSignalMirrorTo').val();
        var HH =  $('#editSignalHH').html();
        var H = $('#editSignalH').html();
        var L = $('#editSignalL').html();
        var LL = $('#editSignalLL').html();

        var data = JSON.stringify({
            "alarmId": parseInt(alarmId),
            "HH": String(HH),
            "H": String(H),
            "L": String(L),
            "LL": String(LL)
        });

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": ACTIVE_SERVER + ":" + API.Port + "/updateAlarmLimits",
            "method": "POST",
            "headers": {
                "content-type": "application/json"
            },
            "processData": false,
            "data": data
        }

        $.ajax(settings).done(function (response) {

            dataCache.getSignals();
            helpers.bringCollector('PLC_VIRTUAL');
            $('#signalListHH_' + alarmId).html(HH);
            $('#signalListH_' + alarmId).html(H);
            $('#signalListL_' + alarmId).html(L);
            $('#signalListLL_' + alarmId).html(LL);

        });
    },
    disableLimit: function(limitName, object) {
        $('.limitSelected').removeClass("color-bg-type-primary-light");
        $('#intervalForModification').html('&nbsp;')
        if ($(object).hasClass('active')) {
            $('#editSignal'+limitName).html('-');

        } else {
            $('#editSignal'+limitName).html(0);
        }

        $(object).toggleClass('active');
        signalList.editSignalLimitCheck();
    }
}


