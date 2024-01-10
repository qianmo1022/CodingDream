let a = 13

// 13 /2 = 6 ... 1
// 6 /2 = 3 ... 0
// 3 /2 = 1 ... 1
// 1 /2 = 0 ... 1
// 要倒过来1101


// x*2^n + x*2^(n-1) + ... + x*2^0 = 13

let b = 1101

// console.log(parseInt(10,2));

const arr = [1,2,3]
const newArr = arr.map(parseInt) // 相当于 parseInt(1,0) parseInt(2,1) parseInt(3,2)
console.log(newArr);