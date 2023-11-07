// var isPalindrome = function(x) {
//     var str = x.toString()
//     var len = str.length

//     for (let i = 0; i < len / 2; i++) {
//         if (str[i] !== str[len - 1 - i]) {
//             return false
//         }
//     }
//     return true
// };
var isPalindrome = function(x) {
    var str = x.toString()
    return str === str.split('').reverse().join('') 
}
console.log(isPalindrome(121));
