// const num1 = 5 // 101
// const num2 = 3 // 011

// const res = num1 ^ num2 // 110  // 6

const num1 = 5 // 101
const num2 = 7 // 111
// num1 ^ num2 = 010 // 2
function swap(a,b) {
    a = a ^ b
    b = a ^ b
    a = a ^ b
    return [a,b]
}

[num1,num2] = swap(num1,num2)
console.log(num1,num2); // 7 5