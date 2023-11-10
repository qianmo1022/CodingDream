//七种基本数据类型
let str = 'hello'// string
let num = 123 // number
let flag = false // boolean
let und = undefined // undefined
let nu = null // object
let big = 123n // bigint
let s = Symbol('hello') // symbol, unique, can be used as object key

// 引用数据类型
let obj = {}
let arr = []
let fn = function () { }
let date = new Date()

//  判断类型
// console.log(typeof str); //typeof(str) = typeof str
// console.log(typeof num);//number
// console.log(typeof flag);//boolean
// console.log(typeof und);//undefined
// console.log(typeof nu);//object 这是一个bug，历史遗留问题,null转化为二进制是全0，引用类型转化为二进制为三个0，所以typeof object = object
// console.log(typeof big);//bigint
// console.log(typeof s);//symbol

// console.log(typeof obj);//object
// console.log(typeof arr);//object
// console.log(typeof fn);//function
// console.log(typeof date);//object