// var longestCommonPrefix = function(strs) {
//     if (strs.length === 0) return '';//如果数组为空，返回空字符串
//     if (strs.length === 1) return strs[0];//如果数组只有一个元素，返回该元素
//     let prefix = strs[0];//取第一个元素作为前缀
//     for (let i = 1; i < strs.length; i++) {//遍历数组
//         while (strs[i].indexOf(prefix) !== 0) {//如果不是以该前缀开头
//             prefix = prefix.slice(0, prefix.length - 1);//将前缀最后一个字符去掉
//             if (prefix === '') return '';//如果前缀为空，返回空字符串
//         }
//     }
//     return prefix;//返回前缀
// };

var longestCommonPrefix = function(strs) {
    if (strs.length <=1) return strs[0]
    strs.sort()//sort()方法默认按照字符串的Unicode码进行排序,排序后只需要比较第一个和最后一个字符串即可
    const len = strs[0].length
    let i
    for ( i = 0; i < len; i++) {//注意这里的i是全局变量，不要用let
        if(strs[0].charAt(i) !== strs[strs.length-1].charAt(i))
            break
    }
    if (i < 1) return ''
    return strs[0].substring(0, i)
}