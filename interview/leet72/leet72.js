function minDistance(word1, word2) {
  const m = word1.length;
  const n = word2.length;

  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) {
    // 初始化，从空字符一步一步加到word1
    dp[i][0] = i;
  }
  for (let j = 0; j <= n; j++) {
    // 初始化，从空字符一步一步加到word2
    dp[0][j] = j;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {// 从word1的第i个字符转换到word2的第j个字符不需要操作,即此时的word1[i-1]和word2[j-1]相等
        dp[i][j] = dp[i - 1][j - 1];
      } else {// 从word1的第i个字符转换到word2的第j个字符需要操作
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
      }
    }
  }
  return dp[m][n];
}

console.log(minDistance('horse', 'ros'))