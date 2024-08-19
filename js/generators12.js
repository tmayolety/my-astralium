var screen = {
    renderData: function (msg) {
    }
};


if (typeof generators12Mounted == 'undefined') {

    const generatorsApp12 = Vue.createApp({})
    generatorsApp12.config.compilerOptions.isCustomElement = tag => tag.startsWith('font')
    generatorsApp12.component('basic-text-with-title-render', components.basicTextWithTitle)
    generatorsApp12.component('icon-text-value-digital-line-render', components.iconTextValueDigitalLine)
    generatorsApp12.component('multi-gauge-render', components.multiGauge)
    generatorsApp12.component('bar-render', components.bar)
    generatorsApp12.mount('.generators12App')
    generators12Mounted = true;

}



