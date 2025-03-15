components.signalListSystem = {
  props: [],
  template: /*html*/`
  <div v-if="isLoading" style="display: flex; justify-content: center; align-items: center; height: 100vh; width: 100vw; position: fixed; top: 0; left: 0; z-index: 9999; background-color: rgba(0, 0, 0, 0.5);">
  <div class="loaderSignals"></div>
</div>
  <!--
    <span style="width:22px; position: absolute; top: 0.3em; left:25vw; color: white;"><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M338.29 338.29L448 448"/></svg></span>
    <div class="ui col sm-1">
        <input  style="height: 35px; width:27vw; font-size: 16px;" class="input reportLogHeaders" placeholder="Search" @focus="showKeyboard" @input="handleInputChange($event.target.value)" />
        <button class="ui btn sm secondary"  @click="clearSearch">Clear</button>
    </div>-->

    <div id="keyboard" style="width: 40vw; position: fixed; bottom: 95px; left: 50%; transform: translateX(-50%); z-index:99999; display: none;" class="simple-keyboard"></div>

    <div class="ui col sm-1 gap-no pad-no bg-no h-tv-ld-30 h-tv-pt-30">
        <div class="col-content">
            <div class="col-content overflow">
                    <ul class="ui table size-sm resp">
                        <li class="thead"><div class="col-50 align-middle-center"><span>ID #</span></div><div class="col-760 align-middle-center"><span>Name</span></div><div class="col-90 align-middle-center"><span>Type</span></div><div class="col-90 align-middle-center"><span>Raw</span></div><div class="col-90 align-middle-center"><span>Escalated</span></div><div class="col-90 align-middle-center hidden-mini"><span>Min</span></div><div class="col-90 align-middle-center hidden-mini"><span>Max</span></div><div class="col-90 align-middle-center"><span>HH</span></div><div class="col-90 align-middle-center"><span>H</span></div><div class="col-90 align-middle-center"><span>L</span></div><div class="col-90 align-middle-center"><span>LL</span></div><div class="col-40 align-middle-center"><span></span></div></li>
                    </ul>
            </div>
        </div>
    </div>

<div class="col-content overflow signalListHeight" ref="scrollContainer" @scroll="loadMore()">
<div class="col-content">
<div v-for="(signal, index) in filteredByDevice" :key="signal.Id">
    <ul class="ui table  size-sm resp dev-deviceListing"
    :style="{ display: displayedSignals.includes(signal) ? 'block' : 'none' }"
    >       
        <li id="signalList_' + signal.Id + '">
            <div class="col-50 align-middle-center"  :class="index % 2 == 0 ? 'signalListRowEven' : 'signalListRowOdd'"><span> {{signal.Id}} </span></div>
            <div class="col-760 align-middle-center"  :class="index % 2 == 0 ? 'signalListRowEven' : 'signalListRowOdd'"><span>{{signal.Title}}</span></div>
            <div class="col-90 align-middle-center"  :class="index % 2 == 0 ? 'signalListRowEven' : 'signalListRowOdd'"><span>{{typeValue(signal.Type)}}</span></div>
            <div class="col-90 align-middle-center"  :class="index % 2 == 0 ? 'signalListRowEven' : 'signalListRowOdd'"><span class="font-bold">{{vRawValue(signal.Id)}}</span></div>
            <div class="col-90 align-middle-center"  :class="index % 2 == 0 ? 'signalListRowEven' : 'signalListRowOdd'"><span class="font-bold"> {{vEscalatedValue(signal.Id)}} </span></div>
            <div class="col-90 align-middle-center hidden-mini" :class="index % 2 == 0 ? 'signalListRowEven' : 'signalListRowOdd'"><span v-if="signal.Type == 0"> {{signal.SignalMin}} </span></div>
            <div class="col-90 align-middle-center hidden-mini" :class="index % 2 == 0 ? 'signalListRowEven' : 'signalListRowOdd'"><span v-if="signal.Type == 0"> {{signal.SignalMax}} </span></div>
            <div class="col-90 align-middle-center"  :class="index % 2 == 0 ? 'signalListRowEven' : 'signalListRowOdd'"><span :id="'signalListHH_' + signal.Id" v-if="signal.Type == 0"> {{signal.SignalHH}} </span></div>
            <div class="col-90 align-middle-center"  :class="index % 2 == 0 ? 'signalListRowEven' : 'signalListRowOdd'"><span :id="'signalListH_' + signal.Id" v-if="signal.Type == 0"> {{signal.SignalH}}</span></div>
            <div class="col-90 align-middle-center"  :class="index % 2 == 0 ? 'signalListRowEven' : 'signalListRowOdd'"><span :id="'signalListL_' + signal.Id" v-if="signal.Type == 0"> {{signal.SignalL}}</span></div>
            <div class="col-90 align-middle-center"  :class="index % 2 == 0 ? 'signalListRowEven' : 'signalListRowOdd'"><span :id="'signalListLL_' + signal.Id" v-if="signal.Type == 0"> {{signal.SignalLL}}</span></div>
            <div class="col-40 align-middle-center" v-if="signal.Type == 0" @click="editLimitSignal(signal.Id)"  :class="index % 2 == 0 ? 'signalListRowEven' : 'signalListRowOdd'"><i class=\"ui icon-size-20 glow\"><svg class=\"ui icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><path d=\"M25.78,92.71l-1.45-4c-.74-2.08-1.37-3.81-1.41-3.85l-2.25-.94L18.49,83l-3.78,2-3.79,2L8.61,84.59A16.18,16.18,0,0,1,6.27,82c0-.14.79-1.94,1.77-4l1.74-3.71L8.86,72,8,69.78,4,68.51,0,67.22V60.29l3.82-1.37c2.12-.74,3.91-1.41,4-1.47A14,14,0,0,0,8.86,55.2l.9-2.14L7.92,49.37a42.37,42.37,0,0,1-1.84-3.94,19.41,19.41,0,0,1,2.31-2.55l2.32-2.31,3.9,1.84,3.9,1.83,2.06-.87a22,22,0,0,0,2.27-1,33.46,33.46,0,0,0,1.47-4.19l1.28-4,3.43,0,3.41.06,1.39,4c.75,2.17,1.47,4,1.57,4.15a27.38,27.38,0,0,0,4.36,1.79,42.47,42.47,0,0,0,3.92-1.88l3.62-1.91,2.44,2.43,2.41,2.44-1.85,3.86-1.82,3.88.9,2.24.92,2.21,4.08,1.36,4.06,1.35,0,3.39-.06,3.41-4,1.43c-2.19.79-4,1.45-4,1.49s-.45,1.06-.94,2.24l-.88,2.16,1.92,3.84,1.9,3.84-2.39,2.39-2.39,2.4-3.88-1.87L39.76,83l-2.09.88a13.76,13.76,0,0,0-2.3,1.1c-.12.14-.76,2-1.45,4.12l-1.25,3.86h-3.4C26.73,92.94,25.84,92.88,25.78,92.71Zm6-20.34a8.21,8.21,0,0,0,4-2.51,8.48,8.48,0,0,0,2.53-6.25A9.06,9.06,0,0,0,33,55.35c-1.47-.74-1.51-.74-3.86-.74s-2.39,0-3.85.72a11.18,11.18,0,0,0-4,3.61,9.88,9.88,0,0,0-.93,7.16,9.73,9.73,0,0,0,6.12,6.27A10.21,10.21,0,0,0,31.75,72.37Z\"></path><path d=\"M68.45,58.39a35.77,35.77,0,0,0-1.47-4,13.88,13.88,0,0,0-2.14-1l-1.9-.78-3.57,1.78-3.55,1.79-2.23-2.24-2.24-2.23L53,48l1.71-3.61-.85-2.1-.84-2.09L49.27,39l-3.78-1.24V31.41l.84-.31c.45-.18,2.14-.79,3.77-1.37L53,28.67l.86-2.06.85-2L52.94,21l-1.8-3.59,2.23-2.23,2.24-2.24,3.59,1.67c2,.92,3.62,1.68,3.7,1.68s1-.37,2.16-.82l2-.82,1.21-3.79,1.22-3.78h6.35l.55,1.53,1.37,3.76.81,2.26,2.06.84,2.06.86,3.53-1.76,3.53-1.79L92,15.06l2.27,2.29-1.68,3.53-1.67,3.51.33.94c.18.51.57,1.49.89,2.16l.55,1.24,3.66,1.15L100,31v6.51l-3.55,1.27a39.1,39.1,0,0,0-3.78,1.47,13.09,13.09,0,0,0-1,2.14l-.79,1.92,1.79,3.57,1.78,3.59-2.18,2.18A26.91,26.91,0,0,1,90,55.88c-.06,0-1.72-.74-3.67-1.66l-3.54-1.67-2.06.82-2.06.85-1.2,3.72c-.67,2.06-1.23,3.84-1.27,4s-.87.24-3.26.24H69.71Zm7.82-16.15A8.53,8.53,0,1,0,65,31c-.55,1.18-.59,1.43-.61,3.43s0,2.24.63,3.47a9,9,0,0,0,5.25,4.73,7.24,7.24,0,0,0,2.85.27A6.12,6.12,0,0,0,76.27,42.24Z\"></path></svg></i>
            </div>
            <div class="col-40 align-middle-center" v-else  :class="index % 2 == 0 ? 'signalListRowEven' : 'signalListRowOdd'"></div>
        </li>
    </ul>
    </div>
</div>
<div style="display:none">{{activatedDevice}}</div>
</div>
`,
  data() {
    return {
      activatedDevice: DeviceIdActivated,
      signalListData: signalsData,   
      filteredSignals: [],
      displayedSignals: [],     
      isLoading: false,
      myKeyboard: null,
      clickTimeout: null,
      itemsToShow: 30,         
      increment: 5,
    };
  },
  watch: {
    activatedDevice:{
      handler: 'handleDeviceChange',
      deep: true,
    },
  },
  updated() {},
  mounted() {
    //mounted keyboard start
    const Keyboard = window.SimpleKeyboard.default;

    this.myKeyboard = new Keyboard({
      onChange: input => this.handleInputChange(input),
    });

    document.addEventListener('click', this.handleClickOutside);
    //mounted keyboard end

    setTimeout(function () {
      $(".dev-deviceListing")
        .not(".signalsDevice_" + deviceData[1].Id)
        .hide();
    }, 500);

    this.filteredSignals = this.signalListData.filter(function (el) {
      return el != null;
    });
    // Inicialmente mostramos solo un subconjunto
    this.displayedSignals = this.filteredSignals.slice(0, this.itemsToShow);

  },
  computed: {
    filteredByDevice() {
      return (this.filteredSignals || []).filter(signal =>
        signal != null &&
        signal.TypeInOut == 'in' &&
        signal.Device == this.activatedDevice
      );
    }
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleClickOutside);
  },
  methods: {

    handleDeviceChange(){
      this.filteredSignals = this.signalListData.filter(signal => 
        signal.TypeInOut == 'in' && signal.Device == this.activatedDevice
      );
      this.displayedSignals = this.filteredSignals.slice(0, this.itemsToShow);

      this.$nextTick(() => {
        const contentDiv = this.$refs.scrollContainer;
        if (contentDiv) {
          contentDiv.scrollTop = 0;
        }
      });
    },
  
    loadMore() {
      if (this.itemsToShow < this.filteredByDevice.length) {
        this.itemsToShow += this.increment;
        this.displayedSignals = this.filteredByDevice.slice(0, this.itemsToShow);
      }
    },

    handleInputChange(input) {
        document.querySelector(".input").value = input;

        if(this.clickTimeout){
          clearTimeout(this.clickTimeout)
        }

        this.clickTimeout = setTimeout(() => {
          this.searchSignals(input);
        }, 1200);
    },

    async searchSignals(searchText) {
      const isNumber = !isNaN(searchText);
      if (isNumber || searchText.length > 2){
        this.isLoading = true; 
        try {
          const response = await fetch(ACTIVE_SERVER + ":" + API.Port +'/signal/search', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ Search: searchText }),
          });
  
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
    
          const result = await response.json();
  
          if (result == null) {
            console.error('Search result is null');
            this.filteredSignals = [];
          } else {
            this.filteredSignals = result;
          }
          this.itemsToShow = 30;
          this.displayedSignals = this.filteredSignals   
        } catch (error) {
          console.error('Error fetching signals:', error);
        } finally {
          this.isLoading = false;
        }
      }else{
        this.filteredSignals = this.signalListData.filter(function (el) {
          return el != null;
        });
        this.displayedSignals = this.filteredByDevice.slice(0, this.itemsToShow);
      }
    },
  
    clearSearch() {
      this.filteredSignals = this.signalListData.filter(function (el) {
        return el != null;
      });

      this.itemsToShow = 30;
      this.isLoading = true;
      document.querySelector(".input").value = '';
      this.hideKeyboard();
  
      if (this.myKeyboard) {
        this.myKeyboard.clearInput();
      }
  
      setTimeout(() => {
        this.displayedSignals = this.filteredByDevice.slice(0, this.itemsToShow);
        this.isLoading = false;
      }, 300);

    },

    showKeyboard() {

      document.querySelector('#keyboard').style.display = 'block';
    },
    hideKeyboard() {

      document.querySelector('#keyboard').style.display = 'none';
     
    },
    handleClickOutside(event) {
        const keyboardElement = document.getElementById('keyboard');
        const inputElement = document.querySelector('.input'); 
        if (keyboardElement && !keyboardElement.contains(event.target) && !inputElement.contains(event.target)) {
          this.hideKeyboard();
        }
      },
    typeValue(id) {
      if (id == 0) {
        return "ANALOGUE";
      } else {
        return "DIGITAL";
      }
    },
    vRawValue(idRaw) {
      let result = parseInt(valueRaw[idRaw].value);
      if (isNaN(result)) {
        return null;
      } else {
        return result;
      }
    },
    vEscalatedValue(idEsc) {
      return valueEscalated[idEsc].value;
    },
    editLimitSignal(idSig) {
      return signalList.editLimits(idSig);
    },
  },

};
