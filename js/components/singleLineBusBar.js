components.singleLineBusBar = {
    props: ['gen1BreakerSignalId', 'gen2BreakerSignalId', 'gen3BreakerSignalId', 'gen4BreakerSignalId', 'shorePowerBreakerSignalId', 'busTideBreakerSignalId'],
    template: /*html*/`
                
                <div class="singleline-tree2" data-cables="5" ref="singleLineBusBarElement">

                    <div class="horz" :style="{'display': (gen1Gen2Class === 'active') ? 'block' : 'none'}" style="position: absolute; top: 72.5px; left: 579px; height: 15px;">
                        <div class="item active" data-link="">
                            <div class="cable" style="width: 182px">
                                <div class="link">
                                </div>
                            </div>
                        </div>
                     </div>

                     <div class="horz" :style="{'display': (shoreGen3Class === 'active' || gen3Gen4Class === 'active') ? 'block' : 'none'}" style="position: absolute; top: 72.5px; right: 1124px; height: 15px;">
                        <div class="item active" data-link="">
                            <div class="cable" style="width: 164px">
                                <div class="link">
                                </div>
                            </div>
                        </div>
                     </div>

                    <div class="horz">
                        <div :class= '[gen1Gen2Class]' class="item" data-link="">
                            <div class="cable">
                                <div class="link"></div>
                            </div>
                        </div>
                        <div :class= '[busTideClass]' class="item" data-link="true">
                            <div class="cable">
                                <div class="link"></div>
                            </div>
                        </div>
                        <div class="item" data-link="" :class= '[shoreGen3Class]'>
                            <div class="cable">
                                <div class="link"></div>
                            </div>
                        </div>
                        <div class="item" data-link="" :class= '[gen3Gen4Class]'>
                            <div class="cable">
                                <div class="link"></div>
                            </div>
                        </div>
                    </div>
                    <div class="vert">
                        <div class="item" :class= '[gen1Class]' data-link="true">
                            <div class="cable">
                                <div class="link"></div>
                            </div>
                        </div>
                        <div class="item"  :class= '[gen2Class]' data-link="true">
                            <div class="cable">
                                <div class="link"></div>
                            </div>
                        </div>
                        <div class="item"  :class= '[shorePowerClass]' data-link="true">
                            <div class="cable">
                                <div class="link"></div>
                            </div>
                        </div>
                        <div class="item"  :class= '[gen3Class]' data-link="true">
                            <div class="cable">
                                <div class="link"></div>
                            </div>
                        </div>
                        <div class="item"  :class= '[gen4Class]' data-link="true">
                            <div class="cable">
                                <div class="link"></div>
                            </div>
                        </div>
                    </div>

                    <span style="display: none;">{{gen1BreakerValue}}</span> 
                    <span style="display: none;">{{gen2BreakerValue}}</span> 
                    <span style="display: none;">{{gen3BreakerValue}}</span> 
                    <span style="display: none;">{{gen4BreakerValue}}</span> 
                    <span style="display: none;">{{shorePowerBreakerValue}}</span> 
                    <span style="display: none;">{{busTideBreakerValue}}</span> 

                    <span style="display: none;">{{valueRewindModeGen1Breaker}}</span> 
                    <span style="display: none;">{{valueRewindModeGen2Breaker}}</span> 
                    <span style="display: none;">{{valueRewindModeGen3Breaker}}</span> 
                    <span style="display: none;">{{valueRewindModeGen4Breaker}}</span> 
                    <span style="display: none;">{{valueRewindModeShorePowerBreaker}}</span> 
                    <span style="display: none;">{{valueRewindModeBusTideBreaker}}</span> 

                </div>

`,
    data() {
        return {
                gen1BreakerValue: valueRaw[this.gen1BreakerSignalId],
                gen2BreakerValue: valueRaw[this.gen2BreakerSignalId],
                gen3BreakerValue: valueRaw[this.gen3BreakerSignalId],
                gen4BreakerValue: valueRaw[this.gen4BreakerSignalId],
                shorePowerBreakerValue: valueRaw[this.shorePowerBreakerSignalId],
                busTideBreakerValue: valueRaw[this.busTideBreakerSignalId],
                gen1Class: '',
                gen2Class: '',
                gen3Class: '',
                gen4Class: '',
                shorePowerClass: '',
                busTideClass: '',
                gen1Gen2Class: '',
                shoreGen3Class: '',
                gen3Gen4Class: '',

                valueRewindModeGen1Breaker: null,
                valueRewindModeGen2Breaker: null,
                valueRewindModeGen3Breaker: null,
                valueRewindModeGen4Breaker: null,
                valueRewindModeShorePowerBreaker: null,
                valueRewindModeBusTideBreaker: null,

                rewindMode: rewindValuesMode,
                globalRewind: globalRewindUpdate,

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
    mounted(){
        this.rewindCheck()

        // Observer for push id to global array
        const singleLineBusBarElement = this.$refs.singleLineBusBarElement;
        if (singleLineBusBarElement) {
            let observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        let ids = [this.gen1BreakerSignalId, this.gen2BreakerSignalId, this.gen3BreakerSignalId, this.gen4BreakerSignalId, this.shorePowerBreakerSignalId, this.busTideBreakerSignalId];
                    
                        for(let id of ids) {
                            if (!visibleHistoricalValue.includes(id)) {
                                visibleHistoricalValue.push(id);
                            }
                        }
                    } else {
                        let ids = [this.gen1BreakerSignalId, this.gen2BreakerSignalId, this.gen3BreakerSignalId, this.gen4BreakerSignalId, this.shorePowerBreakerSignalId, this.busTideBreakerSignalId];
                    
                        for(let id of ids) {
                            const index = visibleHistoricalValue.indexOf(id);
                            if (index > -1) {
                                visibleHistoricalValue.splice(index, 1);
                            }
                        }
                    }
                    
                });
            });
            observer.observe(singleLineBusBarElement);
        } else {
            console.error('Ref element is not available.');
        }

    },
    updated(){
        this.rewindCheck()

    },
    methods: {
        renderBusbar(gen1BreakerValue, gen2BreakerValue, gen3BreakerValue, gen4BreakerValue, shorePowerBreakerValue, busTideBreakerValue) {

            this.gen1Class = gen1BreakerValue == 1 ? 'active' : '' 
            this.gen2Class = gen2BreakerValue == 1 ? 'active' : '' 
            this.shorePowerClass = shorePowerBreakerValue == 1 ? 'active' : '' 
            this.gen3Class = gen3BreakerValue == 1 ? 'active' : '' 
            this.gen4Class = gen4BreakerValue == 1 ? 'active' : '' 
            this.busTideClass = busTideBreakerValue == 1 ? 'active' : ''

            this.gen1Gen2Class = gen1BreakerValue == 1 || gen2BreakerValue == 1 || busTideBreakerValue == 1 ? 'active' : '' 
            this.shoreGen3Class = shorePowerBreakerValue == 1 || gen3BreakerValue == 1 || busTideBreakerValue == 1 ? 'active' : '' 
            this.gen3Gen4Class = gen3BreakerValue == 1 || gen4BreakerValue == 1 || busTideBreakerValue == 1 ? 'active' : '' 

        },
        rewindCheck() {
            if (!this.rewindMode) {
        
                this.gen1BreakerValue = valueRaw[this.gen1BreakerSignalId];
                this.gen2BreakerValue = valueRaw[this.gen2BreakerSignalId];
                this.gen3BreakerValue = valueRaw[this.gen3BreakerSignalId];
                this.gen4BreakerValue = valueRaw[this.gen4BreakerSignalId];
                this.shorePowerBreakerValue = valueRaw[this.shorePowerBreakerSignalId];
                this.busTideBreakerValue = valueRaw[this.busTideBreakerSignalId];
        
                this.renderBusbar(
                    this.gen1BreakerValue, 
                    this.gen2BreakerValue, 
                    this.gen3BreakerValue, 
                    this.gen4BreakerValue, 
                    this.shorePowerBreakerValue, 
                    this.busTideBreakerValue
                );
        
            } else {
                let ids = [
                    this.gen1BreakerSignalId, 
                    this.gen2BreakerSignalId, 
                    this.gen3BreakerSignalId, 
                    this.gen4BreakerSignalId, 
                    this.shorePowerBreakerSignalId, 
                    this.busTideBreakerSignalId
                ];
        
                let someIdVisible = ids.some(id => visibleHistoricalValue.includes(id));
        
                if (someIdVisible) {
                    setTimeout(() => {
                        let values = {};
                        for (let id of ids) {
                            if (id in valueHistorical) {
                                values[id] = parseFloat(valueHistorical[id][0].Value);
                            }
                        }
        
                        this.valueRewindModeGen1Breaker = values[this.gen1BreakerSignalId] || null;
                        this.valueRewindModeGen2Breaker = values[this.gen2BreakerSignalId] || null;
                        this.valueRewindModeGen3Breaker = values[this.gen3BreakerSignalId] || null;
                        this.valueRewindModeGen4Breaker = values[this.gen4BreakerSignalId] || null;
                        this.valueRewindModeShorePowerBreaker = values[this.shorePowerBreakerSignalId] || null;
                        this.valueRewindModeBusTideBreaker = values[this.busTideBreakerSignalId] || null;
        
                        this.renderBusbar(
                            this.valueRewindModeGen1Breaker, 
                            this.valueRewindModeGen2Breaker, 
                            this.valueRewindModeGen3Breaker, 
                            this.valueRewindModeGen4Breaker, 
                            this.valueRewindModeShorePowerBreaker, 
                            this.valueRewindModeBusTideBreaker
                        );
                    }, 500);
                } else {
                    return;
                }
            }
        },
    }
};

