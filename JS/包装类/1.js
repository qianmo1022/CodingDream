
// //原始数据类型
// let a = 'hello'
// let b = 123
// let c = true
// let u = undefined
// let n = null

// let a = 1
// let b = a
// a = 2
// console.log(b);//1

// //引用数据类型
// let obj = {
//     name: 'xiao'
// }



let obj = {
    name: '小花'
}
let lw = obj
obj.name = '小红'

console.log(lw.name);//小红,因为lw和obj指向同一个地址，所以lw.name也会改变