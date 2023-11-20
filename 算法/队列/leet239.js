let nums = [1,3,-1,-3,5,3,6,7], k = 3;

// var maxSlidingWindow = function(nums, k) {
//     let left = 0, righit = k - 1, max = [];
//     while (righit < nums.length) {
//         max.push(Math.max(...nums.slice(left, righit + 1)));//slice() 方法可从已有的数组中返回选定的元素。
//         left++;
//         righit++;
//     }

//     return max;
// };

// console.log(maxSlidingWindow(nums, k));