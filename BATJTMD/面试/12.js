let arr = [1, 2, 3, 4, 5];

// const res = arr.map((item, index, arr) => {
//     return item * 2;
// })
// console.log(res); // [2, 4, 6 ,8, 10]

// const res = arr.filter((item, index, arr) => {
//     return item > 2;
// })
// console.log(res); // [3, 4, 5]

// const res = arr.reduce((pre, cur, index, arr) => {
//     console.log(pre, cur, index, arr);
//     return pre + cur;
// }, 0)

// console.log(res); // 15

// // 使用try catch终止forEach循环
// try {
//     arr.forEach((item, index, arr) => {
//         if (item === 3) {
//             throw new Error('error')
//         }
//         console.log(item);
//     })
// } catch (error) {
//     console.log('循环终止');
// }

// // node环境下可以使用process.exit()终止forEach循环
// arr.forEach((item, index, arr) => {// break不支持在回调函数中使用
//     if (item === 3) {
//         // break
//         // return
//         // throw new Error('error')
//         process.exit()
//     }
//     console.log(item);
// })
// console.log('hello');


// for (let item of arr) {
//     if (item === 3) {
//         break
//     }
//     console.log(item);
// }
