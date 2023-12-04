import { createWebHistory,createRouter } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Newest from '../views/homeChild/newest.vue'


const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',//路由路径
        component: Home,//路由组件
        children: [
            {
                path:'/home',
                redirect:'/home/newest'
            },
            {
                path: 'newest',
                component: Newest
            },
            {
                path: 'recommend',
                component: () => import('../views/homeChild/recommend.vue')//懒加载
            }
        ]
    },
    {
        path: '/about',
        component: About
    }
]

const router = createRouter({
    history: createWebHistory(),//路由history模式，可选hash模式
    routes
})

export default router
