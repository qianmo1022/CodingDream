var minSubArrayLen = function(target, nums) {
    const len = nums.length;
    if (len === 0) return 0;

    let slow = 0;
    let fast = 0;
    let total = 0;
    let minLength = Infinity;

    while (fast < len) {
        total += nums[fast];
        while (total >= target) {//缩小到不满足条件
            minLength = Math.min(minLength, fast - slow + 1);//更新最小长度，注意这里是fast - slow + 1，因为fast是从0开始的，所以长度要加1
            total -= nums[slow];
            slow++;
        }
        fast++;
    }
    return minLength === Infinity ? 0 : minLength;//如果minLength没有被赋值，说明没有找到满足条件的子数组，返回0
};