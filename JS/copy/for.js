let arr = ['a','b','c','d','e']

// for (let item of arr) {// for-of 遍历有迭代器属性的数据结构，例如数组，字符串，set，map
//     console.log(item);
// }

let obj = {
    name: '阿伟',
    age: 18,
    like: {
        typeof: 'coding'
    }
}
let data = Object.create(obj)
data.sex = 'boy'

for (let key in data) {// for-in 是用来遍历对象的
    if (data.hasOwnProperty(key)) {//hasOwnProperty()方法用来判断一个属性是定义在对象本身而不是继承自原型链
        console.log(data[key]);
    }

}