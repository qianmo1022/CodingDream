const router = require('koa-router')()
const shoppingcart_controler = require('../../controllers/shoppingcart/index.js')

router.post('/shoppingcart', shoppingcart_controler.addData)

module.exports = router
