var screen = {
    renderData: function (msg) {
    }
};


if (typeof engLogBookMounted == 'undefined') {

    const engLogBookApp = Vue.createApp({})
    engLogBookApp.config.compilerOptions.isCustomElement = tag => tag.startsWith('font')
    engLogBookApp.component('basic-text-with-title-render', components.basicTextWithTitle)
    engLogBookApp.component('icon-text-digital-line-render', components.iconTextDigitalLine)
    engLogBookApp.component('multi-gauge-render', components.multiGauge)
    engLogBookApp.component('bar-render', components.bar)
    engLogBookApp.component('basic-text-render', components.basicText)
    engLogBookApp.mount('.engLogBookApp')
    enginesPage1Mounted = true;

}