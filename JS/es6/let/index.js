// let a = 1
// if (true) {
//     console.log(a);// 暂时性死区    报错，let声明的变量在a被预编译而未执行到赋值的时候a在词法环境中会被隐匿，无法访问
//     let a = 2
// }

// var声明的a会挂载到全局window上
// let声明的a不会挂载到全局window上，但是在全局作用域下可以访问到
// var a = 1
// console.log(window.a);// 1
// let a = 1
// console.log(window.a);// undefined

// const a = 1
// a = 2 // 报错，常量不可修改

const obj = {
    name: '张三'
}
obj.name = '李四' // 可以修改对象的属性,但是不能修改对象的指向,因为obj是常量

console.log(obj);