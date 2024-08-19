var screen = {
    renderData: function (msg) {
    }
};

$( ".dev-writeButton" ).unbind().click(function() {

    var writeSignalId = $(this).attr('data-writeSignalId');
    var valueToWrite = $(this).attr('data-valueToWrite');
    var writeMode = $(this).attr('data-writeMode');
    if (!helpers.writteValue(writeSignalId, valueToWrite, writeMode)) {
        //alert('FAIL');
    }
});


var JacuzziRender = true;
var JacuzziRenderDiv = document.getElementById('jacuzziTemp')
if (parseInt(JacuzziRenderDiv.getAttribute('width')) > 0)
{
    var JacuzziRender = false;
}


if (JacuzziRender == true) {

    var ctxJacuzzi = JacuzziRenderDiv.getContext('2d');
    //INSULATION
    const jacuzziRefresh = chart => {
        const now = Date.now();
        jacuzzi.data.datasets.forEach(dataset => {
            var value = 0;
            switch (dataset.label)
            {
                case "Jacuzzi Temperature":
                    if (typeof valueEscalated[17533]?.value !== 'undefined') {
                        value = valueEscalated[17533].value;
                    }
                    break;
            }

            dataset.data.push({
                x: now,
                y: value
            });
            chart.update('quiet');
        });
    }
    const dataJacuzzi = {
        datasets: [
            {
                label: 'Jacuzzi Temperature',
                pointRadius: 0,
                borderWidth: 1.3,
                backgroundColor: 'rgba(75, 192, 192 ,0.3)',
                borderColor: 'rgb(75, 192, 192)',
                cubicInterpolationMode: 'monotone',
                data: []
            }
        ]
    };

    const jacuzzi = new Chart(ctxJacuzzi, {
        type: 'line',
        data: dataJacuzzi,
        options: {
            plugins: {
                legend: {
                    display: false,
                },
                streaming: {
                    frameRate: 5
                }
            },
            maintainAspectRatio: false,
            scales: {
                ticks: {
                    display: false
                },

                x: {
                    type: 'realtime',
                    realtime: {
                        duration: 6000000,
                        refresh: 2000,
                        delay: 3000,
                        onRefresh: jacuzziRefresh
                    },
                    stacked: true,
                    grid: {
                        display: true,
                        color: "rgba(66,66,66,1)"
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Cº'
                    },
                    stacked: false,
                    grid: {
                        display: true,
                        color: "rgba(66,66,66,1)"
                    },
                    min: 0,
                    max: 60
                }
            },
            interaction: {
                intersect: false
            }
        }
    });


}




