// // number,string,boolean,undefined,null,bigint,symbol
// let num = 123
// let str = 'hello world'
// let flag = true
// let un = undefined
// let n = null

// //es6新增
// let big = 123n
// let sy = Symbol('123')

// console.log(Boolean(undefined))//false
// console.log(Boolean(null))//false
// console.log(Boolean('123'))//true
// console.log(Boolean(''))//false
// console.log(Boolean(' '))//true,空格也是字符

// console.log(Number())//0
// console.log(Number(undefined))//NaN
// console.log(Number('hello'))//NaN
// console.log(Number(null))//0
// console.log(Number(true))//1
// console.log(Number(false))//0
// console.log(Number('100a'))//NaN
// console.log(Number('100.123'))//100.123
// console.log(Number('00100.123'))//100.123
// console.log(Number(''))//0
// console.log(Number(String({})));//NaN

// console.log(String())//''
// console.log(String(123))//'123'
// console.log(String(NaN))//'NaN'
// console.log(String(Infinity))//'Infinity'
// console.log(String(undefined))//'undefined'
// console.log(String(null))//'null'
// console.log(String(true))//'true'
// console.log(String(false))//'false'

// console.log(Object(123))//[Number: 123]);
// console.log(Object('123'))//[String: '123']
// console.log(Object(null))//[null]
// console.log(Object(undefined))//[undefined]
// console.log(Object(true))//[Boolean: true]
// console.log(Object(false))//[Boolean: false]