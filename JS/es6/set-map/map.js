// let obj = {
//     a: 1,
//     b: 2,
    
// }
// var arr = [1, 2]
// obj[arr] = 3
// console.log(obj);

let map = new Map([['a', 1], ['b', 2]])

// map.set({a: 1}, 'hello')
// console.log(map.get({'a': 1}));//undefined,因为引用类型的地址不一样

let obj = {a:1}
map.set(obj, 'hello')
// console.log(map.get(obj));
// console.log(map.size);

// map.forEach((value, key, map) => {
//     console.log(value, key, map);
// })

for (let [key, value] of map) {
    console.log(key, value);
}