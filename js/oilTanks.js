$.getScript("js/tanks.js");

$("#WasteTanks_layout").load("src/ga/Black/Astralium-tanks.svg");

//var totalWasteId, WasteTotal
var screen = {
    renderData: function (msg) {
    }
};

var WasteTotalRender = true;
var WasteTotalRenderDiv = document.getElementById('totalWaste')

if (!isNaN(parseInt(WasteTotalRenderDiv.getAttribute('width')))){
  var WasteTotalRender = false;
}

var WasteInterval

if (WasteTotalRender == true) {

    const dataWaste = {
          datasets: [
              {
                  label: 'Total Waste',
                  pointRadius: 0,
                  borderWidth: 1.3,
                  backgroundColor: 'rgba(167, 176, 177, 0.5)',
                  borderColor: 'rgba(167, 176, 177, 1)',
                  fill: true,
                  data: []
              }
          ]
    };
  
    const totalWaste = new Chart(WasteTotalRenderDiv, {
          type: 'line',
          data: dataWaste,
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

    getTimelineData(totalWaste, "-2d", "20m");
    WasteInterval = setInterval(()=> getTimelineData(totalWaste, "-2d", "20m"), 300000)
     
    document.getElementById('btn1WasteTanks').addEventListener('click', function () {
        clearInterval(WasteInterval)
        updateButtonClass(this);
        getTimelineData(totalWaste, "-12h", "5m");
        WasteInterval = setInterval(()=> getTimelineData(totalWaste, "-12h", "5m"), 300000)
    });

    document.getElementById('btn2WasteTanks').addEventListener('click', function () {
        clearInterval(WasteInterval)
        updateButtonClass(this);
        getTimelineData(totalWaste, "-24h", "10m");
        WasteInterval = setInterval(()=> getTimelineData(totalWaste, "-24h", "10m"), 300000)
    });

    document.getElementById('btn3WasteTanks').addEventListener('click', function () {
        clearInterval(WasteInterval)
        updateButtonClass(this);
        getTimelineData(totalWaste, "-2d", "20m");
        WasteInterval = setInterval(()=> getTimelineData(totalWaste, "-2d", "20m"), 300000)
    });

    document.getElementById('btn4WasteTanks').addEventListener('click', function () {
        clearInterval(WasteInterval)
        updateButtonClass(this);
        getTimelineData(totalWaste, "-3d", "30m");
        WasteInterval = setInterval(()=> getTimelineData(totalWaste, "-3d", "30m"), 600000)
    });

    function updateButtonClass(clickedButton) {

          const isActive = clickedButton.classList.contains('active');
          if (isActive) {
              clickedButton.disabled = true;
              return;
          }
          document.querySelectorAll('.timeLineButtonWasteTanks').forEach(function (button) {
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
          const htmlElement = document.getElementById('schemeSelector');
          const scheme = htmlElement.getAttribute('data-scheme');
      
          if (scheme === 'scheme1') {
            ctx.fillStyle = "rgb(255, 255, 255)";
          } else if (scheme === 'scheme2') {
            ctx.fillStyle = "rgb(0, 0, 0)";
          }
      
          ctx.clearRect(0, 0, chart.width, chart.height);
          ctx.save();
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.font = "25px Lato, sans-serif";
          ctx.fillText("NO DATA", chart.width / 2, chart.height / 2);
          ctx.restore();
        }, 100);
      }

}

//1280x800 Resolution

var WasteTotalRenderMini = true;
var WasteTotalRenderDivMini = document.getElementById('totalWasteMini')

if (!isNaN(parseInt(WasteTotalRenderDivMini.getAttribute('width')))){
  var WasteTotalRenderMini = false;
}

var WasteIntervalMini

if (WasteTotalRenderMini == true) {

    const dataWaste = {
          datasets: [
              {
                  label: 'Total Waste',
                  pointRadius: 0,
                  borderWidth: 1.3,
                  backgroundColor: 'rgba(167, 176, 177, 0.5)',
                  borderColor: 'rgba(167, 176, 177, 1)',
                  fill: true,
                  data: []
              }
          ]
    };
  
    const totalWasteMini = new Chart(WasteTotalRenderDivMini, {
          type: 'line',
          data: dataWaste,
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

    getTimelineData(totalWasteMini, "-2d", "20m");
    WasteIntervalMini = setInterval(()=> getTimelineData(totalWasteMini, "-2d", "20m"), 300000)
     
    document.getElementById('btn1WasteTanksMini').addEventListener('click', function () {
        clearInterval(WasteIntervalMini)
        updateButtonClass(this);
        getTimelineData(totalWasteMini, "-12h", "5m");
        WasteIntervalMini = setInterval(()=> getTimelineData(totalWaste, "-12h", "5m"), 300000)
    });

    document.getElementById('btn2WasteTanksMini').addEventListener('click', function () {
        clearInterval(WasteIntervalMini)
        updateButtonClass(this);
        getTimelineData(totalWasteMini, "-24h", "10m");
        WasteIntervalMini = setInterval(()=> getTimelineData(totalWasteMini, "-24h", "10m"), 300000)
    });

    document.getElementById('btn3WasteTanksMini').addEventListener('click', function () {
        clearInterval(WasteIntervalMini)
        updateButtonClass(this);
        getTimelineData(totalWasteMini, "-2d", "20m");
        WasteIntervalMini = setInterval(()=> getTimelineData(totalWasteMini, "-2d", "20m"), 300000)
    });

    document.getElementById('btn4WasteTanksMini').addEventListener('click', function () {
        clearInterval(WasteIntervalMini)
        updateButtonClass(this);
        getTimelineData(totalWasteMini, "-3d", "30m");
        WasteIntervalMini = setInterval(()=> getTimelineData(totalWasteMini, "-3d", "30m"), 600000)
    });

    function updateButtonClass(clickedButton) {

          const isActive = clickedButton.classList.contains('active');
          if (isActive) {
              clickedButton.disabled = true;
              return;
          }
          document.querySelectorAll('.timeLineButtonWasteTanks').forEach(function (button) {
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
          const htmlElement = document.getElementById('schemeSelector');
          const scheme = htmlElement.getAttribute('data-scheme');
      
          if (scheme === 'scheme1') {
            ctx.fillStyle = "rgb(255, 255, 255)";
          } else if (scheme === 'scheme2') {
            ctx.fillStyle = "rgb(0, 0, 0)";
          }
      
          ctx.clearRect(0, 0, chart.width, chart.height);
          ctx.save();
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.font = "25px Lato, sans-serif";
          ctx.fillText("NO DATA", chart.width / 2, chart.height / 2);
          ctx.restore();
        }, 100);
      }

}


