components.reportLog = {
  props: [],
  template: /*html*/ `
        <div id="keyboardAnalysisLog" style="width: 30vw; position: fixed; bottom: 95px; left: 50%; transform: translateX(-50%); z-index:99999; display: none;" class="keyboardAnalysisLog"></div>
        <div class="ui grid cols-mini-6 gap-med">
          <div class=" col mini-2">
          
                <ul class="ui table size-mini" style="height: 225px">
                  <li class="thead" style="height: 42px;">
                      <div class="col-200 align-middle-center reportLogHeaders"><span class="text-size-8">LOG NAME</span></div>
                      <div class="col-200 align-middle-center reportLogHeaders"><span class="text-size-8">FREQUENCY</span></div>
                      <div class="col-200 align-middle-center reportLogHeaders"><span class="text-size-8">LAST</span></div>
                  </li>
                  <li  v-for="log in lastThreeLogs" :key="log.name" style="height: 75px" @click="editLog(log.id)">
                  <button class="ui btn mini" :class="{ 'active primary': log.id === idLogUpdate, 'colored primary': log.id !== idLogUpdate }" style="width: 600px; margin-top: 1em;">
                        <div class="col-200 align-middle-center"><span style="font-size: 18px">{{ log.name }}</span></div>
                        <div class="col-200 align-middle-center"><span style="font-size: 18px">{{ log.frequency }}</span></div>
                        <div class="col-200 align-middle-center"><span style="font-size: 18px">{{ log.last }}</span></div>
                  </button>
                  </li>
                </ul>

                <div class="btn-group" style="text-align: center; margin-top: 5em; ">
                    <button v-if="!upToThreeLogs" @click="addNewLog()" class="ui btn primary med reportLogHeaders"><ion-icon name="add-outline" style="font-size: 22px; margin-right: .5em"></ion-icon>ADD NEW LOG</button>
                </div>

          </div>
  
          <div class="ui col mini-4">
            <div class="ui grid type1 cols-mini-1 gap-med">
              <div class="ui col mini-1 has-col-header-med">
                <header v-if="showAddSignals" class="text-size-14">EDIT {{currentInputTitle}} LOG</header>
                <header v-else class="text-size-14">NEW LOG</header>
                <div class="ui grid cols-2 pad-no gap-no bg-no">

                  <div class="ui col mini-2" style="display: flex; align-items: center; flex-direction: column;">
      
                      <div style="margin-top: .6em; margin-bottom: .6em; text-align: center">
                          <h1 style="font-size: 18px;  font-weight: bold;">SETTINGS</h1>
                      </div>
                                      
                      <form @submit.prevent="validateAndLog(idLogUpdate)" id="logForm">
    
                        <div class="ui mini-2 btn med primary colored" style="margin-bottom: 1em; display: block!important;">
                            <input class="input textColorTheme" type="text" @focus="setActiveInput('title')" id="title" name="title" v-model="currentInputTitle" placeholder="Name" style="width: 24em; background: none; border: none; font-size: large; height: 1em;">
                            <p v-if="errors.title" style="color:red; font-weight: 800; margin-bottom: -1em;">{{ errors.title }}</p>
                        </div>
                                
                        <div class="ui mini-2 btn med primary colored" style="margin-bottom: 1em; display: block!important;">
                            <input  class="input textColorTheme" type="email" @focus="setActiveInput('email')" id="email" name="email" v-model="currentInputEmail" placeholder="Output Email" style="width: 24em; background: none; border: none; font-size: large; height: 1em; ">
                            <p v-if="errors.email" style="color:red; font-weight: 800; margin-bottom: -1em;">{{ errors.email }}</p>
                        </div>

                        <div class="ui mini-2" style="margin-bottom: 1em; display: block!important; ">
                            <select v-model="frequencySelected" class="ui select  btn med primary colored textColorTheme" name="select" style="height: 38.5px; width: 484px; font-size: large; ">
                                <option class="ui btn med primary colored" value="" disabled>Select Frequency</option>
                                <option class="ui btn med primary active" v-for="frequency in frequencies" :value="frequency.id">{{frequency.name}}</option>
                            </select>
                            <p v-if="errors.frequency" style="color:red; font-weight: 800; margin-bottom: -1em;">{{ errors.frequency }}</p>
                        </div>

                        <div class="ui mini-2 " style="margin-bottom: 1em; display: block!important;">
                            <select v-model="startTimeSelected" class="ui select btn med primary colored textColorTheme" name="select" style="height: 38.5px; width: 484px; font-size: large; ">
                                <option class="ui btn med primary colored" value="" disabled>Start Time</option>
                                <option class="ui btn med primary active" v-for="hour in hours" :value="hour">{{hour}}:00</option>
                            </select>
                            <p v-if="errors.startTime" style="color:red; font-weight: 800; margin-bottom: -1em;">{{ errors.startTime }}</p>
                        </div>
                      
                        <div class="btn-group" style="text-align: center;">
                            <button type="submit"  class="ui btn med success colored" >SAVE LOG SETTINGS</button>
                        </div>

                      </form>
                  </div>
                                    
                  <div v-if="showAddSignals" class="ui col mini-2" style="display: flex; align-items: center; flex-direction: column;">

                    <div  style="margin-top: .6em; margin-bottom: .6em;">
                      <h1 style="font-size: 18px; font-weight: bold; ">SIGNALS</h1>
                    </div>
                    
                    <div style="margin-bottom: .6em;">
                    <div class="ui btn med primary colored" style="position: relative; display: inline-block;" >

                      <ion-icon name="search-outline" class="textColorTheme" style="font-size: 16px; position: absolute; right: 10px; top: 50%; transform: translateY(-50%);"></ion-icon>
                      <input
                        class="input textColorTheme"
                        type="text"
                        @input="filterSignals"
                        @focus="setActiveInput('signal')"
                        v-model="currentInputSignal"
                        placeholder=" Please enter at least 3 characters to search a signal"
                        style="width: 24em; background: none; border: none; font-size: large; height: 1em; "> 

                    </div>

                      <ul v-if="filteredSignals.length" class="autocomplete-results ui btn active primary" style="list-style-type: none; margin: 0; padding: 0; display:block;  position: absolute; width: 30em;max-height: 300px; overflow-y: auto; z-index: 1000;">
                        <li v-for="signal in filteredSignals" :key="signal.Id" @click="selectSignal(signal)" class="textColorTheme" style="padding: 0.5em; cursor: pointer;">
                          {{ signal.Id }} - {{ signal.Title }}
                        </li>
                      </ul>
                    </div>
  
                    <div>
                        <ul class="ui table size-mini">
                            <li class="thead" >
                                <div class="align-middle-center col-100-min" style="border-top-left-radius: 9px;"><span>ID</span></div>
                                <div class="align-middle-center col-600-min"><span>Signal Description</span></div>
                                <div class="align-middle-center col-300-min"><span>Type</span></div>
                                <div class="align-middle-center col-100-min" style="border-top-right-radius: 9px;"><span>Delete</span></div>
                            </li>
                        </ul>
                    </div>

                    <div style="height:320px; overflow: auto;">
                      <ul class="ui table size-mini" >
                        <li v-for="signalSelected in selectedSignals" style="border-bottom: 1px solid #103046;">
                          <div class="align-middle-center col-100-min" ><span>{{signalSelected.Id}}</span></div>
                          <div class="align-left col-600-min col-600" ><span>{{signalSelected.Title}}</span></div>
                          <div class="align-middle-center col-300-min">
                            <button @click="toggleSignalType(signalSelected)" class="ui btn switch mini w-150  switch-2clr" :class="{'active color-bg-type-secondary-light': signalSelected.typeFromSignalLog == 0, 'color-bg-type-secondary-dark': signalSelected.typeFromSignalLog == 1}">
                              <div class="active" style="font-size:14px;">Absolute</div>
                              <div class="inactive" style="font-size:14px">Timeline</div>
                            </button>
                          </div>
                          <div class="align-middle-center col-100-min"><button @click="deleteSignal(signalSelected.idFromSignalLog)" class="textColorTheme" style=" border: none!important; background: none!important;"><ion-icon name="close-circle-outline" style="font-size: 16px; height: 20px; width: 20px;"></ion-icon></button></div>
                        </li>
                      </ul>
                    </div>

                    <div class="btn-group" style="text-align: center; margin-top: 1em; margin-bottom: 1em;">
                      <button class="ui btn med success colored" @click="openPdf" style="width: 200px; margin-right: .5em">VIEW LOG</button>
                      <button class="ui btn med danger colored" @click="openDeletionModal(idLogUpdate)" style="width: 200px;">DELETE LOG</button>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>

        <div id="pdfModal" class="ui modal size-lg">
          <div class="modal-container" style="margin-top: -3em;">
            <div class="ui grid type1 cols-1 pad-no gap-mini">
                <div class="ui col mini-1 grid cols-1 gap-mini has-header">

                    <header class="ui col mini-1">
                    <font>PDF</font>
                    <span class="gradients">
                        <span class="gradient-left"></span>
                        <span class="gradient-right"></span>
                    </span>
                    
                    <button @click="closePdf" class="ui btn sm icon primary colored icon-only active">
                    <svg class="ui icon" id="close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M98.74,81.26q2.52,2.14,0,4.47l-13,13q-2.33,2.33-4.47,0L50,67.67,18.74,98.74q-2.14,2.52-4.47,0l-13-13q-2.33-2.33,0-4.47L32.33,50,1.26,18.93q-2.33-2.33,0-4.47l13-13.2q2.32-2.33,4.47,0L50,32.33,81.26,1.26c1.56-1.68,3-1.68,4.47,0l13,13q2.33,2.32,0,4.47L67.67,50Z"></path></svg></button>
                    </header>
        
                    <div class="ui col mini-1 pad-no" style="margin-top: -.6em;">
                        <div class="col-content overflow modal-content" style=" display: flex; align-items: center; justify-content: center;">
                          <object data=http://192.168.10.38:8080/output.pdf type="application/pdf" width="900" height="800">
                            <a href=http://192.168.10.38:8080/output.pdf>test.pdf</a>
                          </object>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>

        <div id="confirmDeletionModal" class="ui modal size-med">
        
            <div class="modal-container" style="margin-top: -6em;">
                <div class="ui grid type1 cols-2 pad-no gap-mini">
                    <div class="ui grid cols-2 col sm-1 gap-mini pad-no has-header ">

                        <header class="ui col mini-2">
                            <font>Confirm deletion</font>
                            <span class="gradients">
                                <span class="gradient-left"></span>
                                <span class="gradient-right"></span>
                            </span>
                            
                            <button @click="closeDeletionModal" class="ui btn sm icon primary colored icon-only active" >
                            <svg class="ui icon" id="close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M98.74,81.26q2.52,2.14,0,4.47l-13,13q-2.33,2.33-4.47,0L50,67.67,18.74,98.74q-2.14,2.52-4.47,0l-13-13q-2.33-2.33,0-4.47L32.33,50,1.26,18.93q-2.33-2.33,0-4.47l13-13.2q2.32-2.33,4.47,0L50,32.33,81.26,1.26c1.56-1.68,3-1.68,4.47,0l13,13q2.33,2.32,0,4.47L67.67,50Z"></path></svg></button>
                        </header>

                        <div class="ui col sm-2 pad-no " style="margin-top: -.6em;">
                            <div class="col-content overflow modal-content">

                              <div class="ui grid cols-2 pad-no gap-no bg-no">

                                <div class="ui col mini-2" style="display: flex; align-items: center; flex-direction: column;">
      
                                <div class="ui col mini-2" style="margin-bottom: 1em; text-align: center">
                                      Are you sure you want to delete this log?
                                </div>
                                   
                                <div class="btn-group" >
                                  <button @click="deleteLog(deletionLogId)"   class="ui btn lg danger colored" style="width: 220px; height: 45px;">DELETE</button>
                                </div>

                                </div>
                                    
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
      logs: [],
      frequencies: [],
      hours: [
        "00",
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
      ],
      signals: signalsData,
      filteredSignals: [],
      selectedSignals: [],
      selectedSignalsFromLogs: [],
      selectedSignal: null,
      myKeyboard: null,
      clickTimeout: null,
      currentInputSignal: "",
      currentInputTitle: "",
      activeInput: null,
      upToThreeLogs: false,
      errors: {},
      currentInputTitle: "",
      frequencySelected: "",
      startTimeSelected: "",
      currentInputEmail: "",
      showAddSignals: false,
      idLogUpdate: null,
      arraySignalsLog:[],
      sortedLogs: [],
      deletionLogId: null
    };
  },
  computed:{
    lastThreeLogs() {

    this.sortedLogs = [...this.logs].sort((a, b) => b.id - a.id).slice(0, 3);

    return this.sortedLogs.map(log => {

      let frequency = this.frequencies.find(f => f.id === log.frequency); 

      let formattedDate = log.last.replace('T', ' ').replace('Z', '');

      return {
        ...log,
        frequency: frequency ? frequency.name : 'Unknown',
        last: formattedDate
      };

    });
  }
  },
  watch: {
    logs:{
      handler(newLogs) {
        this.updateUpToThreeLogs(newLogs);
        
        this.mountComponentWithLastLog();
      },
      immediate: true,//This ensures that it runs at startup
      deep: true // This is for observing changes within objects/arrays.
    },

    currentInputSignal(newValue, oldValue) {
      this.filterSignals();
    }

  },
  updated() {},
  mounted() {
    //mounted keyboard start
    const keyboardAnalysisLog = window.SimpleKeyboard.default;

    this.myKeyboard = new keyboardAnalysisLog(".keyboardAnalysisLog", {
      theme: "simple-keyboard hg-theme-default hg-layout-default",
      onChange: (input) => {
        switch (this.activeInput) {
          case "signal":
            this.currentInputSignal = input;
            this.filterSignals();
            break;
          case "title":
            this.currentInputTitle = input;
            break;
          case "email":
            this.currentInputEmail = input;
            break;
        }
      },
    });

    document.addEventListener("click", this.handleClickOutside);

    //mounted keyboard end

    this.getLogs();

    this.getFrequencies();

  },
  beforeDestroy() {
    document.removeEventListener("click", this.handleClickOutside);
  },
  methods: {

    showKeyboard() {
      document.querySelector("#keyboardAnalysisLog").style.display = "block";
    },

    hideKeyboard() {
      document.querySelector("#keyboardAnalysisLog").style.display = "none";
    },

    handleClickOutside(event) {
      const keyboardElement = document.getElementById("keyboardAnalysisLog");
      const inputElements = document.querySelectorAll(".input");

      let isClickOutside = true;

      if (keyboardElement.contains(event.target)) {
        isClickOutside = false;
      } else {
        inputElements.forEach((input) => {
          if (input.contains(event.target)) {
            isClickOutside = false;
          }
        });
      }

      if (isClickOutside) {
        this.hideKeyboard();
      }
    },

    closeDeletionModal(){
      const deletionModal = document.getElementById("confirmDeletionModal");
      deletionModal.classList.remove("open");
      this.deletionLogId = null
    },

    openDeletionModal(logId){
      const deletionModal = document.getElementById("confirmDeletionModal");
      deletionModal.classList.add("open");
      this.deletionLogId = logId
    },
    //Limit log creation to the user
    updateUpToThreeLogs(logs){
      this.upToThreeLogs = logs.length > 2;
    },

    validateAndLog(id) {

      this.errors = {};
      let valid = true;

      if (!this.currentInputTitle) {
        this.errors.title = 'Please enter a name.';
        valid = false;
      }

      if (!this.currentInputEmail) {
        this.errors.email = 'Please enter an email.';
        valid = false;
      } else if (!/^[^@]+@[^@]+\.[^@]+$/.test(this.currentInputEmail)) {
        this.errors.email = 'Please enter a valid email address.';
        valid = false;
      }

      if (!this.frequencySelected || this.frequencySelected === 'Select Frequency') {
        this.errors.frequency = 'Please select a frequency.';
        valid = false;
      }
      if (!this.startTimeSelected || this.startTimeSelected === 'Start Time') {
        this.errors.startTime = 'Please select a start time.';
        valid = false;
      }
      if (valid) {
        this.addOrEditLog(id);
      }
    },

    openPdf() {
      const modalPdf = document.getElementById("pdfModal");
      modalPdf.classList.add("open");
    },

    closePdf() {
      const modalPdf = document.getElementById("pdfModal");
      modalPdf.classList.remove("open");
    },

    addNewLog() {
      
        this.idLogUpdate = null
        this.clearForm()
        this.selectedSignals = []
        this.showAddSignals = false;
    },

    clearForm(){

      this.currentInputTitle =  null
      this.currentInputEmail =  null
      this.frequencySelected =  ""
      this.startTimeSelected =  ""
      
    },

    setActiveInput(inputName) {
      this.activeInput = inputName;
      // Reset keyboard input
      this.showKeyboard();
      let newValue = "";
      switch (inputName) {
        case "signal":
          newValue = this.currentInputSignal;

          break;
        case "title":
          newValue = this.currentInputTitle;

          break;
        case "email":
          newValue = this.currentInputEmail;

          break;
      }
      this.myKeyboard.setInput(newValue);
    },

    //METHODS
    filterSignals() {

      const isNumeric = /^\d+$/.test(this.currentInputSignal);

      if (isNumeric || this.currentInputSignal.length >= 3) {
        this.filteredSignals = this.signals.filter((signal) => {
        
          if (isNumeric) {
            return signal.Id && signal.Id.toString().includes(this.currentInputSignal);
          }
        
          return signal.Title && signal.Title.toLowerCase().includes(this.currentInputSignal.toLowerCase());
        });
      } else {
        this.filteredSignals = [];
      }
    },

    //Select absolute signals
    selectSignal(signal) {
      this.currentInputSignal = `${signal.Id} - ${signal.Title}`;
      this.addSignalToLog(signal.Id, 0);
      this.filteredSignals = [];
      this.currentInputSignal = ""
    },

    //Delete absolute signals with type = 0 and timeline signals with type 1
    deleteSignal(signal) {
  
      const url = `${ACTIVE_SERVER}:${API.Port}/reportLog/signal/delete/${signal}`;
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };
    
      fetch(url, options)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
          }
          return response.json();
        })
        .then(data => {
          this.getLogs(); 
          this.getLogSignals(this.idLogUpdate)
        })
        .catch(error => {
          console.error("Failed to delete the log:", error);
        });

        
    },
    //If the form is validated add a new log or edit an existing one
    addOrEditLog(id) {
      if(id){
       
        this.saveEditLog(id)
      }else{
        
        this.addLog()
      }
    },
    //List logs
    getLogs: async function () {

      fetch(ACTIVE_SERVER + ":" + API.Port +"/reportLogs")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          this.logs = data;
        })
        .catch((error) => {
          console.error(
            "There was a problem with your fetch operation:",
            error
          );
        });
    },
    //List frequencies
    getFrequencies: async function () {

      fetch(ACTIVE_SERVER + ":" + API.Port +"/reportLogs/frequencies")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          this.frequencies = data;
          if (!this.frequencySelected){
            this.frequencySelected = '';
          }
        })
        .catch((error) => {
          console.error(
            "There was a problem with your fetch operation:",
            error
          );
        });
    },
    //Method add new log
    async addLog() {
      this.idLogUpdate = null
      const formData = {
        name: this.currentInputTitle,
        frequency: this.frequencySelected,
        startTime: parseInt(this.startTimeSelected),
        email: this.currentInputEmail
      };

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      };

      try {
        const response = await fetch(
          ACTIVE_SERVER + ":" + API.Port +"/reportLog/create",
          options
        );
        if (!response.ok) {
          throw new Error(
            "Network response was not ok: " + response.statusText
          );
        }
        const data = await response.json();

        this.idLogUpdate = data.Code

        this.getLogs()

        this.getLogSignals(this.idLogUpdate)

        this.showAddSignals = true

      } catch (error) {
        console.error("Failed to fetch:", error);
      }
    },
    mountComponentWithLastLog(){

      if (this.lastThreeLogs.length > 0) {
       
        const lastLog = this.lastThreeLogs[0];
        
        if(this.idLogUpdate == null){
          this.editLog(lastLog.id)
        }else{
          this.editLog(this.idLogUpdate)
        }
      }else{
        this.addNewLog()
      }

    },
    //Open modal for edit Log
    editLog(id) {
      this.idLogUpdate = id

      const logToEdit = this.logs.find(log => log.id === id);
      if (logToEdit) {

        this.currentInputTitle = logToEdit.name;
        this.currentInputEmail = logToEdit.email; 
        this.frequencySelected = logToEdit.frequency;
        this.startTimeSelected = logToEdit.startTime.toString().padStart(2, '0')

        this.showAddSignals = true;
      }
      this.getLogSignals(id)
    },
    //Method edit log
    async saveEditLog(id) { 
      const formData = {
        name: this.currentInputTitle,
        frequency: this.frequencySelected,
        startTime: parseInt(this.startTimeSelected),
        email: this.currentInputEmail
      };
    
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      };
    
      try {
        const response = await fetch(`${ACTIVE_SERVER}:${API.Port}/reportLog/update/${id}`, options);
        if (!response.ok) {
          throw new Error("Network response was not ok: " + response.statusText);
        }
        const data = await response.json();

        this.getLogs(); 
        //this.idLogUpdate = null
      } catch (error) {
        console.error("Failed to fetch:", error);
      }
    },
    //Method delete log
    deleteLog(id) {
      const url = `${ACTIVE_SERVER}:${API.Port}/reportLog/delete/${id}`;
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };
    
      fetch(url, options)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
          }
          return response.json();
        })
        .then(data => {
          this.getLogs(); 
          this.deletionLogId = null
          this.closeDeletionModal()
          this.idLogUpdate = null
        })
        .catch(error => {
          console.error("Failed to delete the log:", error);
        });
    },
    //Method add new signal, if is absolute signal type = 0, if is a timeline one type = 1
    async addSignalToLog(id, type) {
      const numericSignalId = parseInt(id); 
      const numericLogId = parseInt(this.idLogUpdate); 

      const formData = {
        signalId: numericSignalId,
        logId: numericLogId,
        type: type,
        timeWindow: 0
      };

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      };

      try {
        const response = await fetch(
          ACTIVE_SERVER + ":" + API.Port +"/reportLog/signals/create",
          options
        );
        if (!response.ok) {
          throw new Error(
            "Network response was not ok: " + response.statusText
          );
        }
        const data = await response.json();
        this.getLogSignals(this.idLogUpdate)
      } catch (error) {
        console.error("Failed to fetch:", error);
      }
    },
    //Method get Log signals 
    async getLogSignals(logId) {
      fetch(`${ACTIVE_SERVER}:${API.Port}/reportLogs/signals/${logId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {

           this.selectedSignalsFromLogs = data
           
           this.updateSelectedSignals();
        })
        .catch((error) => {
          console.error(
            "There was a problem with your fetch operation:",
            error
          );
        });
    },

    updateSelectedSignals() {
      this.selectedSignals = [];

      const signalIdToIdMap = new Map();

      this.selectedSignalsFromLogs.forEach(signal => {
        if (!signalIdToIdMap.has(signal.signalId)) {
          signalIdToIdMap.set(signal.signalId, []);
        }
        signalIdToIdMap.get(signal.signalId).push({ id: signal.id, type: signal.type });
      });
    
      
      signalIdToIdMap.forEach((details, signalId) => {

        details.forEach(detail => {

          const title = this.getTitleForSignalId(signalId); 
          
          this.selectedSignals.push({
            Id: signalId,
            Title: title,
            idFromSignalLog: detail.id,
            typeFromSignalLog: detail.type
          });
        });
      });
      
    },

    getTitleForSignalId(signalId) {

      return this.signals[signalId].Title
    },

    toggleSignalType(signal) {
      const newType = signal.typeFromSignalLog === 0 ? 1 : 0;
      this.editLogSignals(signal.idFromSignalLog, signal.Id, newType);

      signal.typeFromSignalLog = newType;
    },
    async editLogSignals(idFromSignalLog, signalId, type){
      
        const formData = {
          id: idFromSignalLog,
          signalId: signalId,
          logId: this.idLogUpdate,
          type: type,
          timeWindow: 0,
        };
      
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        };
      
        try {
          const response = await fetch(`${ACTIVE_SERVER}:${API.Port}/reportLog/signal/update/${idFromSignalLog}`, options);
          if (!response.ok) {
            throw new Error("Network response was not ok: " + response.statusText);
          }
          const data = await response.json();
          this.getLogSignals(this.idLogUpdate); 

        } catch (error) {
          console.error("Failed to fetch:", error);
        }
      
    }
  }
};
