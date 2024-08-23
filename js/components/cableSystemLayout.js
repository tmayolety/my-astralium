components.cableSystemLayout = {
    props: ['signalId', 'cableClass', 'NC'],
    template: /*html*/`
            <div ref="cableSystemLayoutElement" :class='[cableClass, activeOn]'>
            <span style="display: none;"> {{value}} </span>
            </div>
`,
    data() {
        return {
                value:null,
                activate: this.NC,
                activeOn: '',
       
        }
    },

    mounted() {

        if (typeof (this.NC) == "undefined") {
            this.activate = 1
        }

        if (!isNaN(this.value)) {
            this.value = valueRaw[this.signalId]
            this.updateStatus(this.value)
        }


    },
    updated(){
        if (!isNaN(this.value)) {
            this.value = valueRaw[this.signalId]
            this.updateStatus(this.value)
        }
    },
    methods: {
        updateStatus(value){
            if(value == this.activate ){
                  this.activeOn = 'active'
                }else{
                    this.activeOn = ''
                }
        },
    }
};

