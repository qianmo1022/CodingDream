// var minCostClimbingStairs = function(cost) {
//     const dp = [0, 0]
//     for (let i = 2; i <= cost.length; ++i) {
//       dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
//     }
//     return dp[cost.length]
//   };

var minCostClimbingStairs = function(cost) {
    let dpBefore = 0,
      dpAfter = 0
      for(let i = 2;i <= cost.length;i++){
          let dpi = Math.min(dpBefore + cost[i - 2],dpAfter + cost[i - 1])
          dpBefore = dpAfter
          dpAfter = dpi
      }
      return dpAfter
  };