
var DeepSecondTimeout;
var DeepMinuteTimeout;
var DeepTimelineInit = true
var DeepTimeoutLessThanMinute = true

var DeepTotalRender = true;
var DeepTotalRenderDiv = document.getElementById('deepGraph')
if (!isNaN(parseInt(DeepTotalRenderDiv.getAttribute('width'))))
{
  var DeepTotalRender = false;
}
var maxTimeNavigation;

function updateMaxTime(newMaxTime){
  maxTimeNavigation = newMaxTime
}

if (DeepTotalRender == true) {

  function addData(chart) {

      const now = new Date();
      var newValue;

      if(typeof valueEscalated[12027]?.value != 'undefined'){
        newValue = parseInt(valueEscalated[12027].value);
      }
       
      const newData = {x: now, y: newValue}
  
      chart.data.datasets.forEach((dataset) => {
          dataset.data.push(newData);
      });
  
      const minTime = now - maxTimeNavigation; 
      chart.options.scales.x.max = now;
      chart.options.scales.x.min = minTime;
      chart.options.scales.x.ticks.maxTicksLimit = 8; 
      
      chart.update('none');


      if(DeepTimelineInit == true){
        setTimeout(() => addData(chart), 1000)
        DeepTimelineInit = false
    }else{
        if(DeepTimeoutLessThanMinute == true){
            DeepSecondTimeout = setTimeout(() => addData(chart), 1000)
        } else{
            DeepMinuteTimeout = setTimeout(() => addData(chart), 60000)
        }
        
    }

      }
  
      const dataDeep = {
          datasets: [
              {
                  label: 'Depth',
                  pointRadius: 0,
                  borderWidth: 1.3,
                  backgroundColor: 'rgba(52, 152, 219, 0.2)',
                  borderColor: 'rgba(52, 152, 219, 1)',
                  fill: true,
                  data: []
              }
          ]
      };
  
      const totalDeep = new Chart(DeepTotalRenderDiv, {
          type: 'line',
          data: dataDeep,
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
                        unit: 'second',
                        stepSize: 1, 
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
                    }
                  },
                  y: {
                      display: true,
                      beginAtZero: true,
                      min: 0,
                      max: 500
                  }
              }
          }
      });
      addData(totalDeep)
      updateMaxTime(59 * 1000);
      getTimelineData(totalDeep, "-1m", "1s");

      document.getElementById('btn1DeepTanks').addEventListener('click', function () {
          clearTimeout(DeepSecondTimeout)
          DeepTimelineInit = true
          DeepTimeoutLessThanMinute = true
          clearTimeout(DeepMinuteTimeout)
          addData(totalDeep)

          updateMaxTime(59 * 1000); // 1m
          updateButtonClass(this);
          getTimelineData(totalDeep, "-1m", "1s");
      });

      document.getElementById('btn2DeepTanks').addEventListener('click', function () {
        clearTimeout(DeepSecondTimeout)
        DeepTimelineInit = true
        DeepTimeoutLessThanMinute = true
        clearTimeout(DeepMinuteTimeout)
        addData(totalDeep)

          updateMaxTime(20 * 59 * 1000); // 20m
          updateButtonClass(this);
          getTimelineData(totalDeep, "-20m", "30s");
      });

      document.getElementById('btn3DeepTanks').addEventListener('click', function () {
        clearTimeout(DeepSecondTimeout)
        DeepTimelineInit = true
        DeepTimeoutLessThanMinute = false
        clearTimeout(DeepMinuteTimeout)
        addData(totalDeep)

        updateMaxTime(60 * 59 * 1000); // 1H
        updateButtonClass(this);
        getTimelineData(totalDeep, "-1h", "1m");
    });

    document.getElementById('btn4DeepTanks').addEventListener('click', function () {
        clearTimeout(DeepSecondTimeout)
        DeepTimelineInit = true
        DeepTimeoutLessThanMinute = false
        clearTimeout(DeepMinuteTimeout)
        addData(totalDeep)

        updateMaxTime(8 * 59 * 60 * 1000); // 8H
        updateButtonClass(this);
        getTimelineData(totalDeep, "-8h", "5m");
    });

      function updateButtonClass(clickedButton) {

          const isActive = clickedButton.classList.contains('active');
          if (isActive) {
              clickedButton.disabled = true;
              return;
          }
          document.querySelectorAll('.timeLineButtonDeepTanks').forEach(function (button) {
              button.classList.remove('active');
              button.disabled = false;
          });
          clickedButton.classList.add('active');
      
      }

      function getTimelineData(chart, time, rate) {
            
        var data = JSON.stringify({
            "SignalId": [12027],
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
