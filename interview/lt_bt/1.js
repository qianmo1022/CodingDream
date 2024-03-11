function dfs(node) {
    console.log(node.val);
    for(let child of node){
        dfs(child);
    }
}