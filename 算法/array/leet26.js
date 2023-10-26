var removeDuplicates = function(nums) {
    const n = nums.length
    if (n === 0) {
        return 0
    }
    let fast = 1 ,slow = 1//第一个元素总是唯一的所以直接从第二个元素开始
    while (fast < n) {
        if (nums[fast] !== nums[fast - 1]) {
            nums[slow] = nums [fast]
            ++slow
        }
        ++fast
    }
    return slow
};


removeDuplicates([0,1,0,2,3,5,8,2,9])

