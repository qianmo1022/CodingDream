var moveZeroes = function(nums) {
    let len = nums.length
    let slow = 0
    for(let fast = 0; fast < len ; fast++){
        if(nums[fast] !== 0){
            [nums[slow],nums[fast]] = [nums[fast],nums[slow]]
            slow++
        }
    }
};