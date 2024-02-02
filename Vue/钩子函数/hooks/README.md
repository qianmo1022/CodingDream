# 路由的钩子函数
- 全局守卫
1. router.beforeEach()
2. router.beforeResolve()
3. router.afterEach()

- 独享守卫
beforeEnter: (to, from, next) => {
}...
写在路由对象内的钩子函数

- 组件内的守卫
