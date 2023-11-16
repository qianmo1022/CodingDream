// var search = function(nums, target) {
//     let left = 0, right = nums.length - 1;
//     while (left <= right) {
//         const mid = Math.floor((right - left) / 2) + left;
//         const num = nums[mid];
//         if (num === target) {
//             return mid;
//         } else if (num > target) {
//             right = mid - 1;
//         } else {
//             left = mid + 1;
//         }
//     }
//     return -1;
// };

var search = function(nums, target) {
    nums.sort((a,b) => a-b);//二分查找前需要排序，按照升序排列
    let left = 0,mid = 0;
    let right = nums.length-1;
    while(left <= right){
        mid = left + ((right-left)>>1);//防止溢出
        if(nums[mid] === target){
            return mid;
        }else if(nums[mid] > target){
            right = mid-1;
        }else{
            left = mid+1;
        }
    }
    return -1;
};