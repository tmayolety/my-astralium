$.getScript( "js/tanks.js");
$("#FuelTanks_layout").load("src/ga/tanks/GO_fuelTank.svg");

var screen = {
    renderData: function (msg) {
        var json = JSONH.parse(msg);
        json.forEach(function (item) {
        });
    }
};


var FuelTotalRender = true;
var FuelTotalRenderDiv = document.getElementById('totalFuel')
if (!isNaN(parseInt(FuelTotalRenderDiv.getAttribute('width'))))
{
    var FuelTotalRender = false;
}
var FuelInterval

if (FuelTotalRender == true) {


    
        const dataFuel = {
            datasets: [
                {
                    label:'',
                    pointRadius: 0,
                    borderWidth: 1.3,
                    backgroundColor: 'rgba(235,208,132,0.2)',
                    borderColor: 'rgba(235,208,132,1)',
                    fill: true,
                    data: []
                }
            ]
        };
    
        const totalFuel = new Chart(FuelTotalRenderDiv, {
            type: 'line',
            data: dataFuel,
            options: {
                plugins: {
                    legend: {
                      display: false
                    }
                  },
                animation:{
                    duration:0
                },
                maintainAspectRatio : false,
                scales: {
                    x: {
                        type: "time",
                        time: {
                            unit: 'hour',
                            stepSize: 1, 
                            tooltipFormat: 'HH:mm',
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
                        min: parseInt(signalsData[90].SignalMin) + parseInt(signalsData[91].SignalMin),
                        max: 85000
                    }
                }
            }
        });

        getTimelineData(totalFuel, "-2d", "20m");
        FuelInterval = setInterval(()=> getTimelineData(totalFuel, "-2d", "20m"), 300000)

        document.getElementById('btn1Fuel').addEventListener('click', function () {
            clearInterval(FuelInterval)
            updateButtonClass(this);
            getTimelineData(totalFuel, "-12h", "5m");
            FuelInterval = setInterval(()=> getTimelineData(totalFuel, "-12h", "5m"), 300000)
        });
    
        document.getElementById('btn2Fuel').addEventListener('click', function () {
            clearInterval(FuelInterval)
            updateButtonClass(this);
            getTimelineData(totalFuel, "-24h", "10m");
            FuelInterval = setInterval(()=> getTimelineData(totalFuel, "-24h", "10m"), 300000)
        });
    
        document.getElementById('btn3Fuel').addEventListener('click', function () {
            clearInterval(FuelInterval)
            updateButtonClass(this);
            getTimelineData(totalFuel, "-2d", "20m");
            FuelInterval = setInterval(()=> getTimelineData(totalFuel, "-2d", "20m"), 600000)
        });
    
        document.getElementById('btn4Fuel').addEventListener('click', function () {
            clearInterval(FuelInterval)
            updateButtonClass(this);
            getTimelineData(totalFuel, "-3d", "30m");
            FuelInterval = setInterval(()=> getTimelineData(totalFuel, "-3d", "30m"), 600000)
        });

        function updateButtonClass(clickedButton) {

            const isActive = clickedButton.classList.contains('active');
            if (isActive) {
                clickedButton.disabled = true;
                return;
            }
            document.querySelectorAll('.timeLineButtonFuel').forEach(function (button) {
                button.classList.remove('active');
                button.disabled = false;
            });
            clickedButton.classList.add('active');
        
        }

        function getTimelineData(chart, time, rate) {
            
            var data = JSON.stringify({
                "SignalId": [491, 455, 456, 205, 298, 297, 299, 300, 301, 206, 207],
                "Time": time,
                "Rate": rate
            });
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": ACTIVE_SERVER + ":" + API.Port +"/totalsBySignalId",
                "method": "POST",
                "headers": {
                    "content-type": "application/json",
                },
                "processData": false,
                "data": data
            }
            
            $.ajax(settings).done((response) => {
                    chart.data.datasets.forEach((dataset) => {
                        dataset.data = [];
                    });

                   if(response.length === 0){
                    drawNoData(chart);
                   }else{
                    response.forEach(function(entry, index) {
                        var isoDate = entry.Name;
                        var date = new Date(isoDate);
                        
                        var oldData = { x: date, y: Math.floor(entry.Value) };
    
                        chart.data.datasets.forEach((dataset) => {
                            dataset.data.push(oldData);
                        });
                    });
                  
                    chart.update('quiet');
                   }
            }).fail((jqXHR, textStatus, errorThrown)=>{
                drawNoData(chart);
                console.error("Request failed: " + textStatus + ", " + errorThrown);
                console.log("Response status: " + jqXHR.status);
                console.log("Response text: " + jqXHR.responseText);
            })
        }

        function drawNoData(chart) {
            setTimeout(() => {
              const ctx = chart.ctx;
              ctx.clearRect(0, 0, chart.width, chart.height);
              ctx.save();
              ctx.textAlign = "center";
              ctx.textBaseline = "middle";
              ctx.fillStyle = "rgb(255, 255, 255)";
              ctx.font = "25px Lato, sans-serif";
              ctx.fillText("NO DATA", chart.width / 2, chart.height / 2);
              ctx.restore();
            }, 100);
        }
}
