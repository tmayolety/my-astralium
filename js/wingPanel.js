var devicesToDisplay = [9,10];
var signalsToDisplay = [8005,8016];
var signalsToDisplayNOAlarms = [8003,8014];
var locationToDisplay = [8002,8013];
var barSignals =[ 8007, 8018 ];
var screen = {
    renderData: function (msg) {
        var json = JSONH.parse(msg);
        json.forEach(function (item) {

            if (signalsToDisplay.includes(item.signalId)) {
                wingPanel.gaugesBuild(item);

            }  if (locationToDisplay.includes(item.signalId)) {

                wingPanel.locationSignalsBuild(item);

            }  if (signalsToDisplayNOAlarms.includes(item.signalId)) {

                wingPanel.digitalSignalsBuild(item);

            }  else if (barSignals.includes(item.signalId)) {

                var ahead = false;
                if ( Number(item.escalatedValue) <= 600 ) {
                    var value = parseInt(item.escalatedValue);
                    var ahead = true;
                } else {
                    var value = parseInt(item.escalatedValue) - 600;
                    var ahead = false;
                }

                if (ahead) {

                    point = eval('chartShaftLeft_'+item.signalId+'.series[0].points[0]');
                    point.update(0);

                    point = eval('chartShaftRight_'+item.signalId+'.series[0].points[0]');
                    point.update(parseInt(value));

                } else {

                    point = eval('chartShaftRight_'+item.signalId+'.series[0].points[0]');
                    point.update(0);

                    point = eval('chartShaftLeft_'+item.signalId+'.series[0].points[0]');
                    point.update(parseInt(value));
                }


                $('#shaftValue2_' + item.signalId).html(value);
            }

        });
    }
};

var wingPanel = {
    gaugesBuild: function (item) {

        point = eval('chartGauge_'+item.signalId+'.series[0].points[0]');
        point.update(parseInt(item.escalatedValue));
    },
    digitalSignalsBuild: function (item) {

        switch (item.raw) {
            case 1:
                $('#throttlePositionName_' + item.signalId).addClass('color-text-type-success-light');
                $('#throttlePositionName_' + item.signalId).removeClass('color-text-type-dark');
                $('#throttlePositionName_' + item.signalId).removeClass('color-text-type-danger-light');
                $('#throttlePositionName_' + item.signalId).html('Neutral');

                $('#throttlePositionNeutral_' + item.signalId).addClass('success');
                $('#throttlePositionAstern_' + item.signalId).removeClass('danger');
                $('#throttlePositionAhead_' + item.signalId).removeClass('danger');

                break;

            case 2:
                $('#throttlePositionName_' + item.signalId).addClass('color-text-type-danger-light');
                $('#throttlePositionName_' + item.signalId).removeClass('color-text-type-dark');
                $('#throttlePositionName_' + item.signalId).removeClass('color-text-type-success-light');
                $('#throttlePositionName_' + item.signalId).html('Astern');

                $('#throttlePositionAstern_' + item.signalId).addClass('danger');
                $('#throttlePositionNeutral_' + item.signalId).removeClass('success');
                $('#throttlePositionAhead_' + item.signalId).removeClass('danger');
                break;

            case 4:
                $('#throttlePositionName_' + item.signalId).addClass('color-text-type-danger-light');
                $('#throttlePositionName_' + item.signalId).removeClass('color-text-type-dark');
                $('#throttlePositionName_' + item.signalId).removeClass('color-text-type-success-light');
                $('#throttlePositionName_' + item.signalId).html('Ahead');

                $('#throttlePositionAhead_' + item.signalId).addClass('danger');
                $('#throttlePositionNeutral_' + item.signalId).removeClass('success');
                $('#throttlePositionAstern_' + item.signalId).removeClass('danger');
                break;

            case 0:
            case 3:
            default:
                $('#throttlePositionName_' + item.signalId).addClass('color-text-type-dark ');
                $('#throttlePositionName_' + item.signalId).removeClass('color-text-type-primary');
                $('#throttlePositionName_' + item.signalId).removeClass('color-text-type-success-light');
                $('#throttlePositionName_' + item.signalId).addClass('color-text-type-danger-light');
                $('#throttlePositionName_' + item.signalId).html('N/C');

                $('#throttlePositionAhead_' + item.signalId).removeClass('danger');
                $('#throttlePositionNeutral_' + item.signalId).removeClass('success');
                $('#throttlePositionAstern_' + item.signalId).removeClass('danger');

                break;
        }
    },
        locationSignalsBuild: function (item) {

            switch (item.raw) {
                case 0:

                    $('#wingsLocation_' + item.signalId).html('Bridge Station');

                    break;

                case 1:

                    $('#wingsLocation_' + item.signalId).html('Port Wing Station');
                    break;

                case 2:

                    $('#wingsLocation_' + item.signalId).html('Stbd Wing Station');
                    break;
                case 6:

                    $('#wingsLocation_' + item.signalId).html('Local Station');
                    break;

                default:

                    $('#wingsLocation_' + item.signalId).html('N/C');

                    break;
            }


    }

}