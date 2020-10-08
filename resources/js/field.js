Nova.booting((Vue, router, store) => {
    Vue.component('index-live-update', require('./components/IndexField'))
    Vue.component('detail-live-update', require('./components/DetailField'))
    Vue.component('form-live-update', require('./components/FormField'))
})
