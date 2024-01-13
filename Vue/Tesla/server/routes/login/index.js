// 登录接口
const router = require('koa-router')()
const login_controller=require('../../controllers/login/index.js')
// 测试
// router.get('/test', (ctx,next) => {
//     ctx.body='hello'
// })


// 登录接口
router.post('/login', login_controller.login)    // 拿到前端给的账号与密码去数据库查询是否存在

module.exports = router