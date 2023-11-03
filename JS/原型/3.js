Car.prototype.name = 'BMW';
Car.prototype.lang = 4900;
Car.prototype.height = 1400;

function Car(owner, color) {
    this.owner = owner;
    this.color = color;
}

var car = new Car('浪哥', 'red');
var car2 = new Car('但总', 'black');

// car.name = '红旗'
// Car.prototype.name = '红旗'
// delete car.name//删除实例上的属性m,不会影响原型上的属性
delete Car.prototype.name//删除原型上的属性m,会影响实例上的属性

console.log(car.name);
console.log(car2.name);