// 完成路由的配置 url => component
import { createRouter, createWebHashHistory } from 'vue-router'
// PC 兼容性
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            names: 'home',
            // App.vue是用来挂载的，不是用来写具体的业务逻辑的
            component: () => import('@/views/Root.vue'),
            redirect:{name:'discover'},//重定向301跳转
            children:[
                {
                    path:'discover',
                    name:'discover',
                    component:()=>import('@/views/discover/Discover.vue')
                }
            ]
        }
    ]
})

export default router