let str = 'abc'
// 时间效率太低
// var validPalindrome = function(s) {
//     if(isPalindrome(s)) {
//         return true
//     } else {
//         const len = s.length;
//         for (let i = 0; i < len; i++) {
//             //每个字符都去掉一次，判断是否是回文
//             //let str = s.split('').splice(i, 1).join('')无法直接用s.splice(i, 1)这样的方法，因为splice会改变原数组，返回的是被删除的元素
//             //即验证的时候，s已经被改变了，所以要用split转换成数组，再用splice
//             let arr = s.split('')
//             arr.splice(i, 1)
//             let str = arr.join('')
//             if (isPalindrome(str)) {
//                 return true
//             } 
//         }
//         return false
//     }

// };

// function isPalindrome(str) {
//     const len = str.length;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] !== str[len - 1 - i])  {
//             return false
//         }
//     }
//     return true
// }

// 双指针
function validPalindrome(s) {
    const len = s.length;
    let i = 0, j = len - 1;
    while(i < j&&s[i]===s[j]){
        i++
        j--
    } 
    // i j
    //尝试跳过i或者j，判断剩下的字符串是否是回文
    if(isPalindrome(i+1,j)){
        return true
    }
    if(isPalindrome(i,j-1)){
        return true
    }
    return false
    function isPalindrome(st,ed){
    while(st<ed){
        if(s[st]!==s[ed]){
            return false
        }
        st++
        ed--
    }
    return true
    }
}
console.log(validPalindrome(str))