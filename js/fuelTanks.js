$.getScript("js/tanks.js");

$("#FuelTanks_layout").load("src/ga/Black/fuelTanks.svg", function() {
  const svg = document.querySelector("#FuelTanks_layout svg");
  const ns = "http://www.w3.org/2000/svg";

  const numbers = [
    { x: 220, y: 550, text: "1", index: 0 },
    { x: 725, y: 450, text: "2", index: 1 },
    { x: 725, y: 560, text: "3", index: 2 },
    { x: 1110, y: 500, text: "4", index: 3 },
    { x: 1110, y: 610, text: "5", index: 4 },
    { x: 1360, y: 550, text: "6", index: 5 },
    { x: 520, y: 380, text: "7", index: 6 },
    { x: 520, y: 730, text: "8", index: 7 },
  ];

  numbers.forEach(({ x, y, text, index }) => {
    const el = document.createElementNS(ns, "text");
    el.setAttribute("x", x);
    el.setAttribute("y", y);
    el.setAttribute("font-size", "48");
    el.setAttribute("class", "tank-label");
    el.setAttribute("font-family", "Arial");
    el.setAttribute("font-weight", "bold");
    el.setAttribute("style", "cursor: pointer;");
    el.textContent = text;

    // Añadir onclick que llama a tanks.tankHighlight
    el.addEventListener("click", function () {
      const tanksvg = $("#FuelTanks_layout svg");
      const tank = tanksvg.find("g[onclick]").eq(index); // encuentra el <g> correcto
      tanks.tankHighlight("#fuelTank", index, tank);
    });

    svg.appendChild(el);
  });
});

var screen = {
  renderData: function (msg) {
    var json = JSONH.parse(msg);
    json.forEach(function (item) {});
  },
};

var FuelTotalRender = true;
var FuelTotalRenderDiv = document.getElementById("totalFuel");
if (!isNaN(parseInt(FuelTotalRenderDiv.getAttribute("width")))) {
  var FuelTotalRender = false;
}
var FuelInterval;
{
let isFetchingFuel = false;

if (FuelTotalRender == true) {
  const dataFuel = {
    datasets: [
      {
        label: "",
        pointRadius: 0,
        borderWidth: 1.3,
        backgroundColor: "rgba(235,208,132,0.2)",
        borderColor: "rgba(235,208,132,1)",
        fill: true,
        data: [],
      },
    ],
  };

  const totalFuel = new Chart(FuelTotalRenderDiv, {
    type: "line",
    data: dataFuel,
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
          min: 0, 
          max: 29990,
        },
      },
    },
  });

  getTimelineData(totalFuel, "-2d", "20m");
  FuelInterval = setInterval(
    () => getTimelineData(totalFuel, "-2d", "20m"),
    300000
  );

  document.getElementById("btn1Fuel").addEventListener("click", function () {
    clearInterval(FuelInterval);
    updateButtonClass(this);
    getTimelineData(totalFuel, "-12h", "5m");
    FuelInterval = setInterval(
      () => getTimelineData(totalFuel, "-12h", "5m"),
      300000
    );
  });

  document.getElementById("btn2Fuel").addEventListener("click", function () {
    clearInterval(FuelInterval);
    updateButtonClass(this);
    getTimelineData(totalFuel, "-24h", "10m");
    FuelInterval = setInterval(
      () => getTimelineData(totalFuel, "-24h", "10m"),
      300000
    );
  });

  document.getElementById("btn3Fuel").addEventListener("click", function () {
    clearInterval(FuelInterval);
    updateButtonClass(this);
    getTimelineData(totalFuel, "-2d", "20m");
    FuelInterval = setInterval(
      () => getTimelineData(totalFuel, "-2d", "20m"),
      600000
    );
  });

  document.getElementById("btn4Fuel").addEventListener("click", function () {
    clearInterval(FuelInterval);
    updateButtonClass(this);
    getTimelineData(totalFuel, "-3d", "30m");
    FuelInterval = setInterval(
      () => getTimelineData(totalFuel, "-3d", "30m"),
      600000
    );
  });

  function updateButtonClass(clickedButton) {
    const isActive = clickedButton.classList.contains("active");
    if (isActive) {
      clickedButton.disabled = true;
      return;
    }
    document.querySelectorAll(".timeLineButtonFuel").forEach(function (button) {
      button.classList.remove("active");
      button.disabled = false;
    });
    clickedButton.classList.add("active");
  }

  function getTimelineData(chart, time, rate) {

    if (isFetchingFuel) return; 
    isFetchingFuel = true;

    var data = JSON.stringify({
      SignalId: [36, 34, 35, 31, 32, 33, 37, 38],
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
          response.forEach(function (entry, index) {
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
      })
      .always(() => {
        isFetchingFuel = false; // Libera el lock
      });
  }

  function drawNoData(chart) {
    setTimeout(() => {
      const ctx = chart.ctx;
      const htmlElement = document.getElementById("schemeSelector");
      const scheme = htmlElement.getAttribute("data-scheme");

      if (scheme === "scheme1") {
        ctx.fillStyle = "rgb(255, 255, 255)";
      } else if (scheme === "scheme2") {
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

}
//1280*800 Resolution

var FuelTotalRenderMini = true;
var FuelTotalRenderDivMini = document.getElementById("totalFuelMini");
if (!isNaN(parseInt(FuelTotalRenderDivMini.getAttribute("width")))) {
  var FuelTotalRenderMini = false;
}
var FuelIntervalMini;

{
let isFetchingFuelMini = false;

if (FuelTotalRenderMini == true) {
  const dataFuel = {
    datasets: [
      {
        label: "",
        pointRadius: 0,
        borderWidth: 1.3,
        backgroundColor: "rgba(235,208,132,0.2)",
        borderColor: "rgba(235,208,132,1)",
        fill: true,
        data: [],
      },
    ],
  };

  const totalFuelMini = new Chart(FuelTotalRenderDivMini, {
    type: "line",
    data: dataFuel,
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
          min: 0,
          max: 29990,
        },
      },
    },
  });

  getTimelineData(totalFuelMini, "-2d", "20m");
  FuelIntervalMini = setInterval(
    () => getTimelineData(totalFuelMini, "-2d", "20m"),
    300000
  );

  document
    .getElementById("btn1FuelMini")
    .addEventListener("click", function () {
      clearInterval(FuelIntervalMini);
      updateButtonClass(this);
      getTimelineData(totalFuelMini, "-12h", "5m");
      FuelIntervalMini = setInterval(
        () => getTimelineData(totalFuelMini, "-12h", "5m"),
        300000
      );
    });

  document
    .getElementById("btn2FuelMini")
    .addEventListener("click", function () {
      clearInterval(FuelIntervalMini);
      updateButtonClass(this);
      getTimelineData(totalFuelMini, "-24h", "10m");
      FuelIntervalMini = setInterval(
        () =>
          getTimelineData(totalFuelMini, "-24h", "10m"),
        300000
      );
    });

  document
    .getElementById("btn3FuelMini")
    .addEventListener("click", function () {
      clearInterval(FuelIntervalMini);
      updateButtonClass(this);
      getTimelineData(totalFuelMini, "-2d", "20m");
      FuelIntervalMini = setInterval(
        () => getTimelineData(totalFuelMini, "-2d", "20m"),
        600000
      );
    });

  document
    .getElementById("btn4FuelMini")
    .addEventListener("click", function () {
      clearInterval(FuelIntervalMini);
      updateButtonClass(this);
      getTimelineData(totalFuelMini, "-3d", "30m");
      FuelIntervalMini = setInterval(
        () => getTimelineData(totalFuelMini, "-3d", "30m"),
        600000
      );
    });

  function updateButtonClass(clickedButton) {
    const isActive = clickedButton.classList.contains("active");
    if (isActive) {
      clickedButton.disabled = true;
      return;
    }
    document.querySelectorAll(".timeLineButtonFuel").forEach(function (button) {
      button.classList.remove("active");
      button.disabled = false;
    });
    clickedButton.classList.add("active");
  }

  function getTimelineData(chart, time, rate) {

    if (isFetchingFuelMini) return; 
    isFetchingFuelMini = true;

    var data = JSON.stringify({
      SignalId: [36, 34, 35, 31, 32, 33, 37, 38],
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
          response.forEach(function (entry, index) {
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
      }).always(() => {
        isFetchingFuelMini = false; // Libera el lock
      });
  }

  function drawNoData(chart) {
    setTimeout(() => {
      const ctx = chart.ctx;
      const htmlElement = document.getElementById("schemeSelector");
      const scheme = htmlElement.getAttribute("data-scheme");

      if (scheme === "scheme1") {
        ctx.fillStyle = "rgb(255, 255, 255)";
      } else if (scheme === "scheme2") {
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

}
