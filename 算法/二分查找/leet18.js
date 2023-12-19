var fourSum = function(nums, target) {
    var res = [];
    var len = nums.length;
    if (len < 4) return res;
    nums.sort(function(a, b) {
        return a - b;
    });
    for (var i = 0; i < len - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        for (var j = i + 1; j < len - 2; j++) {
            //当j>i+1时，nums[j]和nums[j-1]相等，会导致重复
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;
            var left = j + 1;
            var right = len - 1;
            while (left < right) {
                var sum = nums[i] + nums[j] + nums[left] + nums[right];
                if (sum === target) {
                    res.push([nums[i], nums[j], nums[left], nums[right]]);
                    left++;
                    right--;
                    while (left < right && nums[left] === nums[left - 1]) left++;
                    while (left < right && nums[right] === nums[right + 1]) right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }
    return res;
};