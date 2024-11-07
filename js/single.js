var screen = {
    renderData: function (msg) {

    }
};

var SingleInterval;
var totalSingle;

function buildTimeline() {

     if(totalSingle){
        totalSingle.destroy()
     }

    var SingleRender = true;

    var SingleRenderDiv = document.getElementById('singleLineGraph')

    if (parseInt(SingleRenderDiv.getAttribute('width')) > 0)
    {
        var SingleRender = false;
    }

    if (SingleRender == true) {

        const dataSingle = {
            datasets: [
                {
                    label: 'Shore Power Converter',
                    pointRadius: 0,
                    borderWidth: 1.3,
                    backgroundColor: 'rgba(60, 149, 150,0.2)',
                    borderColor: 'rgba(60, 149, 150,1)',
                    fill: false,
                    data: []
                },
                {
                    label: 'Port Generator',
                    pointRadius: 0,
                    borderWidth: 1.3,
                    backgroundColor: 'rgba(44, 127, 183,0.2)',
                    borderColor: 'rgba(44, 127, 183,1)',
                    fill: false,
                    data: []
                },
                {
                    label: 'Starboard Generator',
                    pointRadius: 0,
                    borderWidth: 1.3,
                    backgroundColor: 'rgba(195, 160, 71,0.2)',
                    borderColor: 'rgba(195, 160, 71,1)',
                    fill: false,
                    data: []
                }
            ]
        };
    
         totalSingle = new Chart(SingleRenderDiv, {
            type: 'line',
            data: dataSingle,
            options: {
                animation:{
                    duration: 0
                },
                maintainAspectRatio : false,
                scales: {
                    x: {
                        type: 'time',
                        time: {
                            unit: 'second',
                            tooltipFormat: 'HH:mm:ss',
                            displayFormats: {
                                second: 'HH:mm:ss',
                                minute: 'HH:mm',
                                hour: 'HH:mm'
                            }
                        },
                        ticks: {
                            major: {
                               enabled: true,
                            },
                            maxTicksLimit: 8
                        }
                    },
                    y: {
                        display: true,
                        beginAtZero: true,
                        min: 0,
                        max: 160
                    }
                }
            }
        });

        getTimelineData(totalSingle, "-1m", "1s");
        SingleInterval = setInterval(() => getTimelineData(totalSingle, "-1m", "2s"), 2000)

        document.getElementById('btn1SingleLine').addEventListener('click', function () {
            clearInterval(SingleInterval)
            updateButtonClass(this)
            getTimelineData(totalSingle, "-1m", "2s");
            SingleInterval = setInterval(() => getTimelineData(totalSingle, "-1m", "2s"), 2000)
        });
    
        document.getElementById('btn2SingleLine').addEventListener('click', function () {
            clearInterval(SingleInterval)
            updateButtonClass(this)
            getTimelineData(totalSingle, "-20m", "30s");
            SingleInterval = setInterval(() => getTimelineData(totalSingle, "-20m", "30s"), 30000)
        });
    
        document.getElementById('btn3SingleLine').addEventListener('click', function () {
            clearInterval(SingleInterval)
            updateButtonClass(this)
            getTimelineData(totalSingle, "-1h", "1m");
            SingleInterval = setInterval(() => getTimelineData(totalSingle, "-1h", "1m"), 60000)
        });
    
        document.getElementById('btn4SingleLine').addEventListener('click', function () {
            clearInterval(SingleInterval)
            updateButtonClass(this)
            getTimelineData(totalSingle, "-8h", "5m");
            SingleInterval = setInterval(() => getTimelineData(totalSingle, "-8h", "5m"), 300000)
        });

        function updateButtonClass(clickedButton) {
            const isActive = clickedButton.classList.contains('active');
            if (isActive) {
                clickedButton.disabled = true;
                return;
            }
            document.querySelectorAll('.timeLineButtonSingle').forEach(function (button) {
                button.classList.remove('active');
                button.disabled = false;
            });
            clickedButton.classList.add('active');
            
        }

        function getTimelineData(chart, time, rate) {
            
            var data = JSON.stringify({
                "SignalId": [2004, 2071, 4011, 4374],
                "Time": time,
                "Rate": rate
            });
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": ACTIVE_SERVER + ":" + API.Port +"/valuesBySignalId",
                "method": "POST",
                "headers": {
                    "content-type": "application/json",
                },
                "processData": false,
                "data": data
            }
            
            $.ajax(settings).done((response) => {
                    if (Array.isArray(chart.data.datasets)) {
                        chart.data.datasets.forEach((dataset) => {
                            if (dataset) {
                                dataset.data = [];
                            }
                        });
                    }

                    let combinedData = [];
                    if(response["2004"] && response["2071"]) {
                        response["2004"].forEach((item, index) => {
                            let sumValues = response["2071"][index] ? response["2071"][index].Value : 0;
                            combinedData.push({
                                x: item.Name,
                                y: item.Value + sumValues
                            });
                        });
                    }
        
                    chart.data.datasets[0].data = combinedData;
        
                    if(response["4011"]) {
                        chart.data.datasets[1].data = response["4011"].map(item => ({ x: item.Name, y: item.Value }));
                    }
        
                    if(response["4374"]) {
                        chart.data.datasets[2].data = response["4374"].map(item => ({ x: item.Name, y: item.Value }));
                    }
    
                    chart.update('quiet');
                
            }).fail((jqXHR, textStatus, errorThrown)=>{
                console.error("Request failed: " + textStatus + ", " + errorThrown);
                console.log("Response status: " + jqXHR.status);
                console.log("Response text: " + jqXHR.responseText);
            })
        }
    }
}

function openSingleModal() {
    $( '#fullscreenSingleline' ).toggleClass( 'fullscreen-med' );
    buildTimeline()
}

function closeSingleModal() {
    $( '#fullscreenSingleline' ).removeClass( 'fullscreen-med' )
    clearInterval(SingleInterval);
}










