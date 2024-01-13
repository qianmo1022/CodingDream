// 购物车
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ShoppingCartSchema = new Schema({
    account: {
        type: String,
        unique: true,
        require: true
    },
    commodity: {
        type: Object,
        require: true
    }
},
    {
        collection: 'shoppingcart',
        versionKey: false
    })

module.exports = mongoose.model('shoppingcart', ShoppingCartSchema)


