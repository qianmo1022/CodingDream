import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
    meta:{
      title:'登录'
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue'),
    meta:{
      title:'注册'
    }
  },
  {
    path: '/noteClass',
    name: 'noteClass',
    component: () => import('../views/noteClass.vue'),
    meta:{
      title:'笔记分类'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

//路由守卫
const whitePath = ['/login','/register']
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  
  if (!whitePath.includes(to.path)) { // 你想去的页面不在白名单里
    if (!sessionStorage.getItem('userInfo')) { // 你没有登录
      router.push('/login')
      return
    }
    next()
    return
  }
  console.log(to, from);  
  next()
})

export default router