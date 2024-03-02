// var numSquares = function(n) {
//     const f = new Array(n + 1).fill(0);
//     for (let i = 1; i <= n; i++) {
//         let minn = Number.MAX_VALUE;
//         for (let j = 1; j * j <= i; j++) {
//             minn = Math.min(minn, f[i - j * j]);
//         }
//         f[i] = minn + 1;
//     }
//     return f[n];
// };

// // 先遍历物品，再遍历背包
// var numSquares = function(n) {
//     let dp = new Array(n + 1).fill(Infinity)
//     dp[0] = 0

//     for(let i = 1; i**2 <= n; i++) {
//         let val = i**2
//         for(let j = val; j <= n; j++) {
//             dp[j] = Math.min(dp[j], dp[j - val] + 1)
//         }
//     }
//     return dp[n]
// };

var numSquares = function(n) {
    let dp = new Array(n + 1).fill(Infinity)
    dp[0] = 0

    for(let i = 1; i <= n; i++) {
        for(let j = 1; j * j <= i; j++) {
            dp[i] = Math.min(dp[i - j * j] + 1, dp[i])
        }
    }

    return dp[n]
};
