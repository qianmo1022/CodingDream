// var isPalindrome = function (s) {
//     s = s.toLowerCase();
//     let i = 0, j = s.length - 1;
  
//     while (i < j) {
//       if (!isValid(s[i])) {
//         i++;
//         continue;
//       }
//       if (!isValid(s[j])) {
//         j--;
//         continue;
//       }
//       if (s[i] != s[j]) {
//         return false;
//       }
//       i++;
//       j--;
//     }
//     return true;
//   };
  
//   var isValid = function (c) {
//     return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9');
//   };


var isPalindrome = function(s) {
    //先替换掉所有非字母和数字
    //再替换掉所有的空格
    //然后后reverse()方法颠倒顺序
    //最后两者进行对比
     s=s.replace(/[^a-zA-Z0-9]/g,"").replace(/\s/g,"").toLowerCase();
     return s===[...s].reverse().join("")
}
