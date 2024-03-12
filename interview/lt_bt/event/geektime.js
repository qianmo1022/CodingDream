// node 自带的events模块
// EventEmitter天生就是订阅发布者这种设计模式
const EventEmitter = require('events').EventEmitter

// 继承自EventEmitter
class Geektime extends EventEmitter {
    constructor() {
        super()// 调用父类的构造函数
        setInterval(() => {
            this.emit('newlesson', {
                price: Math.random() * 100
            })
        }, 3000)
    }
}

module.exports = new Geektime