const { default: mongoose } = require('mongoose');
const shoppingcart_mod = require('../../modles/shoppingCart')  // 获取购物表
const { ObjectId } = mongoose.Types
const addData = async (ctx, next) => {
    console.log(ctx.request.body, '000');
    const { account, car, methods } = ctx.request.body
    // 在数据库里面查找该账号的购物信息
    if (methods === 'add') {
        // console.log('add');
        const result = await shoppingcart_mod.findOne({   // 更新前的表
            account: account
        })
        ctx.status = 200
        console.log('FIND', result);
        // console.log('result111', car);
        shoppingcart_mod.updateOne(
            {
                _id: ObjectId(result._id)
            }, {
            $set: {
                commodity: {
                    "Model3": car.Model3,
                    "ModelX": car.ModelX,
                    "ModelY": car.ModelY,
                    "ModelS": car.ModelS,
                    "Cybertruck": car.Cybertruck,
                    "Powerwall": car.Powerwall,
                }
            }
        }, function (err, result) {
            if (err) {
                console.log('err', err);
            } else {
                console.log('ss', result);
            }
        }

            // { _id: ObjectId(result._id) },  // 在该表中查找 _id 为 某个账号 id 的数据
            // {
            //     $set: {      // 修改数据
            // commodity: {
            //     "Model3": car.Model3,
            //     "ModelX": car.ModelX,
            //     "ModelY": car.ModelY,
            //     "ModelS": car.ModelS,
            //     "Cybertruck": car.Cybertruck,
            //     "Powerwall": car.Powerwall,
            // }
            //     }
            // }
        )


    } else {
        const result = await shoppingcart_mod.findOne({   // 更新前的表
            account: account
        })
        ctx.status = 200
        console.log('response111', result);
        shoppingcart_mod.updateOne(
            {
                _id: ObjectId(result._id)
            }, {
            $set: {
                commodity: {
                    "Model3": car.Model3,
                    "ModelX": car.ModelX,
                    "ModelY": car.ModelY,
                    "ModelS": car.ModelS,
                    "Cybertruck": car.Cybertruck,
                    "Powerwall": car.Powerwall,
                }
            }
        }, function (err, result) {
            if (err) {
                console.log('err', err);
            } else {
                console.log('ss', result);
            }
        }
        )
    }
}


module.exports = {
    addData
}
