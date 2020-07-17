import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)//as vue-router is a plugin need to use this.
import firstPage from './components/pages/firstpage'
const routes = [
    {
        path: '/new-vue-route',
        component: firstPage,
    }
];

export default new Router({
    mode: 'history',
    routes,
});