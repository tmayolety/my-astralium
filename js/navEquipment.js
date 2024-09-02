
var DeepMinuteTimeout;
//var DeepTimelineInit = true
var DeepTotalRender = true;
var DeepTotalRenderDiv = document.getElementById("deepGraph");

if (!isNaN(parseInt(DeepTotalRenderDiv.getAttribute("width")))) {
  var DeepTotalRender = false;
}
var DeepInterval;

if (DeepTotalRender == true) {
  const dataDeep = {
    datasets: [
      {
        label: "Total Deep",
        pointRadius: 0,
        borderWidth: 1.3,
        backgroundColor: "rgba(52, 152, 219, 0.2)",
        borderColor: "rgba(52, 152, 219, 1)",
        fill: true,
        data: [],
      },
    ],
  };

  const totalDeep = new Chart(DeepTotalRenderDiv, {
    type: "line",
    data: dataDeep,
    options: {
      plugins: {
        legend: {
          display: false,
        },
      },
      animation: {
        duration: 0,
      },
      maintainAspectRatio: false,
      scales: {
        x: {
          type: "time",
          time: {
            unit: "hour",
            stepSize: 1,
            tooltipFormat: "HH:mm",
            displayFormats: {
              second: "HH:mm:ss",
              minute: "HH:mm",
              hour: "HH:mm",
            },
          },
          ticks: {
            major: {
              enabled: true,
            },
            maxTicksLimit: 8,
          },
        },
        y: {
          display: true,
          beginAtZero: true,
          min:
            parseInt(signalsData[453].SignalMin) +
            parseInt(signalsData[454].SignalMin),
          max: 85000,
        },
      },
    },
  });

  getTimelineData(totalDeep, "-1m", "1s");
  DeepInterval = setInterval(
    () => getTimelineData(totalDeep, "-1m", "1s"),
    300000
  );

  document
    .getElementById("btn1DeepTanks")
    .addEventListener("click", function () {
      clearInterval(DeepInterval);
      updateButtonClass(this);
      getTimelineData(totalDeep, "-12h", "5m");
      DeepInterval = setInterval(
        () => getTimelineData(totalDeep, "-12h", "5m"),
        300000
      );
    });

  document
    .getElementById("btn2DeepTanks")
    .addEventListener("click", function () {
      clearInterval(DeepInterval);
      updateButtonClass(this);
      getTimelineData(totalDeep, "-24h", "10m");
      DeepInterval = setInterval(
        () => getTimelineData(totalDeep, "-24h", "10m"),
        300000
      );
    });

  document
    .getElementById("btn3DeepTanks")
    .addEventListener("click", function () {
      clearInterval(DeepInterval);
      updateButtonClass(this);
      getTimelineData(totalDeep, "-2d", "20m");
      DeepInterval = setInterval(
        () => getTimelineData(totalDeep, "-2d", "20m"),
        300000
      );
    });

  document
    .getElementById("btn4DeepTanks")
    .addEventListener("click", function () {
      clearInterval(DeepInterval);
      updateButtonClass(this);
      getTimelineData(totalDeep, "-3d", "30m");
      DeepInterval = setInterval(
        () => getTimelineData(totalDeep, "-3d", "30m"),
        600000
      );
    });

  function updateButtonClass(clickedButton) {
    const isActive = clickedButton.classList.contains("active");
    if (isActive) {
      clickedButton.disabled = true;
      return;
    }
    document
      .querySelectorAll(".timeLineButtonDeepTanks")
      .forEach(function (button) {
        button.classList.remove("active");
        button.disabled = false;
      });
    clickedButton.classList.add("active");
  }

  function getTimelineData(chart, time, rate) {
    var data = JSON.stringify({
      SignalId: [453, 454],
      Time: time,
      Rate: rate,
    });
    var settings = {
      async: true,
      crossDomain: true,
      url: ACTIVE_SERVER + ":" + API.Port + "/totalsBySignalId",
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      processData: false,
      data: data,
    };

    $.ajax(settings)
      .done((response) => {
        chart.data.datasets.forEach((dataset) => {
          dataset.data = [];
        });

        if (response.length === 0) {
          drawNoData(chart);
        } else {
          response.forEach(function (entry) {
            var isoDate = entry.Name;
            var date = new Date(isoDate);
            var oldData = { x: date, y: Math.floor(entry.Value) };
            chart.data.datasets.forEach((dataset) => {
              dataset.data.push(oldData);
            });
          });
          chart.update("quiet");
        }
      })
      .fail((jqXHR, textStatus, errorThrown) => {
        drawNoData(chart);
        console.error("Request failed: " + textStatus + ", " + errorThrown);
        console.log("Response status: " + jqXHR.status);
        console.log("Response text: " + jqXHR.responseText);
      });
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
