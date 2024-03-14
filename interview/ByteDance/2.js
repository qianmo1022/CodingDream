let a = toString(90071992547409929999)
let b = 78583920

function sum(a,b) {
    num1 = a.toString()
    num2 = b.toString()
    console.log(num1, num2);
    
    const len = Math.max(num1.length, num2.length)
    num1 = num1.padStart(len, '0')
    num2 = num2.padStart(len, '0')

    let result = ''
    let carry = 0
    for (let i = len - 1; i >= 0 ;i--) {
        const n = +num1[i] + +num2[i] + carry
        carry = Math.floor(n / 10)

        result = n % 10 + result
    }

    if (carry) {
        result = carry + result
    }

    return Number(result)
}

console.log(sum(a,b));