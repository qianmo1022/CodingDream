var combinationSum3 = function(k, n) {
    let res = [];
    let path = [];
    let sum = 0;
    const dfs = (path,index) => {
        // 剪枝操作
        if (sum > n){
            return
        }
        if (path.length == k) {
            if(sum == n){
                res.push([...path]);
                return
            }
        }
        for (let i = index; i <= 9 - (k-path.length) + 1;i++) {
            path.push(i);
            sum = sum + i;
            index += 1;
            dfs(path,index);
            sum -= i
            path.pop()
        }
    }
    dfs(path,1);
    return res
};