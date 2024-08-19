var screen = {
    renderData: function (msg) {
    }
};
$("#ValvesBilgeLayout_1").load("src/ga/valves/piece2.svg");
$("#ValvesBilgeLayout_2").load("src/ga/valves/piece1.svg");
$("#ValvesBilgeLayout_3").load("src/ga/valves/Bilge_fire_system_valve-SVG.svg");

$( ".dev-writeButton" ).unbind().click(function() {

    var writeSignalId = $(this).attr('data-writeSignalId');
    var valueToWrite = $(this).attr('data-valueToWrite');
    var writeMode = $(this).attr('data-writeMode');
    if (!helpers.writteValue(writeSignalId, valueToWrite, writeMode)) {
        //alert('FAIL');
    }
});