function threeSum(nums) {
    const result = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {// 最后两个数，留给内部循环，所以这里是length-2
        // 避免重复项
        if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
            const seen = new Map(); // 创建哈希表，用于存储已经遍历过的数字
            const target = -nums[i];

            for (let j = i + 1; j < nums.length; j++) {
                const complement = target - nums[j];// 两数之和

                if (seen.has(complement)) {//has查找的是key
                    // 找到符合条件的三元组
                    result.push([nums[i], complement, nums[j]]);
                    
                    // 避免重复项
                    while (j + 1 < nums.length && nums[j] === nums[j + 1]) {
                        j++;
                    }
                }

                // 将当前数字存入哈希表
                seen.set(nums[j], j);
            }
        }
    }

    return result;
}

// function threeSum(nums) {
//     const result = [];
//     nums.sort((a, b) => a - b); // 将数组排序

//     for (let i = 0; i < nums.length - 2; i++) { // 固定第一个数，转化为两数之和问题
//         if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) { // 跳过重复的第一个数
//             let left = i + 1; // 左指针指向第一个数的下一个位置
//             let right = nums.length - 1; // 右指针指向数组末尾
//             const target = -nums[i]; // 目标值为当前数的相反数，转化为两数之和为target的问题

//             while (left < right) { // 双指针夹逼查找
//                 const sum = nums[left] + nums[right];

//                 if (sum === target) { // 找到满足条件的三元组
//                     result.push([nums[i], nums[left], nums[right]]);
//                     while (left < right && nums[left] === nums[left + 1]) left++; // 跳过重复的左指针元素,
//                     //虽然在上面这行特定的代码片段中，left < right 的判断条件可能是冗余的，但是保留它可以使代码更健壮，更能抵抗未来可能的修改和错误。
//                     while (left < right && nums[right] === nums[right - 1]) right--; // 跳过重复的右指针元素
//                     left++; // 移动左指针
//                     right--; // 移动右指针
//                 } else if (sum < target) { // 和小于目标值，左指针右移
//                     left++;
//                 } else { // 和大于目标值，右指针左移
//                     right--;
//                 }
//             }
//         }
//     }

//     return result;
// }
