// // 动态规划
// function longestPalindrome(s) {
//     if (s.length <= 1) {
//       return s;
//     }
  
//     let maxLength = 1;
//     let start = 0;
//     // dp[i][j] 表示 s[i..j] 是否是回文串
//     const dp = Array.from(Array(s.length), () => Array(s.length).fill(false));
  
//     // 单个字符一定是回文串
//     for (let i = 0; i < s.length; i++) {
//       dp[i][i] = true;
//     }
  
//     // 检查长度为 2 的子串
//     for (let i = 0; i < s.length - 1; i++) {
//       if (s[i] === s[i + 1]) {
//         dp[i][i + 1] = true;
//         start = i;
//         maxLength = 2;
//       }
//     }
  
//     // 检查长度大于 2 的子串
//     for (let len = 3; len <= s.length; len++) {
//       for (let i = 0; i <= s.length - len; i++) {
//         const j = i + len - 1;
//         if (s[i] === s[j] && dp[i + 1][j - 1]) {
//           dp[i][j] = true;
//           start = i;
//           maxLength = len;
//         }
//       }
//     }
  
//     return s.substring(start, start + maxLength);
// }

// 双指针
function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return s.substring(left + 1, right);
  }
  
  function longestPalindrome(s) {
    if (s.length <= 1) {
      return s;
    }
  
    let longest = '';
  
    for (let i = 0; i < s.length; i++) {
      const palindrome1 = expandAroundCenter(s, i, i); // 以单个字符为中心扩展
      const palindrome2 = expandAroundCenter(s, i, i + 1); // 以两个字符之间的空隙为中心扩展
  
      const longerPalindrome = palindrome1.length > palindrome2.length ? palindrome1 : palindrome2;
      if (longerPalindrome.length > longest.length) {
        longest = longerPalindrome;
      }
    }
  
    return longest;
  }
