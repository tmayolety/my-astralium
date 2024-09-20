components.alarmSystem = {
    props: [],
    template:/*html*/ `
     <div class="ui col mini-1 bg-no h-xl-290 h-mini-650">
        <div class="col-content overflow">
            <ul class="ui table size-sm resp">
            <li class="thead" id="activeAlarmHeader">
            <div class="col-60 align-middle-center hidden-phone">
            <span>Reset</span>
            </div>
            <div class="col-50 align-middle-center"><span>ID</span></div>
            <div class="col-170 align-middle-center hidden-phone"><span>Time (GMT)</span></div>
            <div class="col-170 align-middle-center"><span>Group</span></div>
            <div class="col-320-min align-middle-center">
            <span>Description</span>
            </div>
            <div class="col-110 align-middle-center hidden-phone">
            <span>Acknowledged</span>
            </div>
            <div class="col-110 align-middle-center hidden-phone">
            <span >Muted</span>
            </div></li>
            <li v-for="(alarm, index) in alarms" :key="alarms.id">
            <div class="col-60 align-middle-center  glow pad-no hidden-phone">
            <button class="ui btn sm info radius-no resp" v-on:click="resetAlarm(index, alarm.Status)">Reset</button></div>
            <div class="col-50 glow align-middle-center" :class="colorStatus(alarm.alarmType, alarm.alarmTriggered)"><span>{{alarm.alarmId}}</span></div>
            <div class="col-170  align-middle-center glow hidden-phone" :class="colorStatus(alarm.alarmType, alarm.alarmTriggered)"><span>{{alarm.alarmTime}}</span></div>
            <div class="col-170 glow align-middle-center" :class="colorStatus(alarm.alarmType, alarm.alarmTriggered)"><span>{{getGroupName(alarm.Group)}}</span></div>
            <div class="col-300-min align-middle-center glow" :class="colorStatus(alarm.alarmType, alarm.alarmTriggered)"><span>{{getAlarmName(alarm.alarmId)}}</span></div>
            <div class="col-110 align-middle-center dev-statusChange glow pad-no hidden-phone">
            <button :class=[colorAck(alarm.Status)]  v-on:click="statusModify(index, alarm.Status, 3)">Acknowledge</button></div>
            <div class="col-110 align-middle-center dev-statusChange glow pad-no hidden-phone" >
            <button :class=[colorMute(alarm.Status)] :style="[statusWarning(index)]" v-on:click="statusModify(index, alarm.Status, 2)">Mute</button></div>
            </li>
            </ul>
        </div>
     </div>
    `,
    data() {
        return {
            alarms: ActiveAlarmList,
            colors: {
                color1:"color-bg-type-danger",
                color2:"color-bg-type-danger-dark",
                color3:"color-bg-type-warning2",
                color4:"color-bg-type-warning2-dark",
            },
            statusAck:{
                statusAct:"ui btn sm primary radius-no resp active",
                statusNoAct:"ui btn sm primary radius-no resp"
            },
            statusMute:{
                statusOnMute:"ui btn sm secondary radius-no resp active",
                statusNoMute:"ui btn sm secondary radius-no resp"
            },
            warningMute:{
                warningOn:"display:none",
                warningOff:"display: unset"
            },

        }
    },
    updated () {

        clearTimeout(refreshAlarmLogTimeout);
        refreshAlarmLogTimeout = setTimeout(function () {
            alarms.updateAlarmLog();
        }, 1500 + (Math.floor(Math.random() * 2000) + 100));

    },
    mounted()
    {
        alarms.activeAlarmShow();
    },
    methods:{
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
        statusModify(alarmId, actualStatus, targetStatus){

                var sendRequest = true;

                //BLOCK MUTE IF MUTED OR ACK
                if (targetStatus == 2 && (actualStatus == 3 || actualStatus == 2)) { sendRequest = false; }

                //BLOCK ACK IF NOT MUTED OR IS ACK
                if (targetStatus == 3 && (actualStatus != 2 || actualStatus == 3)) { sendRequest = false; }

                //PROFILE CHECK
                if (!helpers.profileCheck()) {
                    helpers.privilegesPopUp();
                    sendRequest = false;
                }

                //UNNATENDED ACK CHECK
                if (!helpers.ackCheck() && (targetStatus == 3 || targetStatus == 2 || targetStatus == 0)) {
                    helpers.ackPopUp();
                    sendRequest = false;
                }

                if (actualStatus != 3 && targetStatus == 0) {
                    helpers.resetPopUp();
                    sendRequest = false;
                }

                if (sendRequest) {
                    var data = JSON.stringify({
                        "Id": parseInt(alarmId),
                        "Status": parseInt(targetStatus),
                        "Source":  parseInt($('#ScreenLocationId').val())
                    });

                    var settings = {
                        "async": true,
                        "crossDomain": true,
                        "url": ACTIVE_SERVER + ":" + API.Port + "/updateAlarmStatus",
                        "method": "POST",
                        "headers": {
                            "content-type": "application/json"
                        },
                        "processData": false,
                        "data": data
                    }

                    $.ajax(settings).done(function (response) {
                        console.log(response);
                    });
                }

        },
        colorAck(status){
            return status == 3 ? this.statusAck.statusAct : this.statusAck.statusNoAct;
        },
        colorMute(status){
            if(status == 2 || status == 3 ){
                return this.statusMute.statusOnMute
            }else{
                return this.statusMute.statusNoMute
            }
        },
        statusWarning(index){
            if(ActiveAlarmList[index].alarmType == 1){
                return this.warningMute.warningOn
            }else if(ActiveAlarmList[index].alarmType == 0){
                return this.warningMute.warningOff
            }
        },
        getAlarmName(id) {

            let alarmDescription;
            if (typeof alarmData[parseInt(id)] !== 'undefined') {
                alarmDescription = alarmData[parseInt(id)].alarmDescription;
            } else {
                if (parseInt(item.ObjectId) == 0) {
                    alarmDescription = "ALL";
                } else {
                    alarmDescription = "NOT DEFINED IN DATABASE";
                }
            }

            return alarmDescription
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
        resetAlarm(alarmId, actualStatus) {

            var sendRequest = true;

            if ( isNaN(alarmId) )
            {
                sendRequest = false;
            }

            //PROFILE CHECK
            if (!helpers.profileCheck()) {
                helpers.privilegesPopUp();
                sendRequest = false;

            }

            //UNNATENDED ACK CHECK
            if (!helpers.ackCheck()) {
                helpers.ackPopUp();
                sendRequest = false;
            }

            if (actualStatus != 3) {
                helpers.resetPopUp();
                sendRequest = false;
            }

            if (sendRequest) {

                var data = JSON.stringify({
                    "alarmId": parseInt(alarmId),
                    "source":  parseInt($('#ScreenLocationId').val())
                });

                var settings = {
                    "async": true,
                    "crossDomain": true,
                    "url": ACTIVE_SERVER + ":" + API.Port + "/resetActiveAlarm",
                    "method": "POST",
                    "headers": {
                        "content-type": "application/json"
                    },
                    "processData": false,
                    "data": data
                }

                $.ajax(settings).done(function (response) {
                    console.log(response);
                });
            }
        },

    }
};







