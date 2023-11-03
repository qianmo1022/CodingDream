// Person.prototype 原型 也是对象

Person.prototype.say = function () {
    return 'hello'

}



function Person() {
    this.name = '肖总';
    this.age = 18;
    
}

let p = new Person();
let p2 = new Person();

console.log(p2.say() == p.say());