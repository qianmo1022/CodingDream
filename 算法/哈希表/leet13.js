function romanToInt(s) {
    const romanDict = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
    
    let result = 0;// 初始化为0
    let prevValue = 0; // 用于记录前一个字符的值
    
    for (let i = s.length - 1; i >= 0; i--) {
        const char = s[i];
        const value = romanDict[char];
        
        if (value < prevValue) {// 如果当前字符的值小于前一个字符的值，则减去当前字符的值
            result -= value;
        } else {
            result += value;
        }
        
        prevValue = value;
    }
    
    return result;
}
