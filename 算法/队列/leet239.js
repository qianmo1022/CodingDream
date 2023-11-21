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



var maxSlidingWindow = function(nums, k) {
    //在窗口移动的过程中，只根据发生变化的元素对最大值进行更新
    const len = nums.length;
    const res = [];
    const deque = [];//双端队列，保存当前窗口中最大值的数组下标
    for(let i = 0; i < len; i++) {
        //当队列不为空，且队列尾部元素小于等于当前元素时，将队列尾部元素出队
        while(deque.length && nums[deque[deque.length - 1]] <= nums[i]) {
            deque.pop();
        }
        //将当前元素的下标入队
        deque.push(i);
        //当队列头部元素的下标小于滑动窗口左边界时，将队列头部元素出队
        while(deque.length && deque[0] <= i - k) {//i - k是滑动窗口的左边界,相当于i的下标开始往左边移动k个位置
            deque.shift();
        }
        //当窗口长度为k时，保存当前窗口中最大值
        if(i >= k - 1) {
            res.push(nums[deque[0]]);
        }
    }

    return res;
};

console.log(maxSlidingWindow(nums, k));