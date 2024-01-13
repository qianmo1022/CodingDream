const userInfo = require('../../modles/login')   // UserInfo 就是生成的user表
const shoppingcart = require('../../modles/shoppingCart')

const register = async (ctx, next) => {
    console.log(ctx.request.body);
    // ctx.body('这是注册页面')
    const { account, password } = ctx.request.body

    // 在数据库中查找账号是否已经注册  不存在 result = null
    const result = await userInfo.findOne({
        account: account
    })

    ctx.status = 200
    if (result) {
        ctx.body = {
            code: 0,
            msg: '账号已存在'
        }
    }
    // 账号不存在 向数据库插入数据
    if (result === null) {
        let obj = {
            Model3: 0,
            ModelX: 0,
            ModelY: 0,
            ModelS: 0,
            Cybertruck: 0,
            Powerwall: 0,
        }
        console.log(account);
        userInfo.create({   // 创建用户信息表
            account: account,
            password: password
        })
        shoppingcart.create({   // 创建购物车表
            account: account,
            commodity: obj
        })

        ctx.body = {
            code: 1,
            msg: '注册成功'
        }
    }
}

module.exports = {
    register
}