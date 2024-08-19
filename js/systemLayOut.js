var dauHealthSignal = [30070, 30077, 30086, 30093, 30107, 30123, 30137, 30150, 30156, 30162];
var deviceHealthSignal = [ 30034, 30035, 30021, 30032, 30033,150,30031,30029,30030,30028,30024,30025,30026,30027,30022,30023,30038,30041,30040,30039,30037,30036];
var screen = {
    renderData: function (msg) {
        var json = JSONH.parse(msg);
        json.forEach(function (item) {
            screen.highlightLineDau(item);
        });
    },
    highlightLineDau: function(item){
        if(dauHealthSignal.includes(item.signalId)){
            switch (parseInt(item.raw)) {
                case 0:
                    this.faultyCommunicationDAU(item);
                    break;
                case 1:
                    this.healthyCommunicationDAU(item);
                    break;
            }
        }
        if(deviceHealthSignal.includes(item.signalId)){
            switch (parseInt(item.raw)) {
                case 0:
                    this.faultyCommunicationDevice(item);
                    break;
                case 1:
                    this.healthyCommunicationDevice(item);
                    break;
            }
        }
    },
    faultyCommunicationDAU: function(item){
        $('#cable_in_' + item.signalId).removeClass('active');
        $('#cable_out_' + item.signalId).removeClass('active');
        $('#header_dau_' + item.signalId).removeClass('color-bg-type-primary');
    },
    healthyCommunicationDAU: function (item){
        $('#cable_in_' + item.signalId).addClass('active');
        $('#cable_out_' + item.signalId).addClass('active');
        $('#header_dau_' + item.signalId).addClass('color-bg-type-primary');
    },
    faultyCommunicationDevice: function(item){
        $('#device_line_' + item.signalId).removeClass('active');
        $('#header_device_' + item.signalId).removeClass('active');
        $('#header_device_' + item.signalId).removeClass('color-bg-type-primary');
    },
    healthyCommunicationDevice: function(item){
        $('#device_line_' + item.signalId).addClass('active');
        $('#header_device_' + item.signalId).addClass('active');
        $('#header_device_' + item.signalId).addClass('color-bg-type-primary');
    }
}

//color-bg-type-primary//
