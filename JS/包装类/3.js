//对象的创建
//1. var obj = {} //对象字面量|对象直接量

// 2. let obj = new Object() //构造函数

// 3. 自定义构造函数

// 4. Object.create({})

//构造函数就像工厂一样，可以批量化生成对象
function Car(color) {
    this.name = 'BMW'
    this.height = '1400'
    this.lang = '4900'
    this.weight = 1000
    this.color = color
}

let car1 = new Car('pink') //实例对象
let car2 = new Car('green')
// car1.name = '玛莎拉蒂'

console.log(car1);
console.log(car2);
