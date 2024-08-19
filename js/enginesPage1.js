var screen = {
    renderData: function (msg) {
    }
};


if (typeof enginesPage1Mounted == 'undefined') {

    const enginesPage1App = Vue.createApp({})
    enginesPage1App.config.compilerOptions.isCustomElement = tag => tag.startsWith('font')
    enginesPage1App.component('basic-text-with-title-render', components.basicTextWithTitle)
    enginesPage1App.component('icon-text-digital-line-render', components.iconTextDigitalLine)
    enginesPage1App.component('multi-gauge-render', components.multiGauge)
    enginesPage1App.component('bar-render', components.bar)
    enginesPage1App.component('basic-text-render', components.basicText)
    enginesPage1App.mount('.enginesPage1App')
    enginesPage1Mounted = true;

}