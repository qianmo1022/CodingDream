// // 方法一：动态规划（dp 数组）
// const maxProfit = (prices) => {
//     let dp = Array.from(Array(prices.length), () => Array(2).fill(0));
//     // dp[i][0] 表示第i天持有股票所得现金。
//     // dp[i][1] 表示第i天不持有股票所得最多现金
//     dp[0][0] = 0 - prices[0];// for 循环从1开始，且为了保证 i - 1有意义所以第0天的情况要单独处理
//     dp[0][1] = 0;
//     for(let i = 1; i < prices.length; i++) {
//         // 如果第i天持有股票即dp[i][0]， 那么可以由两个状态推出来
//         // 第i-1天就持有股票，那么就保持现状，所得现金就是昨天持有股票的所得现金 即：dp[i - 1][0]
//         // 第i天买入股票，所得现金就是昨天不持有股票的所得现金减去 今天的股票价格 即：dp[i - 1][1] - prices[i]
//         dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] - prices[i]);
        
//         // 在来看看如果第i天不持有股票即dp[i][1]的情况， 依然可以由两个状态推出来
//         // 第i-1天就不持有股票，那么就保持现状，所得现金就是昨天不持有股票的所得现金 即：dp[i - 1][1]
//         // 第i天卖出股票，所得现金就是按照今天股票佳价格卖出后所得现金即：prices[i] + dp[i - 1][0]
//         dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] + prices[i]);
//     }

//     return dp[prices.length -1][1];// 落袋为安，最后一天不持有股票所得现金肯定比持有股票的所得现金多
// };

// 方法二：动态规划（滚动数组）
const maxProfit = (prices) => {
    // 滚动数组
    // have: 第i天持有股票最大收益; notHave: 第i天不持有股票最大收益
    let n = prices.length,
        have = -prices[0],
        notHave = 0;
    for (let i = 1; i < n; i++) {
        have = Math.max(have, notHave - prices[i]);
        notHave = Math.max(notHave, have + prices[i]);
    }
    // 最终手里不持有股票才能保证收益最大化
    return notHave;
}