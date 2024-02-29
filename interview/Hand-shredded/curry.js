// // 实现一个sum函数，可以多次调用传不定参，实现累加， 提供一个sumof函数每次调用返回当前结果
// function sum(a) {
//     let currentSum = a;

//     function f(b) {
//         currentSum += b;
//         return f;
//     }

//     f.sumOf = function() {
//         return currentSum;
//     };

//     return f;
// }

// console.log(sum(1)(2)(3).sumOf());  // 输出：6