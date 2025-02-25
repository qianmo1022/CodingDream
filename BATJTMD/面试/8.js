Object.prototype.abc = function(element) {
    return 'abc';
}

let arr = [1, 2, 3]; // new Array() arr.__proto__ = Array.prototype
let arr2 = []

arr.push(4);
console.log(arr.abc()); // abc

Foo.prototype.b = 2;
function Foo() {
    this.a = 1;
    return []
}
function myNew(func) {
    const obj = {};
    obj.__proto__ = func.prototype;
    const res = func.call(obj); // 绑定this,如果没有这一步，继承不到func的显式属性
    return res instanceof Object ? res : obj;
}

const res = myNew(Foo);

console.log(res);

/**/
// function Foo() {
//     this.a = 1;
//     // return 'hello';
//     // return 123
//     // return [1,2,3]
//     // return {age: 18}
//     return null;
// }

// const obj = new Foo();

// console.log(obj);
