require('./bootstrap');

window.Vue = require('vue');//load vue

Vue.component('mainapp', require('./components/mainapp').default);

//iviewui
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);


// import router
import router from './router.js'//understanding problem

//use Vue
const app = new Vue({
    el: '#app',
    router,
});
