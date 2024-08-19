//const buildTimelineHome = (signalId) => {
//  buildTimeline(signalId);
//
//  $("#timeLinePopUp").addClass("open");
//};

//const destroyTimelineChart = () => {
//    const chartInstance = Chart.getChart("timeLineGraph");
//  
//    if (chartInstance) {
//      chartInstance.destroy();
//    }
//  };
//  
//  const closeTimeLineModal = () => {
//    destroyTimelineChart();
//    $("#timeLinePopUp").removeClass("open");
//  };
//  
//
//const buildTimeline = (ID) => {
//  var SingleRender = true;
//
//  $("#fullscreenTimeline").toggleClass("fullscreen-med");
//
//  var SingleRenderDiv = document.getElementById("timeLineGraph");
//
//  if (parseInt(SingleRenderDiv.getAttribute("width")) > 0) {
//    var SingleRender = false;
//  }
//
//  var maxTime = 60 * 1000; //DEFAULT MAXTIME 60 => 1Minute // 3600 => 1H  // 28800 => 8H // 86400 => 1Day //604800 => 1Week
//
//  function updateMaxTime(newMaxTime) {
//    maxTime = newMaxTime;
//  }
//
//  if (SingleRender == true) {
//    const addData = (chart) => {
//      const now = new Date();
//      const newValue = parseInt(valueRaw[ID].value)
//      console.log(newValue)
//      const newData = { x: now, y: newValue };
//
//      chart.data.datasets[0].data.push(newData);
//
//      const minTime = now - maxTime;
//      chart.options.scales.x.max = now; // axisX max (right part)
//      chart.options.scales.x.min = minTime; // axisX min (left part)
//      chart.options.scales.x.ticks.maxTicksLimit = 8; //Limits to show
//
//      chart.update("none");
//      setTimeout(() => addData(chart), 1000);
//    };
//
//    const dataSingle = {
//      datasets: [
//        {
//          label: "Shore Power Converter",
//          pointRadius: 0,
//          borderWidth: 1.3,
//          backgroundColor: "rgba(235,208,132,0.5)",
//          borderColor: "rgba(235,208,132,1)",
//          fill: false,
//          data: [],
//        },
//      ],
//    };
//
//    const totalSingle = new Chart(SingleRenderDiv, {
//      type: "line",
//      data: dataSingle,
//      options: {
//        maintainAspectRatio: false,
//        scales: {
//          x: {
//            type: "time",
//            time: {
//              unit: "minute",
//              displayFormat: {
//                minute: "HH:mm",
//              },
//            },
//          },
//          y: {
//            display: true,
//            beginAtZero: true,
//            min: 0,
//            max: 1000,
//          },
//        },
//      },
//    });
//    addData(totalSingle);
//
//    document
//      .getElementById("btn1HTimeline")
//      .addEventListener("click", function () {
//        updateMaxTime(60 * 60 * 1000); // 1H
//        updateButtonClass(this);
//      });
//
//    document
//      .getElementById("btn4HTimeline")
//      .addEventListener("click", function () {
//        updateMaxTime(4 * 60 * 60 * 1000); // 4H
//        updateButtonClass(this);
//      });
//
//    document
//      .getElementById("btn8HTimeline")
//      .addEventListener("click", function () {
//        updateMaxTime(8 * 60 * 60 * 1000); // 8H
//        updateButtonClass(this);
//      });
//
//    document
//      .getElementById("btn24HTimeline")
//      .addEventListener("click", function () {
//        updateMaxTime(24 * 60 * 60 * 1000); // 24H
//        updateButtonClass(this);
//      });
//
//    function updateButtonClass(clickedButton) {
//      const isActive = clickedButton.classList.contains("active");
//      if (isActive) {
//        clickedButton.disabled = true;
//        return;
//      }
//      document.querySelectorAll(".timelineButton").forEach(function (button) {
//        button.classList.remove("active");
//        button.disabled = false;
//      });
//      clickedButton.classList.add("active");
//    }
//  }
//};
