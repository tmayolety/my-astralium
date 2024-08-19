components.loader = {
    props: [],
    template: /*html*/ `
    <div v-if="showLoader" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: black; opacity: 0.6; pointer-events: all; z-index: 9999;">
    <span class="loader" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);"></span>
    </div>
  
      `,
    data() {
      return {
        showLoader: loading,
      };
    },
    created(){
        eventBus.subscribe("loadingEventChanged", (newVal) => {
            this.showLoader = newVal;
          });
    },
    watch: {
        showLoader(newVal, oldVal){
            if(newVal == true){
                this.showLoader = true
            }else{
                this.showLoader = false
            }
        }
    }
  };
  