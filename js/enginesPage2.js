var screen = {
    renderData: function (msg) {
    }
};

if (typeof enginesPage2Mounted == 'undefined') {

    const enginesPage2App = Vue.createApp({})
    enginesPage2App.config.compilerOptions.isCustomElement = tag => tag.startsWith('font')
    enginesPage2App.component('bar-engines-render', components.bar)
    enginesPage2App.component('multi-gauge-render', components.multiGauge)
    enginesPage2App.component('bar-render', components.bar)
    enginesPage2App.mount('.enginesPage2App')
    enginesPage2Mounted = true;

}