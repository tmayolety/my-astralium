var signalsToDisplay = [691, 30047, 30048, 30049, 30050, 30051, 30052, 30053 ];

var screen = {
    renderData: function (msg) {
        var json = JSONH.parse(msg);
        json.forEach(function (item) {

            if (section == "settings1") {

                if (signalsToDisplay.includes(item.signalId)) {
                    settings1.signalsBuild(item);
                }

            }

        });
    }
};

var settings1 = {
    signalsBuild: function (item) {


        if (item.raw == 0) {
            $('#SetIconAlarm_' + item.signalId).removeClass('color-fill-type-danger glow');
            $('#SetIconAlarm_' + item.signalId).addClass('color-fill-type-secondary');
            $('#Set1MuteIconAlarm_' + item.signalId).removeClass('color-fill-type-danger glow');
            $('#Set1MuteIconAlarm_' + item.signalId).addClass('color-fill-type-secondary');
        }

        if (item.raw == 1) {
            $('#SetIconAlarm_' + item.signalId).removeClass('color-fill-type-secondary glow');
            $('#SetIconAlarm_' + item.signalId).addClass('color-fill-type-danger glow');
            $('#Set1MuteIconAlarm_' + item.signalId).removeClass('color-fill-type-secondary glow');
            $('#Set1MuteIconAlarm_' + item.signalId).addClass('color-fill-type-danger glow');
        }
    },
    muteAlarmPanelButtons: function () {

        $( ".dev-muteAlarmPanelButtons" ).unbind().click(function() {

            $(this).addClass('active');

            var device = $(this).attr('data-device');
            var address = $(this).attr('data-address');
            var value = $(this).attr('data-valueToWrite');
            var id = $(this).attr('data-id');

            if (!helpers.writteValue(device, address, 1, id, 0)) {
            }
            var button = $(this);
            setTimeout(function(){
                helpers.writteValue(device, address, 0, id, 0);
                $(button).removeClass('active');
            }, 5000);

        });
    },
    schemeSelector: function (obj) {

        var scheme = $(obj).data('scheme');


        $('.schemeSelector').removeClass('active');
        $(obj).addClass('active');
        $('#schemeSelector').attr('data-scheme', 'scheme' + scheme);

    }


}
settings1.muteAlarmPanelButtons();


