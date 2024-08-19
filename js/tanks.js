var screen = {
    renderData: function (msg) {
    }
};

var tanks = {
    tankHighlight: function (nameClass, childrenPosition, object) {

        var directChildElement = $(nameClass).children().eq(childrenPosition);

        var tankChildElement = $(nameClass).find('.tankClass').eq(childrenPosition);

        object.css({ fill: '#3498db' });
        directChildElement.addClass('highlight');

        tankChildElement.addClass('highlight');

        setTimeout(function() {
            directChildElement.removeClass('highlight');
            tankChildElement.removeClass('highlight');
            object.css({ fill: '#111111' });
        }, 2500);
    }
};


