var screen = {
    renderData: function (msg) {

    }
};
if (typeof batteriesMounted == 'undefined') {
    const batteryApp = Vue.createApp({})
    batteryApp.config.compilerOptions.isCustomElement = tag => tag.startsWith('font')
    batteryApp.component('gauge-render', components.gauge)
    batteryApp.mount('.batteryApp')
    batteriesMounted = true;
}