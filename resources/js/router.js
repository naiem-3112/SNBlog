import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)//as vue-router is a plugin need to use this.
import firstPage from './components/pages/firstpage'
import two from './components/pages/two'
import hook from './components/pages/hook'
import method from './components/pages/basicmethod'
import home from './components/project/home'
import tag from './components/project/tag'

const routes = [

    // project routes......

    {
        path: '/home',
        component: home,
    },

    {
        path: '/tags',
        component: tag,
    },

    // basic routes.....
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

    {
        path: '/method',
        component: method,
    },
];

export default new Router({
    mode: 'history',
    routes,
});