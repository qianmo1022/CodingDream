var findSubsequences = function(nums) {
    let result = []
    let path = []
    function backtracing(startIndex) {
        if(path.length > 1) {
            result.push(path.slice())
        }
        let uset = []
        for(let i = startIndex; i < nums.length; i++) {
            if((path.length > 0 && nums[i] < path[path.length - 1]) || uset[nums[i] + 100]) {
                continue
            }
            uset[nums[i] + 100] = true
            path.push(nums[i])
            backtracing(i + 1)
            path.pop()
        }
    }
    backtracing(0)
    return result
};