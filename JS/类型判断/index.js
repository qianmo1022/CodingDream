let str = 'hello'// string
let str2 = 'hello'// string
let num = 123 // number
let flag = false // boolean
let und = undefined // undefined
let nu = null // null

let big = 123n // bigint
let s = Symbol('hello') // symbol, unique, can be used as object key
let s2 = Symbol('hello')//具体应用场景，大项目开发中不同模块之间的变量名冲突

console.log(s === s2) // string