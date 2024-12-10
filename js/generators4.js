var screen = {
    renderData: function (msg) {
    }
};


if (typeof generators4Mounted == 'undefined') {

    const generators4App = Vue.createApp({})
    generators4App.config.compilerOptions.isCustomElement = tag => tag.startsWith('font')
    generators4App.component('basic-text-with-title-render', components.basicTextWithTitle)
    generators4App.component('multi-gauge-render', components.multiGauge)
    generators4App.component('bar-render', components.bar)
    generators4App.mount('.generators4App')
    generators4Mounted = true;

}