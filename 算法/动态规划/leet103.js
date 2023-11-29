const coins = [1, 2, 5], amount = 11

var coinChange = function(coins, amount) {
    let dp = new Array(amount + 1).fill(Infinity);//dp[i]表示凑成金额i所需的最少硬币个数
    dp[0] = 0;//金额为0时，所需硬币个数为0
    for (let i = 0; i < coins.length; i++) {//遍历硬币
        for (let j = coins[i]; j < amount + 1; j++) {//遍历金额，小于当前钱币的金额不用考虑
            dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);//状态转移方程,dp[j]表示凑成金额j所需的最少硬币个数
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];//如果dp[amount]为Infinity说明无法凑出，返回-1
};

console.log(coinChange(coins, amount));