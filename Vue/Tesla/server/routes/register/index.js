// 注册接口
const router = require('koa-router')()
const register_controler = require('../../controllers/register/index.js')

router.post('/register', register_controler.register)

module.exports = router