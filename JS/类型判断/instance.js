// instanceof只能用于对象类型的判断，不能用于原始类型的判断
let str = 'hello'// string
let num = 123 // number
let flag = false // boolean
let und = undefined // undefined
let nu = null // object
let big = 123n // bigint
let s = Symbol('hello') // symbol, unique, can be used as object key

//实例对象的隐式原型指向构造函数的显示原型
let obj = {}
let arr = [] //new Array()  arr.__proto__ = Array.prototype -> arr.__proto__.__proto__ = Object.prototype...沿着原型链一直找到Object.prototype.__proto__ = null
let fn = function () { }
let date = new Date()

// console.log(obj instanceof Object);//true
// console.log(arr instanceof Array);//true
// console.log(fn instanceof Function);//true
// console.log(date instanceof Date);//true

// console.log(str instanceof String);//false
// console.log(arr instanceof Object);//true //arr是一个对象，所以返回true
function test(obj) {
    if (obj instanceof Object) {//期望判断形参是不是一个对象，但是传一个数组进来，也会返回true
        return obj.name
    }
}
test(['君君'])