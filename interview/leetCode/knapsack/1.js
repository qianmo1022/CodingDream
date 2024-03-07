function knapsack(weight,value,bagweight){
    // dp[i][j] 表示从下标为[0-i]的物品里任意取，放进容量为j的背包，价值总和最大是多少。
    let dp = new Array(weight.length).fill(null).map(()=>new Array(bagweight+1).fill(0))
    // 如果背包容量j为0的话，即dp[i][0]，无论是选取哪些物品，背包价值总和一定为0
    // 初始化
    for(let j = weight[0];j<=bagweight;j++){
        dp[0][j] = value[0]//只有一个物品的时候，如果背包容量大于等于这个物品的重量，那么背包价值总和就是这个物品的价值
    }

    for(let i=1;i < weight.length;i++ ){//物品,从第二个物品开始,第一个物品已经初始化了
        for(let j = 0;j<=bagweight;j++){//背包容量,从0开始,背包容量为0的时候，背包价值总和一定为0
            if(j < weight[i]){
                dp[i][j] = dp[i-1][j]
            }else{
                dp[i][j] = Math.max(dp[i-1][j],dp[i-1][j-weight[i]]+value[i])
            }
        }
    }
    return dp[weight.length-1][bagweight]
}

console.log(knapsack([1, 3, 4], [15, 20, 30], 4))