import { createRouter, createWebHistory } from 'vue-router'
import AuthLayout from '../layouts/AuthLayout.vue'
import MainLayout from '../layouts/MainLayout.vue'
import EmptyLayout from '../layouts/EmptyLayout.vue'
import auth from './auth'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: MainLayout,
        },
        {
            path: '/login',
            component: AuthLayout,
            children: [
                ...auth
            ]
        },
        {
            path: '/error',
            component: EmptyLayout
        }
    ]
})

export default router