// es6 class 类的写法 
// 类是抽象的概念 类是对象的抽象，对象是类的实例
class Singleton {
    show () {
        console.log('我是一个对象');
    }
}

const s1 = new Singleton();
const s2 = new Singleton();
console.log(s1 === s2); // false 不同的内存空间，值 也会不一样