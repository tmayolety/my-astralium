components.iconLayout = {
    
    props: ['signalId', 'signalIdTwo', 'x', 'y', 'oneColor', 'zeroColor', 'twoColor', 'size', 'icon'],
    template: /*html*/`
        <div ref="iconLayoutElement">
            <div>
                <i class="ui" :class="['icon-size-' + size, currentColor]" :style="styleObject" :id="svgId"></i>
                <span style="display: none;">{{ value }}</span>
                <span style="display: none;">{{ valueTwo }}</span>
                <span style="display: none;">{{ valueRewindMode }}</span>
                <span style="display: none;">{{ valueRewindModeTwo }}</span>
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
            valueRewindMode: null,
            valueRewindModeTwo: null,
            rewindMode: rewindValuesMode,
            globalRewind: globalRewindUpdate,
            currentColor: 'color-fill-type-dark' 
        };
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
        this.value = valueRaw[this.signalId];
        if (this.signalIdTwo) {
            this.valueTwo = valueRaw[this.signalIdTwo];
        }
        const svgContent = iconRegistry[this.icon];
        $("#" + this.svgId).html(svgContent);
        this.rewindCheck();

        // Observer for push id to global array
        const iconLayoutElement = this.$refs.iconLayoutElement;
        if (iconLayoutElement) {
            let observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (!visibleHistoricalValue.includes(this.signalId)) {
                            visibleHistoricalValue.push(this.signalId);
                        }
                        if (this.signalIdTwo && !visibleHistoricalValue.includes(this.signalIdTwo)) {
                            visibleHistoricalValue.push(this.signalIdTwo);
                        }
                    } else {
                        const index = visibleHistoricalValue.indexOf(this.signalId);
                        if (index > -1) {
                            visibleHistoricalValue.splice(index, 1);
                        }
                        if (this.signalIdTwo) {
                            const indexSignalIdTwo = visibleHistoricalValue.indexOf(this.signalIdTwo);
                            if (indexSignalIdTwo > -1) {
                                visibleHistoricalValue.splice(indexSignalIdTwo, 1);
                            }
                        }
                    }
                });
            });
            observer.observe(iconLayoutElement);
        } else {
            console.error('Ref element is not available.');
        }
    },

    updated() {
        this.rewindCheck();
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

        rewindCheck() {
            if (!isNaN(this.value) && !this.rewindMode) {
                this.currentColor = this.getIconColor(this.value, this.valueTwo);
            } else {
                if(visibleHistoricalValue.includes(this.signalId) || visibleHistoricalValue.includes(this.signalIdTwo)){
                setTimeout(() => {
                    if (this.signalId in valueHistorical) {
                        this.valueRewindMode = parseFloat(valueHistorical[this.signalId][0].Value).toFixed(this.decimals);
                        this.currentColor = this.getIconColor(this.valueRewindMode, this.valueRewindModeTwo);
                    }
                    if (this.signalIdTwo && this.signalIdTwo in valueHistorical) {
                        this.valueTwoRewindMode = parseFloat(valueHistorical[this.signalIdTwo][0].Value).toFixed(this.decimals);
                        this.currentColor = this.getIconColor(this.valueRewindMode, this.valueTwoRewindMode);
                    }
                }, 500);
            }else{
                return;
            }
            }
        },
    }
};