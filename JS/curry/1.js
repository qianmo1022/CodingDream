function add(a,b,c) {

    return a + b + c    
}
// 函数的柯里化
function curry(fn) {
    // 收集参数 闭包 arr
    // 到位了就执行 arr.length === fn.length fn(...arr)
    // 否则返回收集参数的函数
    // rest运算符（剩余运算符）...  args是数组 闭包空间 自由变量
    // args
    let judge = (...args) => {
        // let a = 1
        if(args.length === fn.length) return fn(...args) // 退出条件
        // 没有到达长度，返回函数，继续收集参数
        return  (...arg) => judge(...args,...arg) // 递归
    }
    return judge
}
// 有时候不会一次性给到所有的参数，而是分开给，这时候就需要用到柯里化
// 应用在前端的交互
// js curry 柯里化
// 每次接受一个参数

// console.log(add.length);
// 返回一个函数，接受下一个参数
// add(1)(2)(3) 
const curryAdd = curry(add)
console.log(curryAdd(1)(2)(3))