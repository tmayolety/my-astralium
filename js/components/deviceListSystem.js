components.deviceListSystem = {
    props: [],
    template:/*html*/`
<div v-for="(device, index) in deviceListData">
      <ul class="ui table size-sm resp dev-deviceList" :class="'deviceId_'+ device.Id " >
          <li>
              <div class="col-50-min align-middle-center"><span> {{device.Name}} </span></div>
              <div class="col-90 align-middle-center"><span> {{device.IP}} </span></div>
              <div class="col-90 align-middle-center"><span> {{device.DeviceSlaveId}} </span></div>
              <div class="col-90 align-middle-center"><span :id="'deviceLast_'+device.Id"></span></div>
              <div class="col-90 align-middle-center hidden-tv-pt"><span :id="'deviceTotal_' + device.Id"></span></div>
          </li>
      </ul>
</div>
`,
    data() {
        return {
            deviceListData: deviceData,

        }
    },
    updated() {


    },
    mounted() {
        $('.dev-deviceList').not('.deviceId_' + this.deviceListData[1].Id).hide();

    },
    methods:{

    },
    computed: {

    }
};
