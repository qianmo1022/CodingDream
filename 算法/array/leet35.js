var searchInsert = function(nums, target) {
    var i = 0
    while (i < nums.length && nums[i] < target) {
        i++
    }
    return i
};
var nums = [1,3,5,6];