// function knapsack(weight,value,bagweight){
//     const dp = new Array(bagweight+1).fill(0)
//     for(let i = 0;i<weight.length;i++){
//         for(let j = weight[i]; j<=bagweight;j++){ // 递增，会导致重复计算,结果不准确
//             dp[j] = Math.max(dp[j],dp[j-weight[i]]+value[i])
//         }
//     }
//     return dp[bagweight]
// }



function knapsack(weight,value,bagweight){
    const dp = new Array(bagweight+1).fill(0)
    for(let i = 0;i<weight.length;i++){
        for(let j = bagweight; j>=weight[i];j--){ // 递减，不会导致重复计算
            dp[j] = Math.max(dp[j],dp[j-weight[i]]+value[i])
        }
    }
    return dp[bagweight]
}

console.log(knapsack([1, 3, 4], [15, 20, 30], 4))