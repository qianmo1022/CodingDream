var combinationSum = function(candidates, target) {
    const res = [], path = [];
    candidates.sort((a,b)=>a-b); // 排序
    backtracking(0, 0);
    return res;
    function backtracking(j, sum) {
        if (sum === target) {
            res.push(Array.from(path));
            return;
        }
        for(let i = j; i < candidates.length; i++ ) {
            const n = candidates[i];
            if(n > target - sum) break;
            path.push(n);
            sum += n;
            backtracking(i, sum);
            path.pop();
            sum -= n;
        }
    }
};