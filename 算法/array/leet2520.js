var countDigits = function (num) {
    let n = num
    let res = 0
    while (n) {
        if (num % (n % 10) === 0) {
            res++
        }
        n = Math.floor(n/10)
    }
    return res
};