// var isHappy = function(n) {
//     let result = [];
//     let sum = 0;
//     while (n !== 1) {
//         n = n.toString().split('');// 1. 转换为字符串 2. 转换为数组
//         n.forEach(num => {
//             sum += num * num;
//         });
//         if (result.includes(sum)) {// 3. 判断是否有重复的数字, 有则代表无限循环返回false
//             return false;
//         }
//         result.push(sum);// 4. 将结果存入数组
//         n = sum;
//         sum = 0;
//     }
//     return true;
// };

//哈希表
var isHappy = function (n) {
    let m = new Map()

    const getSum = (num) => {
        let sum = 0
        while (n) { //从个位开始，每次取一位，直到取完
            sum += (n % 10) ** 2
            n = Math.floor(n / 10)
        }
        return sum
    }

    while (true) {
        // n出现过，证明已陷入无限循环
        if (m.has(n)) return false
        if (n === 1) return true
        m.set(n, 1)
        n = getSum(n)
    }
}
