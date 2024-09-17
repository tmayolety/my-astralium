components.timelineComponent = {
  props: [],
  template: /*html*/ `
        <div :class="[fullscreen]" class="ui modal size-xl">
            <div class="modal-container">

                <div class="ui grid type1 cols-1 pad-no gap-mini">
        
                 <div class="ui grid cols-1 col sm-1 gap-mini pad-no has-header has-footer">

                    <div class="ui col sm-1 pad-no">
                        <div class="col-content overflow modal-content">
                            <button class="ui btn sm icon primary colored icon-only active timelineComponenCloseButton" @click="closeTimeLineModal()" style="position: absolute; z-index: 9999; top: -230px">
                              <svg class="ui icon" id="close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M98.74,81.26q2.52,2.14,0,4.47l-13,13q-2.33,2.33-4.47,0L50,67.67,18.74,98.74q-2.14,2.52-4.47,0l-13-13q-2.33-2.33,0-4.47L32.33,50,1.26,18.93q-2.33-2.33,0-4.47l13-13.2q2.32-2.33,4.47,0L50,32.33,81.26,1.26c1.56-1.68,3-1.68,4.47,0l13,13q2.33,2.32,0,4.47L67.67,50Z"></path></svg>
                            </button>
                            <div class="ui col mini-2 pad-sm align-middle-center h-mini-570 hidden-mini hidden-phone fullscreen-med scheme3BackgroundModal">
                           
                              <canvas class="scheme3BackgroundModal" id="timeLineGraph" style="height: 513px!important; margin-top: 25px!important;"></canvas>

                              <div style="display: flex;justify-content: center;padding: 0.1em;gap: 0.5em; position: absolute;top: 25px;right: 90px;">

                                <button
                                  @click="btn1"
                                  :class="{ active: activeButton == 'btn1' }"
                                  class="ui btn mini colored primary timeLineButtonFuel"
                                  id="btn1HTimeline"
                                  style="width: 50px;">1H</button>
                                <button
                                  @click="btn2"
                                  :class="{ active: activeButton == 'btn2' }"
                                  class="ui btn mini colored primary timeLineButtonFuel"
                                  id="btn4HTimeline"
                                  style="width: 50px;">4H</button>
                                <button
                                  @click="btn3"
                                  :class="{ active: activeButton == 'btn3' }"
                                  class="ui btn mini colored primary timeLineButtonFuel"
                                  id="btn8HTimeline"
                                  style="width: 50px;">8H</button>
                                <button
                                  @click="btn4"
                                  :class="{ active: activeButton == 'btn4' }"
                                  class="ui btn mini colored primary timeLineButtonFuel"
                                  id="btn24HTimeline"
                                  style="width: 50px;">24H </button>
                              </div>
                                
                            </div>
                        </div>
                    </div>
                 </div>
                </div>
            </div>
        </div>
    `,
  data() {
    return {
      timelineChart: null,
      signalToBuild: signalGlobalTimelineVariable,
      fullscreen: null,
      singleRenderDiv: null,
      myInterval: null,
      titleTimeline: globalTimelineTitle,
      timeDelay: globalTimelineDelay,
      activeButton: null,
      btn1Handler: null,
      btn4Handler: null,
      btn8Handler: null,
      btn24Handler: null,
    };
  },
  watch: {
    signalToBuild: {
      handler: "buildTimelineHome",
      deep: true,
    },
  },
  created() {
    this.buildTimelineHome();
  },
  mounted() {
    eventBus.subscribe("timeline-variable-updated", (signal) => {
      if (signal != null) {
        this.signalToBuild = signal;
      }
    });
    eventBus.subscribe("timeline-variable-updated-title", (title) => {
      this.titleTimeline = title;
    });
    eventBus.subscribe("timeline-variable-update-delay", (delay) => {
      this.timeDelay = delay;
    });

    this.activeButton = "btn1";
  },
  methods: {
    buildTimelineHome() {
      if (this.signalToBuild != null) {
        if (this.timelineChart) {
          this.destroyTimelineChart();
        }
        this.buildTimeline(this.signalToBuild);
        this.fullscreen = "open";
      }
    },
    destroyTimelineChart() {
      if (this.timelineChart) {
        this.timelineChart.destroy();
        this.timelineChart = null;
      }
    },
    closeTimeLineModal() {
      window.signalGlobalTimelineVariable = null;
      this.signalToBuild = null;
      this.fullscreen = "";
      clearInterval(this.myInterval);
      this.destroyTimelineChart();
      this.timelineChart = null;
      this.activeButton = "btn1";
      document
        .getElementById("btn1HTimeline")
        .removeEventListener("click", this.btn1Handler);
      document
        .getElementById("btn4HTimeline")
        .removeEventListener("click", this.btn4Handler);
      document
        .getElementById("btn8HTimeline")
        .removeEventListener("click", this.btn8Handler);
      document
        .getElementById("btn24HTimeline")
        .removeEventListener("click", this.btn24Handler);
    },
    buildTimeline(signal) {
      this.singleRenderDiv = document.getElementById("timeLineGraph");

      const dataSingle = {
        datasets: [
          {
            label: this.titleTimeline,
            pointRadius: 0,
            borderWidth: 1.3,
            backgroundColor: "rgba(140, 152, 153,0.5)",
            borderColor: "rgba(140, 152, 153,1)",
            fill: false,
            data: [],
          },
        ],
      };

      const totalSingle = new Chart(this.singleRenderDiv, {
        type: "line",
        data: dataSingle,
        options: {
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
              min: parseInt(signalsData[signal].SignalMin),
              max: parseInt(signalsData[signal].SignalMax),
            },
          },
        },
      });

      this.getTimelineData(totalSingle, "-1h", "2m");
      this.timelineChart = totalSingle;
      this.myInterval = setInterval(
        () => getTimelineData(totalSingle, "-1h", "2m"),
        120000
      );

      this.btn1Handler = () => {
        clearInterval(this.myInterval);
        this.getTimelineData(totalSingle, "-1h", "2m");
        this.myInterval = setInterval(
          () => getTimelineData(totalSingle, "-1h", "2m"),
          120000
        );
      };

      this.btn4Handler = () => {
        clearInterval(this.myInterval);
        this.getTimelineData(totalSingle, "-4h", "5m");
        this.myInterval = setInterval(
          () => getTimelineData(totalSingle, "-4h", "5m"),
          300000
        );
      };

      this.btn8Handler = () => {
        clearInterval(this.myInterval);
        this.getTimelineData(totalSingle, "-8h", "5m");
        this.myInterval = setInterval(
          () => getTimelineData(totalSingle, "-8h", "5m"),
          300000
        );
      };

      this.btn24Handler = () => {
        clearInterval(this.myInterval);
        this.getTimelineData(totalSingle, "-24h", "10m");
        this.myInterval = setInterval(
          () => getTimelineData(totalSingle, "-24h", "10m"),
          300000
        );
      };

      document
        .getElementById("btn1HTimeline")
        .addEventListener("click", this.btn1Handler);
      document
        .getElementById("btn4HTimeline")
        .addEventListener("click", this.btn4Handler);
      document
        .getElementById("btn8HTimeline")
        .addEventListener("click", this.btn8Handler);
      document
        .getElementById("btn24HTimeline")
        .addEventListener("click", this.btn24Handler);
    },
    btn1() {
      this.activeButton = "btn1";
    },
    btn2() {
      this.activeButton = "btn2";
    },
    btn3() {
      this.activeButton = "btn3";
    },
    btn4() {
      this.activeButton = "btn4";
    },
    getTimelineData(chart, time, rate) {
      var data = JSON.stringify({
        SignalId: [this.signalToBuild],
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
            this.drawNoData(chart);
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
          this.drawNoData(chart);
          console.error("Request failed: " + textStatus + ", " + errorThrown);
          console.log("Response status: " + jqXHR.status);
          console.log("Response text: " + jqXHR.responseText);
        });
    },
    drawNoData(chart) {
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
    },
  },
};
