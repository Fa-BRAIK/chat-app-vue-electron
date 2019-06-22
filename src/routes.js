import  Vue from 'vue'
import VueRouter from 'vue-router'
import LogIn from './components/LogIn'
import Home from './components/Home'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'login',
            component: LogIn,
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
        }
    ]
})

export default router