// const num = 5 // 00000101
// const lNum = num << 2 // 00010100 // 20
// const rNum = num >> 1 // 00000010 // 2

// 如何实现一个高效率的整数的乘除法
// // 乘法
// function multiply(a,b) {
//     let res = 0
//     while(b > 0){
//         if(b & 1){// 如果b的二进制的最低位是1
//             res += a
//         }
//         a = a << 1
//         b = b >> 1
//     }
//     return res
// }

// console.log(multiply(3,5));

//除法
function divide(a,b) {
    let res = 0
    while(a >= b){
        let c = 0
        while(a >= (b << c)){
            c++
        }
        res += 1 << (c - 1)
        a -= b << (c - 1)
    }
    return res
}