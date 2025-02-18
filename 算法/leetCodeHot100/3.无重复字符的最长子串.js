/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// // 滑动窗口
// var lengthOfLongestSubstring = function(s) {
//     let i = 0, res = 0;
//     for(let j = 0;j < s.length; j++) {
//         let index = s.slice(i, j).indexOf(s[j]); // 查找是否有重复字符
//         if(index !== -1) {
//             i += index + 1; // 有重复字符，移动i的位置
//         } else {
//             res = Math.max(res, j - i + 1);
//         }
//     }
//     return res;
// };

// hash表
var lengthOfLongestSubstring = function(s) {
    let map = new Map(), res = 0;
    for(let i = 0, j = 0; j < s.length; j++) {
        if(map.has(s[j])) {
            i = Math.max(map.get(s[j]) + 1, i);// i是当前子串的起始位置
        }
        res = Math.max(res, j - i + 1);// j是当前子串的结束位置，j-i+1是当前子串的长度
        map.set(s[j], j);// 存储字符的位置
    }
    return res;
};
lengthOfLongestSubstring("abcabcbb")
// @lc code=end

