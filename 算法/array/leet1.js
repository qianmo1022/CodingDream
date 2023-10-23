var nums = [2, 7, 11, 15], target = 9

// var twoSum = function (nmus,target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i+1; j < nums.length; j++) {
//             if (nums[i]+nums[j] === target) {
//                 return [i,j]
//             }
//         }
//     }    
// }

// var twoSum = function (nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         let res = target - nums[i]
//         let j = nums.indexof(res)
//         if (i !== j && j !== -1) {
//             return [i, j]
//         }
//     }
// }

var twoSum=function (nums,target) {
    var map = {}//定义一个空对象
    for (let i = 0; i < nums.length; i++) {
       if (map[target-nums[i]] !== undefined){
        return [map[target-nums[i]],i]//返回差值的下标与本次循环值的下标
       }
       map[nums[i]]=i//当目标值与本次循环时数组中的值的差值不存在数组中时，把本次循环时数组中的值与该值的下标存入对象map中
    }
}

console.log(twoSum(nums, target));