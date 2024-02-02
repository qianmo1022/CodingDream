import { createRouter,createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue'),
        meta: {
            title: '商城首页'
        }
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/About.vue'),
        meta: {
            title: '关于商城'
        },
        // beforeEnter: (to, from, next) => {
        //     console.log(to, from);
        //     next()
        // }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// 全局的前置钩子
// router.beforeEach((to, from, next) => {
//     document.title = to.meta.title

//     // console.log(to, from);
//     if (to.path !== '/') {
//         const isLogin = localStorage.getItem('isLogin')
//         if (isLogin) {
//             next()
//         } else {
//             // router.push('/')
//             alert('请先登录')
//             return
//         }
//     }
//     next()
// })

// 全局的解析守卫
// router.beforeResolve((to, from, next) => {
//     console.log(to, from);
// })

// 全局的后置钩子
// router.afterEach((to, from) => {
//     console.log(to, from);
// })

export default router