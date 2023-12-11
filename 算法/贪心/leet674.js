// function findLengthOfLCIS(nums) {
//     if (nums.length === 0) {
//         return 0;
//     }

//     let maxLength = 1;
//     let currentLength = 1;

//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] > nums[i - 1]) {
//             currentLength++;
//             maxLength = Math.max(maxLength, currentLength);
//         } else {
//             currentLength = 1;
//         }
//     }

//     return maxLength;
// }

//贪心
var findLengthOfLCIS = function(nums) {
    let ans = 0;
    const n = nums.length;
    let start = 0;
    for (let i = 0; i < n; i++) {
        if (i > 0 && nums[i] <= nums[i - 1]) {//如果不是递增的，就重新开始计算
            start = i;
        }
        ans = Math.max(ans, i - start + 1);//i-start+1就是当前的长度
    }
    return ans;
};
