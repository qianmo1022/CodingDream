// // 动态规划
// // 低买高卖
// var maxProfit = function(prices) {
// // 流程 自顶向下 递归
//     // 当天卖 dp[i] = Math.max(prince - min, dp[i-1])
//     // 自下向上 迭代 相信每一个dp[i]都是最优解 最优子结构
//     // dp[0] = 0
//     const dp = new Array(prices.length).fill(0)
//     let min = prices[0]
//     for(let i = 1; i < prices.length; i++) {
//         min = Math.min(min, prices[i])// 最低价格
//         dp[i] = Math.max(prices[i] - min, dp[i-1])// 当天卖出的最大利润
//     }
//     return dp[prices.length - 1]
// };

// maxProfit([7,1,5,3,6,4]); // 5


// 最低的价格买入，最高的价格卖出   贪心算法(greedy)
var maxProfit = function(prices) {
    let min = prices[0]
    let profit = 0
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            profit = Math.max(profit,prices[i] - min)
        } else {
            min = Math.min(min, prices[i])
        }
    }
    return profit
}