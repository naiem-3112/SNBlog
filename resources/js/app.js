require('./bootstrap');

window.Vue = require('vue');//load vue

Vue.component('mainapp', require('./components/mainapp').default);

// import router
import router from './router.js'//understanding problem

//use Vue
const app = new Vue({
    el: '#app',
    router,
});
