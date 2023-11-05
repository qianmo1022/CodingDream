const s = 'abcabcbb'
// var lengthOfLongestSubstring = function(s) {
//     const len = s.length;
//     if (len === 0) return 0;
//     let res = 1;//最长子串长度
//     let currentS = s[0];

//     for (let i = 0; i < len; i++) {
//         let current = 1//当前子串长度
//         let j = i + 1;
//         while(j <len && !currentS.includes(s[j])){
//             current++
//             currentS += s[j]
//             j++
//         }
//         res = Math.max(res, current)
//     }
//     return res
// };

// var lengthOfLongestSubstring = function(s) {
//     let obj = {}
//     let res = 0;//最长子串长度
//     let j = 0;//不重复子串的起始位置下标

//     for (let i = 0; i < s.length; i++) {
//         const value = obj[s[i]];//当前字符上一次出现的位置
//         if (value !== undefined) {
//             j = Math.max(j, value + 1)//j为不重复子串的起始位置,如果当前字符在之前出现过,则j为当前字符上一次出现的位置+1
//         }
//         res = Math.max(res, i - j + 1)//i-j+1为当前不重复子串的长度
//         obj[s[i]] = i//记录当前字符的位置
        
//     }
//     return res
// };  

var lengthOfLongestSubstring = function(s) {
    let i = 0, res = 0;
    for (let j = 0; j < s.length; j++) {
        let index = s.slice(i,j).indexOf(s[j])//判断当前字符是否在不重复子串中出现过
        if (index === -1) {
            res = Math.max(res, j - i + 1)//
        } else {
            i = i + index + 1//如果出现过,则i为当前字符上一次出现的位置+1
        }
    }
    return res
}