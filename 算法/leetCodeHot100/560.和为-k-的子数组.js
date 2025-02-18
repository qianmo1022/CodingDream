/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为 K 的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let map = new Map();// 存储前缀和出现的次数
    map.set(0,1)// 前缀和为0的次数为1
    let res = 0; pre = 0;
    for (let i = 0; i < nums.length; i++) {
        pre += nums[i];
        if (map.has(pre - k)) {
            res += map.get(pre - k);
        } 
        if (map.has(pre)) {
            map.set(pre, map.get(pre) + 1);
        } else {
            map.set(pre, 1);
        }
    }
    return res;
};
// @lc code=end

