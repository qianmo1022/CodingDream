// var subarraySum = function(nums, k) {
//     let count = 0
//     for (let start = 0; start < nums.length; start++) {
//         let sum  = 0
//         for (let end = start; end >= 0; end--) {
//             sum += nums[end]
//             if (sum === k) {
//                 count++
//             }
//         }
//     }
//     return count
// };

var subarraySum = function(nums, k) {
    const mp = new Map();
    mp.set(0, 1);// 初始化前缀和为0的个数为1，这样可以统计到前缀和等于k的情况
    let count = 0, pre = 0;
    for (const x of nums) {// 遍历数组
        pre += x;// 计算前缀和
        if (mp.has(pre - k)) {// 如果前缀和中存在pre - k，那么就说明存在一段区间和为k
            count += mp.get(pre - k);
        }
        if (mp.has(pre)) {
            mp.set(pre, mp.get(pre) + 1);
        } else {
            mp.set(pre, 1);
        }
    }
    return count;
};