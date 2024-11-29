var notifications = {
    pupUpNotification(item) {
        
        //NOTIFICATION ONLY IF TRIGGERED AND ACTIVE
        if (FLOATING_NOTIFICATIONS && ((item.alarmTriggered == 1 && item.Status == 9) || (item.alarmTriggered == 1 && item.Status == 2 && alarmData[parseInt(item.alarmId)].alarmType == 1))) {

            var alarmName = alarmData[parseInt(item.alarmId)].alarmDescription;

            if (alarmData[parseInt(item.alarmId)].alarmType == 0) {
                var notificationType = "alarm" ;
                var notificationColor = "red";
                var notificationIcon = "warning";
                var notificationGroup= "pre-alarms";
                var notificationMessage= "New Alarm";
            } else {
                var notificationType = "warning" ;
                var notificationColor = "orange";
                var notificationIcon = "error";
                var notificationGroup= "alarms";
                var notificationMessage= "New Pre-Alarm";
            }
        }

    }
};

