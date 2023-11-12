// function foo(){
//     // console.log(arguments); //  类数组
//     console.log(Array.from(arguments)); //  类数组转换成数组
// }
// foo(1,2,3,4); 

let arr = [1,2,3,4];

console.log(...arr)