var a = []
a.push()
a.pop()

var b = new Array()

// 原型
// 实例对象的隐式原型指向构造函数的显式原型

function myNew() {
    let obj = {}
    obj.__proto__ = Fn.prototype// 改变实例对象的隐式原型指向构造函数的显式原型
    Fn.call(obj)// 改变this指向,让实例对象可以访问构造函数的属性
    return obj
}

myNew(Person)