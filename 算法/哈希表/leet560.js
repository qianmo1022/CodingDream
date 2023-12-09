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
    mp.set(0, 1);
    let count = 0, pre = 0;
    for (const x of nums) {
        pre += x;
        if (mp.has(pre - k)) {
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