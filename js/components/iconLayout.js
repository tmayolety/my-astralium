components.iconLayout = {
    
    props: ['signalId', 'signalIdTwo', 'x', 'y', 'oneColor', 'zeroColor', 'twoColor', 'size', 'icon'],
    template: /*html*/`
        <div ref="iconLayoutElement">
            <div>
                <i class="ui" :class="['icon-size-' + size, currentColor]" :style="styleObject" :id="svgId"></i>
                <span style="display: none;">{{ value }}</span>
                <span style="display: none;">{{ valueTwo }}</span>
            </div>
        </div>
    `,

    data() {
        return {
            value: valueRaw[this.signalId] || null,
            valueTwo: this.signalIdTwo ? valueRaw[this.signalIdTwo] : null,
            svgId: (Math.floor(Math.random() * (1000 - 100))) + Date.now() + '_' + this.signalId,
            styleObject: {
                position: 'absolute',
                top: this.y + '%',
                left: this.x + '%'
            },
            currentColor: 'color-fill-type-dark' 
        };
    },
    mounted() {
        this.value = valueRaw[this.signalId];
        if (this.signalIdTwo) {
            this.valueTwo = valueRaw[this.signalIdTwo];
        }
        const svgContent = iconRegistry[this.icon];
        $("#" + this.svgId).html(svgContent);

        if (!isNaN(this.value)) {
            this.currentColor = this.getIconColor(this.value, this.valueTwo);
        }

    },

    updated() {
        if (!isNaN(this.value)) {
            this.currentColor = this.getIconColor(this.value, this.valueTwo);
        }
    },

    methods: {
        getIconColor(value, valueTwo) {
            let color;
            if (isNaN(value) || value === 'undefined') {
                color = 'color-fill-type-dark';
            } else {
                if (parseInt(value) != 0) {
                    color = 'glow color-fill-type-' + this.oneColor;
                } else {
                    color = 'glow color-fill-type-' + this.zeroColor;
                }
            }
            if (this.signalIdTwo && parseInt(valueTwo) != 0 && !isNaN(valueTwo)) {
                color = 'glow color-fill-type-' + this.twoColor;
            }
            return color;
        },

    }
};