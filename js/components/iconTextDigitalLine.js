components.iconTextDigitalLine = {
    props: ['signalId', 'icon', 'title', 'size', 'zeroColor', 'oneColor', 'valueMode', 'elementSize', 'activeNumber', 'inactiveNumber'],
    template:   /*html*/`
   
        <div class="col-30 align-top-center"  ref="iconTextDigitalElement">
            <i class="ui" :class= '[iconSize, iconColor]' v-bind="{ id: rndID}"></i>
            <span style="display: none;">{{value}}</span>
        </div>

        <div v-if="showTitle"><span :class= '[valueTextColor]'> {{title}}</span></div>


         `,

    data() {
        return {
            value: valueRaw[this.signalId],
            iconSize: 'icon-size-' + this.size,
            iconColor: null,
            rndID:  (Math.floor(Math.random() * (1000 - 100))) + Date.now() + '_' + this.signalId,
            valueTextColor: null,
            elementSizeClass: null,
            showTitle: false,

        }
    },
    mounted(){

        const svgContent = iconRegistry[this.icon]
        $( "#"+this.svgId).html(svgContent)

        if ( typeof(this.title) != "undefined" )  { this.showTitle = true }
        switch (this.elementSize){
            case "small":
                this.elementSizeClass = "h-mini-20";
                break;
            case "large":
                this.elementSizeClass = "h-large-40";
                break;
            default:
                this.elementSizeClass = "";
        }

        if (!isNaN(this.value)) {
            this.iconColor = this.getIconColor(this.value)
            this.valueTextColor = this.getTextColor(this.value)
        }



    },
    updated(){

        const svgContent = iconRegistry[this.icon];
        $("#" + this.rndID).html(svgContent);
        
        if (!isNaN(this.value)) {
            this.iconColor = this.getIconColor(this.value)
            this.valueTextColor = this.getTextColor(this.value)
        }
    },

    methods:{
        getIconColor(value){
            let color
            if ((value == 1 ) || (value == this.activeNumber && this.activeNumber))  {
                color = 'glow color-fill-type-' + this.oneColor + '-light' ;
            } else if ((value == 0 ) || (value == this.inactiveNumber && this.inactiveNumber)) {
                color = 'glow color-fill-type-'+ this.zeroColor ;
            } else {
                color = null
            }
            return color
        },
        getTextColor(value){
            let color
            if ((value == 1 ) || (value == this.activeNumber && this.activeNumber))  {
                color = 'color-text-type-' + this.oneColor + '-light';
            } else if ((value == 0 ) || (value == this.inactiveNumber && this.inactiveNumber)) {
                color = 'color-text-type-white' ;
            }
            return color
        },
    }
};

