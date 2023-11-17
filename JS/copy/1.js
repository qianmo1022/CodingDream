let a = 1
let b = a 
a = 2 
console.log(b);//1,基本类型的赋值是值传递，b是a的一个副本，a改变不会影响b

let obj = {
    age:18
}
let obj2 = obj//属性，类型，地址都是一样的
obj.age = 20

console.log(obj2.age);//20,引用类型的赋值是引用传递，obj2是obj的一个引用，obj改变会影响obj2