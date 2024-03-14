let arr = [1,2,3]

let obj = {
    a:1,
    b:2,
    c:3
}
// for...of只能遍历具有迭代器的对象，for...in可以遍历对象的属性

// for (let item in obj) {
//     console.log(item);
// }


console.log(arr.__proto__[Symbol.iterator]);// [Function: values]