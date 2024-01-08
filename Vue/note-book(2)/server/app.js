const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser') // 让koa能解析post参数
const cors = require('koa2-cors') // 解决跨域

const user = require('./routes/user.js')

app.use(cors()) // 告诉浏览器允许跨域
app.use(bodyParser())

// 主要逻辑
// const main = (ctx) => {
//   if (ctx.url === '/login') {
//     ctx.body = '登录成功'

//   } else if (ctx.url === '/register') {
//     ctx.body = '注册成功'
//   }
// }
app.use(user.routes(), user.allowedMethods())


app.listen(3000, () => {
  console.log('项目已启动');
})