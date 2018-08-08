
import Vue  from 'vue'

import VueRouter from 'vue-router'
import VueCookies from 'vue-cookies'

Vue.use(VueRouter)

import Header from '../components/pages/header/header.vue'
import NotFound from '../components/pages/not-found/not-found.vue'
import Classify from '../components/pages/classify/classify.vue'
import ClassifyOne from '../components/pages/classify/classify-one.vue'
import Mine from '../components/pages/mine/mine.vue'
import Message from '../components/pages/message/message.vue'
import Shopping from '../components/pages/shopping/shopping.vue'
import LoginRegister from '../components/pages/login-register/loginRegister.vue'
import LoginA from '../components/pages/login-register/login-a/login-a.vue'
import LoginB from '../components/pages/login-register/login-b/login-b.vue'
import Register from '../components/pages/login-register/register/register.vue'
import store from '../store'

// 路由 表
const routes = [
    {   path: '/mine', name: 'mine', component: Mine },
    {   path: '/classify', name: 'classify', component: Classify },
    {   path: '/classify-one', name: 'classify-one', component: ClassifyOne },
    {   path: '/', name: 'header', component: Header },
    {   path: '/shopping', name: 'shopping', component: Shopping},
    {   path: '/message', name: 'message', component: Message },
    {   path: '/not-found', name: 'not-found', component: NotFound },
    {
        path: '/login-register',
        name : 'login-register',
        component: LoginRegister,
        children: [
            {
                path: '',
                // component: Login
                redirect: { name: 'login-b' }
            },
            {
                path: 'login-a',
                name : 'login-a',
                component: LoginA
            },
            {
                path: 'login-b',
                name : 'login-b',
                component: LoginB
            }
        ]
    },
    {   path: '**',redirect: {name: 'not-found'}},
]

const router = new VueRouter({
    mode: 'history',
    routes
})
//全局路由守卫

let need_user_state = [ 'message','shopping']

router.beforeEach((to, from ,next) => {
    //是否需要判断登陆状态
    let need_us = need_user_state.some(name => to.name === name)
    let aa = VueCookies.get('phone');
    if ( need_us && !aa ) {
        next('/login-register');
        return false;
    }
    next();
})

//md5

import md5 from 'js-md5'

Vue.prototype.md5 = md5

export default router