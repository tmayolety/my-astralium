components.alarmSystemHeader = {
    props: [],
    template:/*html*/`
    <li class="header--alerts" :data-alert="alarmAlert" :data-alert-num="activeAlarmCounter" id="headerAlertIcon" style="width: 26em;">
        <div class="header-section--btn container" onclick="$(this).parent().toggleClass('active');">
        <svg class="ui icon " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g><path d="M99.22,85.06,54.81,9.68a5.37,5.37,0,0,0-9.35,0L1.05,85.06a4.06,4.06,0,0,0,0,5.26,5.06,5.06,0,0,0,4.68,2.73H94.55a5.06,5.06,0,0,0,4.67-2.73A4.82,4.82,0,0,0,99.22,85.06ZM55.59,77.27c0,.91-.52,1.36-1.56,1.36h-8a1.21,1.21,0,0,1-1.37-1.36v-8a1.21,1.21,0,0,1,1.37-1.36h8c1,0,1.56.46,1.56,1.36Zm0-29.61a11.46,11.46,0,0,1-.39,2.73L52.86,62.86c-.26.91-.77,1.36-1.55,1.36H49.16c-1,0-1.55-.45-1.55-1.36L45.07,50.58a12,12,0,0,1-.39-2.92V40.85c0-1.17.65-1.76,2-1.76h7c1.3,0,2,.59,2,1.76Z"></path></g></svg>
            <div  class="header-section--btn-list sub-container" style=" overflow:hidden; height:100px; " >
         <h6 v-if="activeAlarmCounter > 0" :style="{ 'font-size': '14px', 'margin-top': (activeAlarmCounter > 2 ? '30px' : (activeAlarmCounter === 1 ? '45px' : '35px')) }">
            <span v-for="(alarm, index) in alarms" :key="alarm.alarmId" style="display:block; height:14px;" v-show="alarm.Status != 3">
              {{alarm.alarmId}} - {{getAlarmName(alarm.alarmId)}} 
            </span>
          </h6>
          
        <h6 style="font-size: 14px; margin-top: 45px;" v-if="activeAlarmCounter == 0">
          <span style="display:block; height:14px; float: left;">No active alarms</span>
          <span v-if="ackAlarmCounter > 0" style="display:block; height:14px;">, {{ackAlarmCounter}} acknowledged</span>
        </h6>
            </div>
        </div>
        <div class="ui header-popup" id="header-popup-alerts" style="min-width:800px">
        <div class="ui grid type1 cols-1 pad-no gap-mini singleine">
        <div class="ui grid cols-1 col sm-1 gap-mini pad-no has-header">
        <header class="ui col">
        <font>System Alarms</font>
        <span class="gradients">
        <span class="gradient-left"></span>
        <span class="gradient-right"></span>
        </span>
        
        <button class="ui btn sm icon primary colored icon-only active" onclick="$(this).parent().parent().parent().parent().parent().removeClass('active');">
        <svg class="ui icon" id="close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M98.74,81.26q2.52,2.14,0,4.47l-13,13q-2.33,2.33-4.47,0L50,67.67,18.74,98.74q-2.14,2.52-4.47,0l-13-13q-2.33-2.33,0-4.47L32.33,50,1.26,18.93q-2.33-2.33,0-4.47l13-13.2q2.32-2.33,4.47,0L50,32.33,81.26,1.26c1.56-1.68,3-1.68,4.47,0l13,13q2.33,2.32,0,4.47L67.67,50Z"></path></svg>
        </button>
        </header>
        
        <div class="ui col med-1 bg-no">
        <ul  v-for="(alarm, index) in alarms" :key="alarm.alarmId"  class="ui table size-mini resp singleline gap-no" id="headerActiveAlarms">
            <li v-if="alarm.Status != 3" data-section="activeAlarms"  class="glow"  onclick="menuNavigation.navigate(this);">
            <div class="col-50 align-top-center" :class="colorStatus(alarm.alarmType, alarm.alarmTriggered)">{{alarm.alarmId}}</div>
            <div class="col-150 align-top-center" :class="colorStatus(alarm.alarmType, alarm.alarmTriggered)">{{alarm.alarmTime}}</div>
            <div class="col-150 align-middle-center" :class="colorStatus(alarm.alarmType, alarm.alarmTriggered)"><span>{{getGroupName(alarm.Group)}}</span></div>
            <div class="col-300-min" :class="colorStatus(alarm.alarmType, alarm.alarmTriggered)"><span>{{getAlarmName(alarm.alarmId)}}</span></div>
            </li>
        </ul>
        </div>
        </div>
        </div>
        <input type="hidden" id="activeAlarmNumber" :value="activeAlarmCounter"/>
        </div>
     </li>
    `,
    data() {
  

        return {
            alarms: ActiveAlarmList,
            alarmAlert: false,
            colors: {
                color1:"color-bg-type-danger",
                color2:"color-bg-type-danger-dark",
                color3:"color-bg-type-warning2",
                color4:"color-bg-type-warning2-dark",
            },
            activeAlarmCounter:  0,
            ackAlarmCounter: 0,
            swingInterval: '',
        };
    },
    watch: {
        alarms: {
           handler: 'handleAlarmsChange',
           deep: true,
        },
     },

    updated() {
       
     
    },
    mounted() {
        
      this.handleAlarmsChange()
    },
    methods:{
        handleAlarmsChange() {

                this.activeAlarmCount();

                clearInterval(this.swingInterval);

                this.createInterval();
            
       
         },

        activeAlarmCount(){
            let counter = 0
            let ackCounter = 0
            $.each( this.alarms, function( key, alarm ) {
                if (alarm.Status !== 3) { counter = counter + 1; } else { ackCounter = ackCounter + 1 }
            });

            if (counter > 0) {
                this.alarmAlert = true;
                $('#headerLogo').attr('data-alert', 'true');
            

            }else{
                this.alarmAlert = false;
                $('#headerLogo').attr('data-alert', '');
             
            }
            this.activeAlarmCounter = counter
            this.ackAlarmCounter = ackCounter

        
        },
        getAlarmName(id) {
            if (typeof alarmData[parseInt(id)] !== 'undefined') {
                return alarmData[parseInt(id)].alarmDescription;
            } else {
                return "NOT DEFINED IN DATABASE";
            }
        },
        getGroupName(id){
            let groupName;
            if (typeof groupList[parseInt(id)] !== 'undefined') {
                groupName = groupList[parseInt(id)].Name;
            }  else {
                    groupName = "NOT DEFINED IN DATABASE";
                }
            
            return groupName;

        },
        colorStatus(type, trigger){
            switch(`${type}-${trigger}`){
                case '0-0':
                    return this.colors.color2;
                case '0-1':
                    return this.colors.color1;
                case '1-0':
                    return this.colors.color4;
                case '1-1':
                    return this.colors.color3;
                default:
                    return null;
            }
        },
        createInterval() {
            if (this.activeAlarmCounter > 3) {
                this.swingInterval = setInterval(() => {
                    $(".sub-container").stop().animate({ scrollTop: -40 }, 400, 'swing', function () {
                        $(this).scrollTop(0).find('span:last').after($(' span:first', this));
                    });
                }, 2000);
            }
        },
    }
};





