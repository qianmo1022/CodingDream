var levelOrder = function(root) {
    //二叉树的层序遍历
    let res = [], queue = [];//res存放结果，queue存放的是待处理的节点
    queue.push(root);
    if(root === null) {
        return res;
    }
    while(queue.length !== 0) {
        // 记录当前层级节点数
        let length = queue.length;
        //存放每一层的节点
        let curLevel = [];
        for(let i = 0;i < length; i++) {
            let node = queue.shift();
            curLevel.push(node.val);
            // 存放当前层下一层的节点
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        //把每一层的结果放到结果数组
        res.push(curLevel);
    }
    return res;
};