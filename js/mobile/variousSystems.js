var screen = {
    renderData: function (msg) {
        var json = JSONH.parse(msg);
        json.forEach(function (item) {

            let builder = new Builder(item);
            builder.sendToBuilder;

        });
    }
};