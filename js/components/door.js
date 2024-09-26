components.door = {
    props: ['signalId', 'x', 'y', 'oneColor', 'zeroColor', 'size', 'height', 'width', 'valueMode'],
    template: /*html*/`
                <i class="ui" :class='[iconColor]' :style="styleObject" v-bind="{ id: svgId}" ref="doorElement">
                    <svg :width="w" :height="h"  :viewBox.camel="viewBox" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0" y="0" :width="w" :height="h"/>
                    </svg>
                    <span style="display: none;">{{value}}</span>
                </i>
                `,
    data() {
        return {
            value: null,
            svgId: (Math.floor(Math.random() * (1000 - 100))) + Date.now() + '_' + this.signalId,
            iconColor: null,
            w: this.width,
            h: this.height,
            viewBox: '0 0 '+this.width+ ' '+ this.height,
            styleObject: {
                position: 'absolute',
                top: this.y + '%',
                left: this.x + '%',
                borderRadius: '50%'
            }
        }
    },
    mounted(){
        this.checkValueMode()
    },
    updated() {
        if (!isNaN(this.value)) {
            this.checkValueMode()
            this.getIconColor(this.value)
        }
    },
    methods: {
        checkValueMode(){
            switch (this.valueMode) {
                case "filtered":
                    this.value = valueFiltered[this.signalId];
                    break;
                case "escalated":
                    this.value = valueEscalated[this.signalId];
                    break;
                default:
                case "raw":
                    this.value = valueRaw[this.signalId];
                    break;
            }
            if (this.value == null){
                this.value = 'N/A'
            }
        },
        getIconColor(value){
            if (value  == 1) {
                this.iconColor = 'glow color-fill-type-' + this.oneColor ;
            } else if (value  == 0) {
                this.iconColor = 'glow color-fill-type-'+ this.zeroColor ;
            } else {
                this.valueText = 'N/A'
                this.iconColor = 'glow color-fill-type-dark';
            }
        },

    }
};