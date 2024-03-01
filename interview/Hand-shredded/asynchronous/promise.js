// 手写Promise
class MyPromise {
  constructor(executor) {
    this.status = "pending"; // Promise的状态
    this.value = undefined; // 接受resolve的参数
    this.reason = undefined; // 接受reject的参数
    this.onFulfilledCallbacks = []; // 存储成功的回调
    this.onRejectedCallbacks = []; // 存储失败的回调

    const resolve = (value) => {
      if (this.status === "pending") {
        this.status = "fulfilled";
        this.value = value;
        // 把then中的回调触发掉
        this.onFulfilledCallbacks.forEach((cb) => cb(value));
      }
    };

    const reject = (reason) => {
      if (this.status === "pending") {
        this.status = "rejected";
        this.reason = reason;
        // 把then中的回调触发掉
        this.onRejectedCallbacks.forEach((cb) => cb(reason));
      }
    };

    executor(resolve, reject);
  }

  then(onFulfilled, onRejected) {
    // 把 onFulfilled 存起来，供resolve调用
    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (value) => value;
    onRejected =
      typeof onRejected === "function" ? onRejected: (reason) => { throw reason; };

    // 返回一个Promise
    const newPromise = new MyPromise((resolve, reject) => {
      if (this.status === "fulfilled") {
        // then前面的Promise对象状态是同步变更完成了
        setTimeout(() => {
          // 模拟异步，官方手搓了微任务，这里用宏任务简化一下
          try {
            const result = onFulfilled(this.value);
            resolve(result);// 应该放result里面的resolve中的参数
          } catch (error) {
            reject(error);
          }
        });
      }

      if (this.status === "rejected") {
        setTimeout(() => {
         try {
            const result = onRejected(this.reason);
            resolve(result);
         } catch (error) {
            reject(error);
         }   
        });
      }

      if (this.status === "pending") {// 缓存then中的回调
        this.onFulfilledCallbacks.push((value) =>{
            setTimeout(()=>{ // 保证将来onFulfilled在resolve中被调用时，是一个异步函数
                
                try {
                    const result = onFulfilled(value)
                    resolve(result)
                } catch (error) {
                    reject(error)
                }
            })

        })
        this.onRejectedCallbacks.push((reason) =>{
            try {
                const result = onRejected(reason)
                resolve(result)
            } catch (error) {
                reject(error)
            }
        })
      }
    });
    return newPromise;
  }

  static race (promises) {
    return newMyPromise((resolve, reject) => {
        // 看promises里面的哪个对象的状态先变更
        for (let promise of promises) {
            promise.then(
                (value) => {
                    resolve(value)
                },
                (reason) => {
                    reject(reason)
                }
            )
        }
        // resolve('')
    })
  }
}

// MyPromise.prototype.then = function(onFulfilled, onRejected) {}

let p = new MyPromise((resolve, reject) => {
  resolve("1");
});
// console.log(p);
p.then((res) => {
  console.log("then called");
}).then((res) => {
  console.log("then2 called");
});
