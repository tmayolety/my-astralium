components.slider = {
  props: [],
  template: /*html*/ `

<div id="showSlider" style="display: none; position: absolute; top: 85%; left: 50%; transform: translate(-50%, -50%); z-index: 999; ">
  <div class="slidecontainer" style="display: flex; align-items: center; justify-content: center;">
      <button class="ui btn  med active" style="width: 250px; text-align: center; color: white!important;">{{formattedTime}}</button>
      <input type="range" :min="startTimestamp" :max="currentTimestamp" value="" class="slider ui btn colored primary" id="myRange" style="margin: 0 20px;">
      <select class="ui select btn active  med" v-model="selectedOption" style="margin-left: 10px; color: white!important">
          <option value="86400000" selected>1 Day</option>   
          <option value="172800000">2 Days</option>  
          <option value="259200000">3 Days</option>  
          <option value="345600000">4 Days</option>  
          <option value="432000000">5 Days</option> 
          <option value="518400000">6 Days</option>  
          <option value="604800000">1 Week</option> 
      </select>
      <span style="display: none;">valueToSend: {{valueToSend}} </span>
  </div>

</div>
    `,
  data() {
    return {
      rewindMode: rewindValuesMode,
      sliderValue: null,
      sliderValueTimestamp: null,
      selectedOption: 86400000,
      startTimestamp: null,
      currentTimestamp: Date.now(), 
      timeToSubtract: null,
      valueToSend: null,
      formattedTime: null
    };
  },
  created() {
    eventBus.subscribe("rewindValuesModeChanged", (newVal) => {
      this.rewindMode = newVal;
    });
  },
  watch: {

    selectedOption(value){
        this.getTimeStampWindow(value)
    },

    valueToSend(newVal, oldVal) {
      rewindMode.getHistoricalValues(newVal);
      //Here we will have the new mode, we need unix timestamp value
      globalRewindUpdate = !globalRewindUpdate;
      eventBus.emit("globalRewindUpdateChanged", globalRewindUpdate);
    },
    rewindMode(newVal, oldVal) {
      if (newVal) {
        this.showSlider();
        rewindMode.getHistoricalValues(this.valueToSend);
      } else {
        this.hideSlider();
      }
    },
  },
  mounted() {
    this.initSlider();
    this.updateSliderVisibility();
    this.sliderValueTimestamp = this.startTimestamp
    this.getTimeStampWindow(86400000)
    this.formatFromTimestampToDate()
  },

  methods: {

    showSlider() {
      document.getElementById("showSlider").style.display = "block";
    },

    hideSlider() {
      document.getElementById("showSlider").style.display = "none";
    },

    updateSliderVisibility() {
      if (this.rewindMode) {
        this.showSlider();
      } else {
        this.hideSlider();
      }
    },

    initSlider() {
      const slider = document.getElementById("myRange");

      slider.addEventListener("input", (event) => {
        this.sliderValue = event.target.value;
      });

      slider.addEventListener("change", () => {
        this.sliderValue = parseInt(this.sliderValue, 10);
        this.sliderValueTimestamp = this.sliderValue
        this.formatFromTimestampToDate()
      });
    },

    getTimeStampWindow(value) {
            this.timeToSubtract = value
            this.currentTimestamp = Date.now();
            this.startTimestamp = this.currentTimestamp - this.timeToSubtract;
            this.sliderValueTimestamp = this.startTimestamp
            this.formatFromTimestampToDate()
    },

    formatFromTimestampToDate(){
  
        var date = new Date(this.sliderValueTimestamp);

        var day = date.getDate()
        var month = date.getMonth() + 1
        var year = date.getFullYear()

        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        
        // Format valueToSend
        var formattedMonth = month < 10 ? '0' + month : month;
        var formattedDay = day < 10 ? '0' + day : day;
        var formattedHours = hours < 10 ? '0' + hours : hours;
        var formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
        var formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

        var formattedDate = `${year}-${formattedMonth}-${formattedDay}T${formattedHours}:${formattedMinutes}:${formattedSeconds}Z`;

        this.formattedTime = `${year}/${formattedMonth}/${formattedDay} ${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

        // ADD a second
        var newDate = new Date(date.getTime() + 60000); // Añadir 60000ms = 1 minuto
        var newMinutes = newDate.getMinutes();
        var formattedNewMinutes = newMinutes < 10 ? '0' + newMinutes : newMinutes;

        var formattedNewDate = `${year}-${formattedMonth}-${formattedDay}T${formattedHours}:${formattedNewMinutes}:${formattedSeconds}Z`;

        this.valueToSend = `${formattedDate} ${formattedNewDate}`;

    }
  },
};
