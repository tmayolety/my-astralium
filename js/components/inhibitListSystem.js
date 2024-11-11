
components.inhibitListSystem = {
    props: [],
    template: /*html*/`
            <header class="ui col displayNone">
                <span id="inhibitGeneralCount">
                Inhibits ( 
                <span id="inhibitOverallCount"> </span>
                 inhibited ) 
                </span>
                <span class="gradients">
                    <span class="gradient-left"></span>
                    <span class="gradient-right"></span>
                </span>
                
            </header>


            <div v-if="isLoading" style="display: flex; justify-content: center; align-items: center; height: 100vh; width: 100vw; position: fixed; top: 0; left: 0; z-index: 9999; background-color: rgba(0, 0, 0, 0.5);">
                <div class="loaderSignals"></div>
            </div>
          
            <div class="marginTopMini" style="display: flex; flex-direction: row; justify-content: left; align-items: center; gap: 4px; position: relative;">
            <div style="position: relative; width: 27vw;">
              <input id="keyboardInput" 
                     style="height: 35px; width: 100%; font-size: 16px; border-radius: 6px; padding-right: 30px;" 
                     class="input reportLogHeaders" 
                     placeholder=" Search" 
                     @focus="showKeyboard" 
                     @input="handleInputChange($event.target.value)" />
                
              <span class="inhibitSearchIcon" 
                    style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); width: 22px; color: white;">
                <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
                  <path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/>
                  <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M338.29 338.29L448 448"/>
                </svg>
              </span>
            </div>

            <button class="ui btn sm secondary colored" style="color: white!important;" @click="clearSearch">Clear</button>
          </div>
          
            <div id="keyboardInhibits" style="width: 40vw; position: fixed; bottom: 95px; left: 50%; transform: translateX(-50%); z-index:99999; display: none;" class="simple-keyboard"></div>
          
            <div v-for="(group, index) in nameGroup" class="marginTopMini">

                <div class="hidden-phone" v-if="!isPhone">
                    <input type="hidden" :id="group.Name.replace(/\\s/g, '') + '_groupOverallCount'">
                    <div class="ui grid type1 cols-mini-2 cols-xl-3 pad-mini gap-med groupColumn" :class="'groupColumn_' + group.Id">
                        <div class="ui col mini-1 has-col-header-xl radius shadow ">
                            <header class="text-size-8 font-bold"><h5 class="ui h4 " :class="'dev-inhibitCount-' + group.Name.replace(/\\s/g, '')">{{group.Name}}
                             (<span :class="group.Name.replace(/\\s/g, '') + '_overallCount'" ></span> inhibited )
                            </h5></header>
                            <ul class="ui table size-sm resp" v-html="populateCol(index, 0)">
                            </ul>
                        </div>
                  
                        <div class="ui col mini-1 has-col-header-xl radius shadow ">
                            <header class="text-size-8 font-bold"><h5 class="ui h4 " :class="'dev-inhibitCount-' + group.Name.replace(/\\s/g, '')">{{group.Name}}
                            (<span :class="group.Name.replace(/\\s/g, '') + '_overallCount'" ></span> inhibited )
                            </h5></header>
                            <ul class="ui table size-sm resp" v-html="populateCol(index, 1)">
                            </ul>
                        </div>
                  
                        <div class="ui col mini-1 has-col-header-xl radius shadow ">
                            <header class="text-size-8 font-bold"><h5 class="ui h4 " :class="'dev-inhibitCount-' + group.Name.replace(/\\s/g, '')">{{group.Name}}
                            (<span :class="group.Name.replace(/\\s/g, '') + '_overallCount'" ></span> inhibited )
                            </h5></header>
                            <ul class="ui table size-sm resp" v-html="populateCol(index, 2)">
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

`,
    data() {
        return {
            inhibitAlarms: alarmData,
            nameGroup:groupList,
            isPhone: ISPHONE,
            typeAClass:' icon icon-only',
            typePreClass : '',
            typePreClassText:'Pre',
            typeIcon: '<svg class="ui icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M99.22,85.06,54.81,9.68a5.37,5.37,0,0,0-9.35,0L1.05,85.06a4.06,4.06,0,0,0,0,5.26,5.06,5.06,0,0,0,4.68,2.73H94.55a5.06,5.06,0,0,0,4.67-2.73A4.82,4.82,0,0,0,99.22,85.06ZM55.59,77.27c0,.91-.52,1.36-1.56,1.36h-8a1.21,1.21,0,0,1-1.37-1.36v-8a1.21,1.21,0,0,1,1.37-1.36h8c1,0,1.56.46,1.56,1.36Zm0-29.61a11.46,11.46,0,0,1-.39,2.73L52.86,62.86c-.26.91-.77,1.36-1.55,1.36H49.16c-1,0-1.55-.45-1.55-1.36L45.07,50.58a12,12,0,0,1-.39-2.92V40.85c0-1.17.65-1.76,2-1.76h7c1.3,0,2,.59,2,1.76Z"></path></svg>',
            inhibitTextOn:'ON',
            inhibitTextOff:'OFF',
            isLoading:false,
            myKeyboard2: null,
            clickTimeout: null,
            ['groupCount']: { type: Array },
        }
    },
    updated() {},
    mounted() {

        //mounted keyboard start
        const Keyboard2 = window.SimpleKeyboard.default;

        this.myKeyboard2 = new Keyboard2({
          onChange: input => this.handleInputChange(input),
        });

        document.addEventListener('click', this.handleClickOutside);

        //mounted keyboard end

        $('.groupColumn').not('.groupColumn_' + this.nameGroup[0].Id).parent().parent().hide();

        for (const groupIndex in this.groupCount) {
            if (!isNaN(groupIndex)){

                $('.'+this.nameGroup[parseInt(groupIndex)].Name.replace(/\s/g, '')+'_overallCount').html(this.groupCount[groupIndex]);
                $('#'+this.nameGroup[parseInt(groupIndex)].Name.replace(/\s/g, '')+'_groupOverallCount').val(this.groupCount[groupIndex]);
                let totalSum = Object.values(this.groupCount)
                totalSum = totalSum.filter(val => typeof val === 'number');
                const sum = totalSum.reduce((a, b) => a + b, 0);
                $('#inhibitOverallCount').html(sum);

            }
            if(this.groupCount[groupIndex] > 0){
                $('.inhibitGroup_'+this.nameGroup[parseInt(groupIndex)].Id).attr('data-alert', 'true')
            }

        }
      inhibits.inhibitButtons();
    },
    beforeDestroy(){
        document.removeEventListener('click', this.handleClickOutside);
   
    },
    methods:{

        handleInputChange(input) {

            document.getElementById('keyboardInput').value = input;
        
            if(this.clickTimeout){
                clearTimeout(this.clickTimeout)
            }

            this.clickTimeout = setTimeout(() => {
                this.searchInhibits(input);
            }, 900);

        },
        searchInhibits(searchText) {
            searchText = searchText.toLowerCase();
    
            const alarmItems = document.querySelectorAll('.inhibitList');
            alarmItems.forEach(item => {

                const description = item.querySelector('div:nth-child(2) span').textContent.toLowerCase();
                
                if (!description.includes(searchText)) {

                    item.classList.add('hidden');
                } else {
        
                    item.classList.remove('hidden');
                }
            });

        },
        handleClickOutside(event) {
            const keyboardElement2 = document.getElementById('keyboardInhibits');
            const inputElement2 = document.getElementById('keyboardInput') 
            if (keyboardElement2 && !keyboardElement2.contains(event.target) && !inputElement2.contains(event.target)) {
              this.hideKeyboard();
            }
        },
        showKeyboard() {
     
          document.querySelector('#keyboardInhibits').style.display = 'block';
       
        },
        hideKeyboard() {
      
          document.querySelector('#keyboardInhibits').style.display = 'none';
         
        },
        clearSearch(){
          
          const inputElement = document.getElementById('keyboardInput');
          inputElement.value = '';

          this.hideKeyboard();

          if (this.myKeyboard2) {
            this.myKeyboard2.setInput('');
          }

          setTimeout(() => {
                const inhibitedItems = document.querySelectorAll('.inhibitList.hidden');
                inhibitedItems.forEach(item => {
                  item.classList.remove('hidden');
                });
            }, 200);
            
        },

        populateCol(groupIndex, column){

           let result;
           let counter = 0;
           let groupStatusCounter = 0;

            if (!this.inhibitAlarms.some(alarmItem => this.nameGroup[groupIndex].Id == alarmItem.Group && alarmItem.alarmType < 2)) {

                $('.inhibitGroup_'+this.nameGroup[groupIndex].Id).hide()
            }

            if (!this.isPhone) {

                result = '<li class="thead color-bg-op-type-dark"><div class="col-50"><span>#ID</span></div><div class="col-180-min"><span>Description</span></div><div class="col-50"><span>Type</span></div>' +
                    '<div class="col-50"><span>Delay</span></div><div class="col-60"><span>Status</span></div></li>';
            } else {
                result = '<li class="thead color-bg-op-type-dark"><div class="col-50"><span>ID</span></div><div class="col-170-min"><span>Description</span></div><div class="col-50"><span>Type</span></div>' +
                    '<div class="col-70"><span>Status</span></div></li>';
            }


               for (const alarm in this.inhibitAlarms) {

                   let alarmItem = this.inhibitAlarms[alarm]
                   if (counter === 3) { counter = 0; }
                   let groupId = this.nameGroup[groupIndex].Id;
                   if (groupId === alarmItem.Group && alarmItem.alarmType < 2 && alarmItem.alarmDescription !== "ALL") {
                       if ( counter === column ) {

                           if(!this.isPhone) {

                               result += '<li class="inhibitList color-bg-op-type-dark">' +
                                   '<div class="col-50 align-top-center" >' + alarmItem.alarmId + '</div>' +
                                   '<div class="col-180-min h-50 align-top-left"><span>' + alarmItem.alarmDescription + '</span></div>' +
                                   '<div class="col-50  align-top-center dev-typeButton"  data-alarmId="' + alarmItem.alarmId + '" data-type="' + alarmItem.alarmType + '" data-device="' + deviceData[alarmItem.Device].Name + '"><button  id="alarmType_' + alarmItem.alarmId + '" class="ui btn pre-alarm-button-inhibits ' + this.idTypeClass(alarm) + ' mini colored secondary " style="width:35px;">' + this.idTypeText(alarm) + '</button></div>' +
                                   '<div class="col-50 align-top-center" onclick="inhibits.editDelay(' + alarmItem.alarmId + ');"><button id="alarmDelay_' + alarmItem.alarmId + '" class="pre-alarm-button-inhibits ui btn mini colored secondary" style="width:35px;">' + (alarmItem.timeDelay / 1000) + '</button></div>' +
                                   '<div class="col-60 align-top-center dev-inhibitButton"  data-alarmId="' + alarmItem.alarmId + '"><button attr-type="' + alarmItem.alarmType + '" id="alarmInhibit_' + alarmItem.alarmId + '" class="pre-alarm-button-inhibits ui btn mini active colored secondary" style="width:35px;">' + this.idOnOffText(alarm) + '</button></div>' +
                                   '</li>'
                           } 
                       }
                       counter = counter + 1;
                       if (alarmItem.Status === 1 ) {
                           groupStatusCounter = groupStatusCounter + 1;
                       }
                   }

               }


               this.groupCount[groupIndex] = groupStatusCounter;
        
               return result

        },
        idTypeText(alarmIndex) {

                let alarmItem = this.inhibitAlarms[alarmIndex]
                if (alarmItem.alarmType === 0) {
                    return this.typeIcon
                   
                }
                if (alarmItem.alarmType === 1) {
                    return this.typePreClassText

                }
            
        },
        idTypeClass(alarmIndex) {

                let alarmItem = this.inhibitAlarms[alarmIndex]
                    if (alarmItem.alarmType === 0) {
                        return this.typeAClass
                    }
                    if (alarmItem.alarmType === 1) {
                        return this.typePreClass
                    }

        },
        idOnOffText(alarmIndex){
            let alarmItem = this.inhibitAlarms[alarmIndex]
            if (alarmItem.Status === 1) {
                return this.inhibitTextOn
            } else {
                return this.inhibitTextOff
            }

        },

    },
};