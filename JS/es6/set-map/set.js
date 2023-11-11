// let arr = [1, 1, 2, 3, 4, 5]
// let obj = {
//     a: 1,
//     b: 1,
//     c: 1,
// }

// let set = new Set([1,1,2,2,3,4])

// // console.log(set.keys());
// // console.log(set.values());
// set.add(5)

// console.log(set);

// 数组去重
// var arr = [1, 2, 1, 1, '1']

// function unique(arr) {
//     // return res = Array.from(new Set(arr)) //转换成数组
//     return [...new Set(arr)]
// }

// var unique = (arr) => [...new Set(arr)]
// console.log(unique(arr));

let set = new Set([1,1,2,2,3,4])
// set.delete(1)
// console.log(set);

// set.forEach((item,index,set)=>{
//     console.log(item,index,set);
// })

// console.log(set.values());
// console.log(set.keys());

// let string = 'abcda'
// for (const item of string) {
//     console.log(item);
// }

for (let item of set.entries()) {
    console.log(item);
}