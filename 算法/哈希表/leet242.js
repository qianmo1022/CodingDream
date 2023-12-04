// var isAnagram = function(s, t) {
//     if (s.length !== t.length) return false;
//     const map = new Map();// Map是一种新的数据结构，它类似于对象，也是键值对的集合，但是键的范围不限于字符串，各种类型的值（包括对象）都可以当作键。
//     for (const c of s) {    // 遍历s
//         map.set(c, (map.get(c) || 0) + 1);// 如果map中没有c这个字符，就将c这个字符的值设为0，否则将c这个字符的值加1
//     }
//     for (const c of t) {    // 遍历t
//         if (!map.has(c) || map.get(c) === 0) {   // 如果map中没有t中的字符，或者字符出现次数为0，返回false
//             return false;
//         }
//         map.set(c, map.get(c) - 1); // 否则，将map中的字符出现次数减1
//     }
//     return true;
// };

var isAnagram = function(s, t) {
    return s.length == t.length && [...s].sort().join('') === [...t].sort().join('')
};// 这个方法是将字符串转换成数组，然后对数组进行排序，最后将数组转换成字符串，然后比较两个字符串是否相等