var longestConsecutive = function(nums) {
    const set = new Set(nums);// 去重
    let longest = 0;
    for (const num of set) { // 遍历set
        if (!set.has(num - 1)) {// 如果set中不存在num - 1，那么就说明num是一个连续序列的开始
            let current = num;
            let currentLength = 1;
            while (set.has(current + 1)) {// 计算以num为开始的连续序列的长度
                current++;
                currentLength++;
            }
            longest = Math.max(longest, currentLength);
        }
    }
    return longest;  
};