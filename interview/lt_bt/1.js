// dfs 深度优先搜索
// 列表转树
function dfs(node) {
    console.log(node.val);
    for(let child of node){
        dfs(child);
    }
}