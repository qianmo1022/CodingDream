// 往数据库映射数据
const mongoose = require('mongoose')
const Schema = mongoose.Schema // 映射表

const UserSchema = new Schema({   // 第一个参数：指明表有声明字段
    account: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String,
        require: true
    }
},
    {   // 指明映射到哪张表
        collection: 'user',
        versionKey: false
    }
)

module.exports=mongoose.model('user',UserSchema)  // 让schema生效,在数据库中创建一个 user 表，并且将 UserSchema 映射进去