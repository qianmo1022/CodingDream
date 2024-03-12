var diameterOfBinaryTree = function(root) {
    let ans = 0
    const dfs = (node) => {
        if(!node) {
            return 0
        }
        const left = dfs(node.left)
        const right = dfs(node.right)
        ans = Math.max(ans,left + right)
        return Math.max(left,right) + 1
    }
    dfs(root)
    return ans
};