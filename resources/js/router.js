import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)//as vue-router is a plugin need to use this.
import firstPage from './components/pages/firstpage'
import two from './components/pages/two'
import hook from './components/pages/hook'
const routes = [
    {
        path: '/one',
        component: firstPage,
    },

    {
        path: '/two',
        component: two,
    },

    {
        path: '/hook',
        component: hook,
    },
];

export default new Router({
    mode: 'history',
    routes,
});