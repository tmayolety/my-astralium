$.getScript( "js/tanks.js");
$("#OilTanks_layout").load("src/ga/tanks/GO_oilTanks.svg");
var screen = {
    renderData: function (msg) {
        var json = JSONH.parse(msg);
        json.forEach(function (item) {
        });
    }
};


var OilMinuteTimeout; 
var OilTimelineInit = true
var OilTotalRender = true;
var OilTotalRenderDiv = document.getElementById('totalOil')

if (!isNaN(parseInt(OilTotalRenderDiv.getAttribute('width')))){
  var OilTotalRender = false;
}

var OilInterval;

if (OilTotalRender == true) {

  
    const dataOil = {
          datasets: [
              {
                  label: 'Total Oil',
                  pointRadius: 0,
                  borderWidth: 1.3,
                  backgroundColor: 'rgba(235,208,132,0.5)',
                  borderColor: 'rgba(235,208,132,1)',
                  fill: true,
                  data: []
              }
          ]
    };
  
    const totalOil = new Chart(OilTotalRenderDiv, {
          type: 'line',
          data: dataOil,
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

    getTimelineData(totalOil, "-2d", "20m");
    OilInterval = setInterval(()=> getTimelineData(totalOil, "-2d", "20m"), 300000)
     
    document.getElementById('btn1OilTanks').addEventListener('click', function () {
        clearInterval(OilInterval)
        updateButtonClass(this);
        getTimelineData(totalOil, "-12h", "5m");
        OilInterval = setInterval(()=> getTimelineData(totalOil, "-12h", "5m"), 300000)
    });

    document.getElementById('btn2OilTanks').addEventListener('click', function () {
        clearInterval(OilInterval)
        updateButtonClass(this);
        getTimelineData(totalOil, "-24h", "10m");
        OilInterval = setInterval(()=> getTimelineData(totalOil, "-24h", "10m"), 300000)
    });

    document.getElementById('btn3OilTanks').addEventListener('click', function () {
        clearInterval(OilInterval)
        updateButtonClass(this);
        getTimelineData(totalOil, "-2d", "20m");
        OilInterval = setInterval(()=> getTimelineData(totalOil, "-2d", "20m"), 300000)
    });

    document.getElementById('btn4OilTanks').addEventListener('click', function () {
        clearInterval(OilInterval)
        updateButtonClass(this);
        getTimelineData(totalOil, "-3d", "30m");
        OilInterval = setInterval(()=> getTimelineData(totalOil, "-3d", "30m"), 600000)
    });

    function updateButtonClass(clickedButton) {

          const isActive = clickedButton.classList.contains('active');
          if (isActive) {
              clickedButton.disabled = true;
              return;
          }
          document.querySelectorAll('.timeLineButtonOilTanks').forEach(function (button) {
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
            "url": ACTIVE_SERVER + ":10001/totalsBySignalId",
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

