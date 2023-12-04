function findMaxAverage(nums, k) {
    let windowSum = 0;
    for (let i = 0; i < k; i++) {
        windowSum += nums[i];//记录滑动窗口中的元素和
    }
    
    let maxSum = windowSum;//记录最大的元素和
    for (let i = k; i < nums.length; i++) {
        windowSum += nums[i] - nums[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }
    
    return maxSum / k;
}

