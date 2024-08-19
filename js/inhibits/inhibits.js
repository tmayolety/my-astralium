var inhibitOnClass = 'danger';
var inhibitOffClass = 'success';
var typePreClass = '';
var typeAClass = ' icon icon-only';
var activeInhibitsCount = 0;
var typeIcon = '<svg class="ui icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M99.22,85.06,54.81,9.68a5.37,5.37,0,0,0-9.35,0L1.05,85.06a4.06,4.06,0,0,0,0,5.26,5.06,5.06,0,0,0,4.68,2.73H94.55a5.06,5.06,0,0,0,4.67-2.73A4.82,4.82,0,0,0,99.22,85.06ZM55.59,77.27c0,.91-.52,1.36-1.56,1.36h-8a1.21,1.21,0,0,1-1.37-1.36v-8a1.21,1.21,0,0,1,1.37-1.36h8c1,0,1.56.46,1.56,1.36Zm0-29.61a11.46,11.46,0,0,1-.39,2.73L52.86,62.86c-.26.91-.77,1.36-1.55,1.36H49.16c-1,0-1.55-.45-1.55-1.36L45.07,50.58a12,12,0,0,1-.39-2.92V40.85c0-1.17.65-1.76,2-1.76h7c1.3,0,2,.59,2,1.76Z"></path></svg>';
var inhibits = {
    inhibitStatusChange(alarmId, status) {
        if (alarmId > 0) {
            var groupId = alarmData[alarmId].Group;
            var groupName = groupList[parseInt(groupId) - 1].Name;
            var name = groupName.replace(/\s/g, '');
            var actualGroup = $('#' + name + '_groupOverallCount').val();
            var actualInhibits = $('#inhibitOverallCount').html();


            if (status == 1) {
                
                if ($('#alarmInhibit_' + alarmId).hasClass(inhibitOffClass)) {
                    var value = parseInt(actualGroup);
                    $('#' + name + '_groupOverallCount').val(value + 1)
                    $('.' + name + '_overallCount').html(value + 1);
                    $('#inhibitOverallCount').html(parseInt(actualInhibits) + 1);

                    if (parseInt(value + 1) > 0) {
                        $('.inhibitGroup_' + name).attr('data-alert', 'true');
                    }
                    if (parseInt(actualInhibits + 1) > 1) {
                        $('#inhibitGeneralAlert').attr('data-alert', 'true');
                    }
                }

                $('#alarmInhibit_' + alarmId).addClass(inhibitOnClass);
                $('#alarmInhibit_' + alarmId).removeClass(inhibitOffClass);
                $('#alarmInhibit_' + alarmId).html('ON');

            } else {

                if ($('#alarmInhibit_' + alarmId).hasClass(inhibitOnClass)) {
                    var value = parseInt(actualGroup);
                    $('#' + name + '_groupOverallCount').val(value - 1)
                    $('.' + name + '_overallCount').html(value - 1);
                    $('#inhibitOverallCount').html(parseInt(actualInhibits) - 1);

                    if (parseInt(value - 1) == 0) {
                        $('.inhibitGroup_' + name).attr('data-alert', '');
                    }
                    if (parseInt(actualInhibits - 1) == 0) {
                        $('#inhibitGeneralAlert').attr('data-alert', '');
                    }
                }

                $('#alarmInhibit_' + alarmId).addClass(inhibitOffClass);
                $('#alarmInhibit_' + alarmId).removeClass(inhibitOnClass);
                $('#alarmInhibit_' + alarmId).html('OFF');
            }
        }
    },
    inhibitButtons: function () {
        let status;
        let object;
        $( ".dev-inhibitButton" ).prop("onclick", null).off("click").click(function() {

            if (helpers.profileCheck()) {

                object = $(this);
                if ($(this).find('button').hasClass(inhibitOnClass)) { status = 0; } else
                if ($(this).find('button').hasClass(inhibitOffClass)) { status = 1; }

                var alarmId = $(this).attr('data-alarmId');

                var data = JSON.stringify({
                    "Id": parseInt(alarmId),
                    "Status": parseInt(status),
                    "Source":  parseInt($('#ScreenLocationId').val())
                });

                var settings = {
                    "async": true,
                    "crossDomain": true,
                    "url": ACTIVE_SERVER + ":" + API.Port + "/updateAlarmStatus",
                    "method": "POST",
                    "headers": {
                        "content-type": "application/json"
                    },
                    "processData": false,
                    "data": data
                }

                $.ajax(settings).done(function (response) {

                    var objectId = object.attr('id');

                    if (typeof objectId !== 'undefined') {

                        var name = objectId.split('_');

                        if (status == 0 && name[0] == 'limitInhibit' ) {
                            $('#disableLimit' + name[1]).hide();
                            object.find('button').html('OFF');
                            object.find('button').removeClass('danger').addClass('success');
                        } else
                        if (status == 1 && name[0] == 'limitInhibit' ) {
                            $('#disableLimit' + name[1]).show();
                            object.find('button').html('ON');
                            object.find('button').removeClass('success').addClass('danger');
                        }

                    }
                    console.log(response);
                });

                if (STANDBY_SERVER != ACTIVE_SERVER) {
                        var settings = {
                            "async": true,
                            "crossDomain": true,
                            "url": STANDBY_SERVER + ":" + API.Port + "/updateAlarmStatus",
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
                }

            } else {
                helpers.privilegesPopUp();
            }
        });

        $( ".dev-typeButton" ).prop("onclick", null).off("click").click(function() {

            var alarmId = $(this).attr('data-alarmId');
            var type =  $(this).attr('data-type');
            var device =  $(this).attr('data-device');

            if (helpers.profileCheck()) {

                if ($('#alarmInhibit_'+alarmId).html() == 'ON') {
                    alarms.typeModifyRequest(type, alarmId, device);
                }

            } else {
                helpers.privilegesPopUp();
            }
        });

    },
    editDelay: function (alarmId) {
        $.getJSON( ACTIVE_SERVER + ":" + API.Port + "/alarm/"+alarmId, function( data ) {

            var data = data[0];

            $('#editDelayAlarmName').html(data.alarmDescription);
            $('#editDelayAlarmId').val(alarmId);
            $('#editDelayDeviceId').val(data.Device);
            $('#delay').html(parseInt(data.timeDelay) / 1000 );

            $('#editDelayWindow').addClass('open');
            document.getElementById('editAlarmButton').innerHTML = 'SAVE DELAY';
            $('#editSignalButton').removeClass('content-disabled');

        });
    },
    editTimeDelay: function (action, step) {

        var value = parseFloat(document.getElementById('delay').innerHTML);

        if (!isNaN(value)) {
            if (action == 1) {

                var targetValue = value + step;
                document.getElementById('delay').innerHTML = targetValue;

            } else {

                var targetValue = value - step;
                document.getElementById('delay').innerHTML = targetValue;
            }
        }
        document.getElementById('editAlarmButton').innerHTML = 'SAVE DELAY';

    },
    groupInhibitButtons: function(){
        let nameGroup = groupList

        for (let i = 0; i < nameGroup.length; i++) {

            let listItem = $('<li data-alert="" class="inhibitGroup inhibitGroup_'+nameGroup[i].Id+'" ></li>');

            $('.inhibitGroup_'+nameGroup[0].Id).addClass("active")
            listItem.click(function () {
                $(".inhibitGroup.active").removeClass("active");
                $(this).addClass("active");
                $('.groupColumn').parent().parent().hide();
                $('.groupColumn_'+nameGroup[i].Id).parent().parent().show();
            });

            listItem.append('<a>' + nameGroup[i].Name +'<svg className="ui icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M99.22,85.06,54.81,9.68a5.37,5.37,0,0,0-9.35,0L1.05,85.06a4.06,4.06,0,0,0,0,5.26,5.06,5.06,0,0,0,4.68,2.73H94.55a5.06,5.06,0,0,0,4.67-2.73A4.82,4.82,0,0,0,99.22,85.06ZM55.59,77.27c0,.91-.52,1.36-1.56,1.36h-8a1.21,1.21,0,0,1-1.37-1.36v-8a1.21,1.21,0,0,1,1.37-1.36h8c1,0,1.56.46,1.56,1.36Zm0-29.61a11.46,11.46,0,0,1-.39,2.73L52.86,62.86c-.26.91-.77,1.36-1.55,1.36H49.16c-1,0-1.55-.45-1.55-1.36L45.07,50.58a12,12,0,0,1-.39-2.92V40.85c0-1.17.65-1.76,2-1.76h7c1.3,0,2,.59,2,1.76Z"></path></svg>'+'</a>');

            $('#inhibitGroups').append(listItem);
        }
    },

    editDelaySave: function () {

        var alarmId = $('#editDelayAlarmId').val();
        var delay = $('#delay').html();
        var deviceId = $('#editDelayDeviceId').val();

        var data = JSON.stringify({
            "alarmId": parseInt(alarmId),
            "delay": parseInt(delay*1000),
        });

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": ACTIVE_SERVER + ":" + API.Port + "/updateAlarmDelay",
            "method": "POST",
            "headers": {
                "content-type": "application/json"
            },
            "processData": false,
            "data": data
        }

        $.ajax(settings).done(function (response) {
            if (response.Code = 1) {

                document.getElementById('editAlarmButton').innerHTML = 'DELAY SAVED';
                helpers.bringCollector(deviceData[deviceId].Name);
                $('#editSignalButton').addClass('content-disabled');

            } else {
                document.getElementById('editAlarmButton').innerHTML = 'Limit change failed!';
            }
        });

        if (STANDBY_SERVER != ACTIVE_SERVER) {
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": STANDBY_SERVER + ":" + API.Port + "/updateAlarmDelay",
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
        }

    },
    inhibitUpdateTriggered: function (alarm) {

        let colorAdd = null;
        let colorRemove = null;

        let warningOff = 'secondary';
        let warningOn = 'warning2 ';
        let alarmOff =  'secondary';
        let alarmOn = 'danger ';

        if (alarm.alarmTriggered == 1) {

            switch (alarm.alarmType) {
                case 0:
                    colorAdd = alarmOn;
                    colorRemove = alarmOff;
                    break;
                case 1:
                    colorAdd = warningOn;
                    colorRemove = warningOff;
                    break;
            }

        } else {

            switch (alarm.alarmType) {
                case 0:
                    colorAdd = alarmOff;
                    colorRemove = alarmOn;
                    break;
                case 1:
                    colorAdd = warningOff;
                    colorRemove = warningOn;
                    break;
            }
        }

        $('#alarmType_' + alarm.alarmId).removeClass(colorRemove).addClass(colorAdd);

    }
};







