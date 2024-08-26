$.getScript("js/tanks.js");

$("#WaterTanks_layout").load("src/ga/tanks/GO_waterTanks.svg");
var screen = {
  renderData: function (msg) {
      var json = JSONH.parse(msg);
      json.forEach(function (item) {
      });
  }
};

var WaterMinuteTimeout; 
//var WaterTimelineInit = true
var WaterTotalRender = true;
var WaterTotalRenderDiv = document.getElementById('totalWater')

if (!isNaN(parseInt(WaterTotalRenderDiv.getAttribute('width')))){
  var WaterTotalRender = false;
}
var WaterInterval;


if (WaterTotalRender == true) {
  
    const dataWater = {
          datasets: [
              {
                  label: 'Total Water',
                  pointRadius: 0,
                  borderWidth: 1.3,
                  backgroundColor: 'rgba(52, 152, 219, 0.2)',
                  borderColor: 'rgba(52, 152, 219, 1)',
                  fill: true,
                  data: []
              }
          ]
    };
  
    const totalWater = new Chart(WaterTotalRenderDiv, {
          type: 'line',
          data: dataWater,
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
                      min: parseInt(signalsData[453].SignalMin) + parseInt(signalsData[454].SignalMin),
                      max: 85000
                  }
              }
          }
         
    });

    getTimelineData(totalWater, "-2d", "20m");
    WaterInterval = setInterval(()=> getTimelineData(totalWater, "-2d", "20m"), 300000)
     
    document.getElementById('btn1WaterTanks').addEventListener('click', function () {
          clearInterval(WaterInterval)
          updateButtonClass(this);
          getTimelineData(totalWater, "-12h", "5m");
          WaterInterval = setInterval(()=> getTimelineData(totalWater, "-12h", "5m"), 300000)
    });

    document.getElementById('btn2WaterTanks').addEventListener('click', function () {
          clearInterval(WaterInterval)
          updateButtonClass(this);
          getTimelineData(totalWater, "-24h", "10m");
          WaterInterval = setInterval(()=> getTimelineData(totalWater, "-24h", "10m"), 300000)
    });

    document.getElementById('btn3WaterTanks').addEventListener('click', function () {
        clearInterval(WaterInterval)
        updateButtonClass(this);
        getTimelineData(totalWater, "-2d", "20m");
        WaterInterval = setInterval(()=> getTimelineData(totalWater, "-2d", "20m"), 300000)
    });

    document.getElementById('btn4WaterTanks').addEventListener('click', function () {
        clearInterval(WaterInterval)
        updateButtonClass(this);
        getTimelineData(totalWater, "-3d", "30m");
        WaterInterval = setInterval(()=> getTimelineData(totalWater, "-3d", "30m"), 600000)
    });

    function updateButtonClass(clickedButton) {

          const isActive = clickedButton.classList.contains('active');
          if (isActive) {
              clickedButton.disabled = true;
              return;
          }
          document.querySelectorAll('.timeLineButtonWaterTanks').forEach(function (button) {
              button.classList.remove('active');
              button.disabled = false;
          });
          clickedButton.classList.add('active');
      
    }

    function getTimelineData(chart, time, rate) {
            
        var data = JSON.stringify({
            "SignalId": [453, 454],
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
               
                response.forEach(function(entry, index) {
                    var isoDate = entry.Name;
                    var date = new Date(isoDate);
                    
                    var oldData = { x: date, y: Math.floor(entry.Value) };

                    chart.data.datasets.forEach((dataset) => {
                        dataset.data.push(oldData);
                    });
                });
                chart.update('quiet');
            
        }).fail((jqXHR, textStatus, errorThrown)=>{
            console.error("Request failed: " + textStatus + ", " + errorThrown);
            console.log("Response status: " + jqXHR.status);
            console.log("Response text: " + jqXHR.responseText);
        })
    }
}
