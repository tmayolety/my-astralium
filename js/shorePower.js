var screen = {
    renderData: function (msg) {
    }
}

if (typeof shorePowerMounted == 'undefined') {
    const shorePowerApp = Vue.createApp({})
    shorePowerApp.config.compilerOptions.isCustomElement = tag => tag.startsWith('font')
    shorePowerApp.component('icon-text-value-analogue-line-render', components.iconTextValueAnalogueLine)
    shorePowerApp.component('icon-text-value-digital-line-render', components.iconTextValueDigitalLine)
    shorePowerApp.component('bar-render', components.bar)
    shorePowerApp.component('basic-horizontal-bar-render', components.basicHorizontalBar)
    shorePowerApp.component('gauge-render', components.gauge)
    shorePowerApp.mount('.shorePowerApp')
    shorePowerMounted = true;
}

