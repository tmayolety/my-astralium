var serviceBatteryIsolation, amsInsulation

var screen = {
    renderData: function (msg) {
    }
};

var InsulationLevelsRender = true;
var InsulationLevelsRenderDiv = document.getElementById('insulationLevels')
if (parseInt(InsulationLevelsRenderDiv.getAttribute('width')) > 0)
{
    var InsulationLevelsRender = false;
}

if (InsulationLevelsRender == true) {

    var ctxInsulationLevels = InsulationLevelsRenderDiv.getContext('2d');
    //INSULATION
    const insulationLevelsRefresh = chart => {
        const now = Date.now();
        insulationLevels.data.datasets.forEach(dataset => {
            var value = 0;
            switch (dataset.label)
            {
                case "Service Battery":
                    if (typeof valueEscalated[710] !== 'undefined') {
                        value = valueEscalated[710].value;
                    }
                    break;
                case "AMS insulation":
                    if (typeof valueEscalated[711] !== 'undefined') {
                        value = valueEscalated[711].value;
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
    const dataInsulation = {
        datasets: [
            {
                label: 'Service Battery',
                pointRadius: 0,
                borderWidth: 1.3,
                backgroundColor: 'rgba(75, 192, 192 ,0.3)',
                borderColor: 'rgb(75, 192, 192)',
                cubicInterpolationMode: 'monotone',
                data: []
            },
            {
                label: 'AMS insulation',
                pointRadius: 0,
                borderWidth: 1.3,
                backgroundColor: 'rgba(255, 205, 86, 0.3)',
                borderColor: 'rgb(255, 205, 86)',
                cubicInterpolationMode: 'monotone',
                data: []
            }
        ]
    };

    const insulationLevels = new Chart(ctxInsulationLevels, {
        type: 'line',
        data: dataInsulation,
        options: {
            plugins: {
                legend: {
                    display: true,
                },
                streaming: {
                    frameRate: 15
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
                        duration: 100000,
                        refresh: 2000,
                        delay: 3000,
                        onRefresh: insulationLevelsRefresh
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
                        text: 'Ohm'
                    },
                    stacked: false,
                    grid: {
                        display: true,
                        color: "rgba(66,66,66,1)"
                    },
                    min: 0,
                    max: 10000
                }
            },
            interaction: {
                intersect: false
            }
        }
    });


}





