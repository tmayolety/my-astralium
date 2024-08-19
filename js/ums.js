var screen = {
    renderData: function (msg) {
    }
};

$( ".presetModify" ).unbind().click(function() {

    UMSActiveAlarmsCheck();

});

function activeAlarms() {

    if ( parseInt($('#headerAlertIcon').attr('data-alert-num')) < 1 || $('#headerAlertIcon').attr('data-alert-num') == '') {
        return true;
    } else  {
        return false;
    }
}


function UMSActiveAlarmsCheck () {

    let result = false

    if (activeAlarms()) {
        result = true
    } else {

        result = false
        $('#popUpAlarmTitle').html('ALARM MODE');
        $('#popUpAlarmMessage').html('Alarm mode CAN NOT be changed if there is any active alarm.');
        $('#alarmPLC').addClass('open');
        setTimeout(() => {
            $('#alarmPLC').removeClass('open');
        }, 1500);
    }

    if (result == true) {

        if (helpers.profileCheck() && activeAlarms()) {
            result = true
        } else {
            result = false
            helpers.privilegesPopUp();

        }
    }

    if (result == true) {
        UMSSettingsModify()
    }

}

function UMSSettingsModify () {

        var presetUMS = parseInt($('#presetUMS').val());
        var elevateTimer = parseInt($('#elevateTimer').val());

        if ( !isNaN(presetUMS) && !isNaN(elevateTimer)) {

            var data = JSON.stringify({
                "Preset": presetUMS,
                "ElevateTimer": elevateTimer
            });

            var settings = {
                "async": true,
                "crossDomain": true,
                "url": ACTIVE_SERVER + ":" + API.Port + "/updateUMS",
                "method": "POST",
                "headers": {
                    "content-type": "application/json"
                },
                "processData": false,
                "data": data
            }

            $.ajax(settings).done(function (response) {
                var json = JSON.parse(response);
                if (json.Code == 1) {

                    helpers.bringCollector('ALARM_SYSTEM');

                    if (presetUMS == 0) {
                        $('.dev-mute-button').removeClass('innactive');
                        $('.dev-mute-button').addClass('active');
                    }
                }
            });

        } else {
            console.log('UMS MODE CANT BE CHANGED!');
        }

}

function UMSDelayTime (milliseconds, object) {

    if (helpers.profileCheck() && activeAlarms()) {

        $('#elevateTimer').val(milliseconds);

    } else {

        UMSActiveAlarmsCheck ();

    }
}

function UMSPreset (preset, object) {

    if (helpers.profileCheck() && activeAlarms()) {

        $('#presetUMS').val(preset);
        $('#elevateTimer').val('150000');

    } else {

        UMSActiveAlarmsCheck ();
    }
}


function UMSAttended (object) {

    if (helpers.profileCheck() && activeAlarms()) {

        $('#presetUMS').val('0');

    } else {

        UMSActiveAlarmsCheck ();
    }
}

