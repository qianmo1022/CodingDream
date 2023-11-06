function foo () {
    console.log(this.a);

}

var obj = {
    a: 2,
    foo: foo//没有（），所以此处冒号右边函数的引用
}
obj.foo() // 2

// var obj = {
//     a: 2,
//     foo: foo()//有（），所以此处冒号右边函数的执行结果
// }
// obj.foo// undefined

var obj2 = {
    a: 3,
    obj: obj
}

obj2.obj.foo()// 2