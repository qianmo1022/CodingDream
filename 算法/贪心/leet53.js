var maxSubArray = function(nums) {
    let result = -Infinity
    let count = 0
    for(let i = 0; i < nums.length; i++) {
        count += nums[i]
        if(count > result) {
            result = count
        }
        if(count < 0) {
            count = 0
        }
    }
    return result
};