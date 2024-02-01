const Koa = require('koa');
const app = new Koa();
const Router = require('@koa/router')
const router = new Router()

const main = (ctx) => {
    ctx.body = '首页页面'
}
const about = (ctx) => {
    ctx.body = 'about page'
}

router.get('/main',main)
router.get('/about',about)
app.use(router.routes()) // 所有配置的路由都生效
    .use(router.allowedMethods()) // 有get和post请求的时候，会自动的加上响应头

app.listen(3000, () => {
    console.log('项目运行在3000端口')
})