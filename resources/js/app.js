require('./bootstrap');

window.Vue = require('vue');//load vue
Vue.component('mainapp', require('./components/mainapp.vue').default);

//use Vue
const app = new Vue({
    el: '#app'
});
