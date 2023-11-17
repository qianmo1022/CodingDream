// let a = {name: '蜗牛'}
// let b = Object.create(a)//将a作为b的隐式原型
// a.name = '军儿'

// console.log(b);//{}
// console.log(b.name);//蜗牛，b没有name属性，会沿着原型链找到a的name属性

// let a = {
//     name: '蜗牛', 
//     like:{
//         n:'coding'
//     }
// }
// let b = Object.assign({},a)
// a.name = '军儿'
// a.like.n = 'running'

// console.log(b);//{ name: '蜗牛', like: { n: 'running' } },浅拷贝，只拷贝了a的第一层，第二层还是引用类型，改变a的第二层会影响b

let arr = [1,2,3, {a:10}]
// let newArr = [].concat(arr)
// let newArr = arr.slice(0)
// let newArr = [...arr]
let newArr = arr.toReversed()
arr[3].a = 100
console.log(newArr);

