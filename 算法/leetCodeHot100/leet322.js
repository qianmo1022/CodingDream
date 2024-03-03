// var coinChange = function(coins, amount) {
//     if (!amount) {
//         return 0
//     }

//     let dp = Array(amount + 1).fill(Infinity)
//     dp [0] = 0
//     for(let i = 0; i < coins.length; i++){
//         for(let j = coins[i]; j <= amount;j++){
//             dp[j] = Math.min(dp[j - coins[i]] + 1,dp[j])
//         }
//     }
//     return dp[amount] === Infinity ? -1 : dp[amount]
// };

var coinChange = function(coins, amount) {
    if (!amount) {
        return 0
    }

    let dp = Array(amount + 1).fill(Infinity)
    dp [0] = 0
    for(let i = 1;i <= amount; i++){
        for(let j = 0;j < coins.length;j++){
            if(i >= coins[j] && dp[i - coins[j]] !== Infinity) {
                dp[i] = Math.min(dp[i],dp[i - coins[j]] + 1)
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount] 
};