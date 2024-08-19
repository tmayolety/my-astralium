components.cableSystemLayout = {
    props: ['signalId', 'cableClass', 'NC'],
    template: /*html*/`
            <div ref="cableSystemLayoutElement" :class='[cableClass, activeOn]'>
            <span style="display: none;"> {{value}} </span>
            <span style="display: none;"> {{valueRewindMode}} </span>
            </div>
`,
    data() {
        return {
                value:null,
                activate: this.NC,
                activeOn: '',
                valueRewindMode: null,
                rewindMode: rewindValuesMode,
                globalRewind: globalRewindUpdate
        }
    },
    created() {
        eventBus.subscribe('rewindValuesModeChanged', (newVal) => {
            this.rewindMode = newVal;
        });
        eventBus.subscribe('globalRewindUpdateChanged', (newVal) => {
            this.globalRewind = newVal;
        });
    },

    watch: {
        rewindMode(newVal, oldVal) {
            this.rewindCheck();
        },
        globalRewind(newVal, oldVal) {
            this.rewindCheck();
        },
    },
    mounted() {

        if (typeof (this.NC) == "undefined") {
            this.activate = 1
        }

        this.rewindCheck()

         // Observer for push id to global array
         const cableSystemLayoutElement = this.$refs.cableSystemLayoutElement;
         if (cableSystemLayoutElement) {
             let observer = new IntersectionObserver((entries) => {
                 entries.forEach(entry => {
                     if (entry.isIntersecting) {
                         if (!visibleHistoricalValue.includes(this.signalId)) {
                             visibleHistoricalValue.push(this.signalId);
                         }
                        
                     } else {
                         const index = visibleHistoricalValue.indexOf(this.signalId);
                         if (index > -1) {
                             visibleHistoricalValue.splice(index, 1);
                         }
                       
                     }
                 });
             });
             observer.observe(cableSystemLayoutElement);
         } else {
             console.error('Ref element is not available.');
         }

    },
    updated(){
        this.rewindCheck();
    },
    methods: {
        updateStatus(value){
            if(value == this.activate ){
                  this.activeOn = 'active'
                }else{
                    this.activeOn = ''
                }
        },
        rewindCheck() {
            if (!isNaN(this.value) && !this.rewindMode) {
                this.value = valueRaw[this.signalId]
                this.updateStatus(this.value)
            }else {
                if(visibleHistoricalValue.includes(this.signalId)){
                setTimeout(() => {
                    if (this.signalId in valueHistorical) {
                        this.valueRewindMode = parseFloat(valueHistorical[this.signalId][0].Value)
                        this.updateStatus(this.valueRewindMode)
                    }
                }, 500);

            }else{
                    return;
                }
            }
        },
    }
};

