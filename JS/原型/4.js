function Bus() {
    
}

function Car() {

}
Car.prototype = {
    // constructor: Bus//手动指定原型对象的constructor属性，会被覆盖
}
var car = new Car();

console.log(car.constructor);

//constructor属性的作用:记对象是由谁创建的