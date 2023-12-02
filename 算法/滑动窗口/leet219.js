// var containsNearbyDuplicate = function(nums, k) {
//     var map = {};
//     for(var i = 0; i < nums.length; i++) {
//         if(map[nums[i]] !== undefined && i - map[nums[i]] <= k) {//因为条件是<=k,所以滑动窗口的大小是k+1（包括两个元素本身）
//             return true;
//         }
//         map[nums[i]] = i;
//     }
//     return false;
// };

var containsNearbyDuplicate = function(nums, k) {
    const set = new Set();
    const length = nums.length;
    for (let i = 0; i < length; i++) {
        if (i > k) {//因为条件是<=k,所以滑动窗口的大小是k+1（包括两个元素本身）
            set.delete(nums[i - k - 1]);//超出滑动窗口的范围，删除滑动窗口中最左边的元素
        }
        if (set.has(nums[i])) {
            return true;
        }
        set.add(nums[i])//向滑动窗口中添加元素
    }
    return false;
};
