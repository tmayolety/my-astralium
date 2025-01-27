components.singleLineBusBar = {
    props: ['gen1BreakerSignalId', 'gen2BreakerSignalId',   'shorePowerBreakerSignalId'],
    template:/*html*/ `
                <div class="singleline-tree2" data-cables="3" style="">

                    <div class="horz">

                        <div class="item" :class= '[gen1Gen2Class]' data-link="true">
                            <div class="cable">
                                <div class=""></div>
                            </div>
                        </div>
                        
                        <div class="item" :class= '[gen1Gen2Class]'  data-link="">
                            <div class="cable">
                                <div class=""></div>
                            </div>
                        </div>
                        
                    </div>

                    <div class="vert" style="height:40px">
                        <div class="item" :class= '[gen1Class]' data-link="">
                            <div class="cable" >
                                <div class="link" :style="{ height: gen1Class != 'active' ? '25px' : '15px' }"></div>
                            </div>
                        </div>
                        <div class="item"  :class= '[shorePowerClass]' data-link="">
                            <div class="cable">
                                <div class="link" :style="{ height: shorePowerClass != 'active' ? '25px' : '15px' }"></div>
                            </div>
                        </div>
                        <div class="item"  :class= '[gen2Class]' data-link="">
                            <div class="cable" >
                                <div class="link" :style="{ height: gen2Class != 'active' ? '25px' : '15px' }"></div>
                            </div>
                        </div>
                        
                    </div>

                </div>
                <span style="display: none;">{{gen1BreakerValue}}</span> 
                <span style="display: none;">{{gen2BreakerValue}}</span> 
                <span style="display: none;">{{shorePowerBreakerValue}}</span> 
`,
    data() {
        return {
                gen1BreakerValue: valueRaw[this.gen1BreakerSignalId],
                gen2BreakerValue: valueRaw[this.gen2BreakerSignalId],
                shorePowerBreakerValue: valueRaw[this.shorePowerBreakerSignalId],
                gen1Class: null,
                gen2Class: null,
                shorePowerClass: null,
                gen1Gen2Class: null
               }
    },
    updated()
    {
        this.renderBusbar()
    },
    mounted()
    {
        this.renderBusbar()

    }, methods: {
        renderBusbar() {

            this.gen1Class = this.gen1BreakerValue == 1 ? 'active' : '';
            this.gen2Class = this.gen2BreakerValue == 1 ? 'active' : '';
            this.shorePowerClass = (this.shorePowerBreakerValue == 1 && this.gen1BreakerValue != 1 && this.gen2BreakerValue != 1) ? 'active' : '';

            
            this.gen1Gen2Class = (this.gen1BreakerValue == 1 || this.gen2BreakerValue == 1 || this.shorePowerBreakerValue == 1) ? 'active' : '';

        },
        reset() {

        }
    }
};

