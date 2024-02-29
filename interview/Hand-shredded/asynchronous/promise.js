// 手写Promise
class MyPromise {
    constructor(executor) {
        this.status = 'pending' // Promise的状态
        this.value = undefined // 接受resolve的参数
        this.reason = undefined // 接受reject的参数
        this.onFulfilledCallbacks = [] // 存储成功的回调
        this.onRejectedCallbacks = [] // 存储失败的回调

        const resolve = (value) => {
            if (this.status === 'pending') {
                this.status = 'fulfilled'
                this.value = value
                // 把then中的回调触发掉
                this.onFulfilledCallbacks.forEach(cb => cb(value))
            }
        }

        const reject = (reason) => {
            if (this.status === 'pending') {
                this.status = 'rejected'
                this.reason = reason
                // 把then中的回调触发掉
                this.onRejectedCallbacks.forEach(cb => cb(reason))
            }
        }

        executor(resolve, reject)
    }

    then(onFulfilled, onRejected) {
        // 把 onFulfilled 存起来，供resolve调用
        if (this.status === 'fulfilled') {
            onFulfilled(this.value)
        }

        if (this.status === 'rejected') {
            onRejected(this.reason)
        }
    }
}

// MyPromise.prototype.then = function(onFulfilled, onRejected) {}

let p = new MyPromise((resolve, reject) => {
    resolve('1')
})
// console.log(p);
p.then()