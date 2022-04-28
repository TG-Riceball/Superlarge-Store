import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/TemplateHome.vue'
import Shop from '@/components/TemplateShop.vue'
import Login from '@/components/TemplateLogin.vue'
import Register from '@/components/TemplateRegister.vue'
import TemplateNotFoundVue from '../components/TemplateNotFound.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/shop',
        name: 'Shop',
        component: Shop,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: TemplateNotFoundVue,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
