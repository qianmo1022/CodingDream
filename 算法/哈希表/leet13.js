// function romanToInt(s) {
//     const romanDict = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
    
//     let result = 0;// 初始化为0
//     let prevValue = 0; // 用于记录前一个字符的值
    
//     for (let i = s.length - 1; i >= 0; i--) {
//         const char = s[i];
//         const value = romanDict[char];
        
//         if (value < prevValue) {// 如果当前字符的值小于前一个字符的值，则减去当前字符的值
//             result -= value;
//         } else {
//             result += value;
//         }
        
//         prevValue = value;
//     }
    
//     return result;
// }
var romanToInt = function(s) {
    const symbolValues = new Map();// Map是一种新的数据结构，它类似于对象，也是键值对的集合，但是键的范围不限于字符串，各种类型的值（包括对象）都可以当作键。
    symbolValues.set('I', 1);
    symbolValues.set('V', 5);
    symbolValues.set('X', 10);
    symbolValues.set('L', 50);
    symbolValues.set('C', 100);
    symbolValues.set('D', 500);
    symbolValues.set('M', 1000);  
    let ans = 0;
    const n = s.length;
    for (let i = 0; i < n; ++i) {
        const value = symbolValues.get(s[i]);
        if (i < n - 1 && value < symbolValues.get(s[i + 1])) {// 如果当前字符的值小于前一个字符的值，则减去当前字符的值
            ans -= value;// 注意这里是减去当前字符的值
        } else {
            ans += value;// 否则加上当前字符的值
        }
    }
    return ans;
};