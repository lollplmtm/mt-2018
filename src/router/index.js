
import Vue  from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Header from '../components/pages/header/header.vue'
import NotFound from '../components/pages/not-found/not-found.vue'
import Classify from '../components/pages/classify/classify.vue'
import Mine from '../components/pages/mine/mine.vue'
import Message from '../components/pages/message/message.vue'
import Shopping from '../components/pages/shopping/shopping.vue'
import LoginRegister from '../components/pages/login-register/loginRegister.vue'
import LoginA from '../components/pages/login-register/login-a/login-a.vue'
import LoginB from '../components/pages/login-register/login-b/login-b.vue'
import Register from '../components/pages/login-register/register/register.vue'

// 路由 表
const routes = [
    {   path: '/mine', name: 'mine', component: Mine },
    {   path: '/classify', name: 'classify', component: Classify },
    {   path: '/', name: 'header', component: Header },
    {   path: '/shopping', name: 'Shopping', component: Shopping},
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

export default router