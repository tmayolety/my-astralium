var screen = {
    renderData: function (msg) {
    }
};


var events = {
    refreshEvents() {

        var query = {
            Section: "event",
            Limit: 50,
            Filter: 1
        }

        $.ajax({
            url: ACTIVE_SERVER + ":" + API.Port + "/systemLog",
            type: 'post',
            data: JSON.stringify(query)
        }).then(function(data) {
            $('#eventLogList').html('');
            var json = JSON.parse(data);
            events.printEventLog(json);
            events.firstPrintHeaderEvents(json);

            $('#eventLogList').prepend('<li class="thead" id="alarmLogListHeader">' +
                '<div class="col-170 align-middle-center"><span>Time (GMT)</span></div>' +
                '<div class="col-80 align-middle-center"><span>Event #</span></div>' +
                '<div class="col-270-min align-middle-center"><span>Event Description</span></div>' +
                '</li>');
        });
    },
    printEventLog(json) {
        if (json !== null) {
            json.forEach(function (item) {
                if (typeof (item) !== 'undefined') {
                    
                    if (!$("#eventLog_" + item.Id).length) {
                        if (item.ObjectId == null) {
                            item.ObjectId = item.alarmId;
                        }
                        $('#eventLogList').append('<li>' +
                            '<div class="col-170 align-middle-center"><span>' + item.Date + '</span></div>' +
                            '<div class="col-80 align-middle-center"><span>' + item.ObjectId + '</span></div>' +
                            '<div class="col-270-min align-middle-center"><span>' + alarmData[parseInt(item.ObjectId)].alarmDescription + '</span></div>' +
                            '</li>');

                    }
                }
            });
        }else{
            console.log("No hay eventos");
        }
    },
    printHeaderEvents: function (json) {
        if (json !== null) {
            if (typeof (json) !== 'undefined') {
                Object.values(json).forEach(function (item) {
                    if (item.ObjectId == null) {
                        item.ObjectId = item.alarmId;
                    }
                    $('#headerEvents').prepend('<li class="glow" >' +
                        '<div class="col-160 align-top-center font-bold">' + item.alarmTime + '</div>' +
                        '<div><span>' + alarmData[parseInt(item.ObjectId)].alarmDescription + '</span></div>' +
                        '</li>');

                    $('#headerEvents').children().last().remove();
                });
            }
        }
    },
    updateEventsList: function (json) {

        $('#eventLogList').children().first().remove();
        Object.values(json).forEach(function(item) {
            if (item.ObjectId == null){ item.ObjectId = item.alarmId; }
            $('#eventLogList').prepend('<li>' +
                '<div class="col-170 align-middle-center"><span>' + item.alarmTime + '</span></div>' +
                '<div class="col-80 align-middle-center"><span>'+ item.alarmId + '</span></div>' +
                '<div class="col-270-min align-middle-center"><span>' + alarmData[parseInt(item.ObjectId)].alarmDescription + '</span></div>' +
                '</li>');

            $('#eventLogList').children().last().remove();
        });
        $('#eventLogList').prepend('<li class="thead" id="alarmLogListHeader">' +
            '<div class="col-170 align-middle-center"><span>Time (GMT)</span></div>' +
            '<div class="col-80 align-middle-center"><span>Event #</span></div>' +
            '<div class="col-270-min align-middle-center"><span>Event Description</span></div>' +
            '</li>');
    },
    firstPrintHeaderEvents: function (json) {
        var count = 0;
        if (json !== null) {
            Object.values(json).forEach(function (item) {
                if (count < 15) {
                    if (item.ObjectId == null) {
                        item.ObjectId = item.alarmId;
                    }
                    $('#headerEvents').append('<li class="glow" >' +
                        '<div class="col-160 align-top-center font-bold">' + item.Date + '</div>' +
                        '<div><span>' + alarmData[parseInt(item.ObjectId)].alarmDescription + '</span></div>' +
                        '</li>');
                    count = count + 1;
                }
            });
        }
    }
};
