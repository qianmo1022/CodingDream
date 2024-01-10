// const  num = 5 // 000000000000000000000000000000000000000000101
// const  res = ~num // 111111111111111111111111111111111111111111010

// let n = -6

// 00000110 6的二进制前补0至 32位 取反再加 1 得到 补码
// 11111001 + 1
// 11111010 即为 -6 的二进制

function reverseBit(str) {
    const n = parseInt(str,2)
    return ~n
}

const  binaryStr = '00001101' // 13
const reverseStr = reverseBit(binaryStr) // 11110010 // -14
