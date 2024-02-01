const Koa = require('koa');

// 洋葱模型（源码是递归）
const fa = (ctx,next) => {
    console.log('fa')
    next()
    console.log('1')
}
const fb = (ctx,next) => {
    console.log('fb')
    next()
    console.log('2')
}
const fc = (ctx,next) => {
    console.log('fc')
    next()
    console.log('3')
}

const app = new Koa();

app.use(fa)// 所有被use的函数都叫中间件函数，中间件函数的执行是有规则的
app.use(fb)
app.use(fc)

app.listen(3000, () => {
    console.log('项目运行在3000端口')
})