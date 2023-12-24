var largestValues = function(root) {
    //使用层序遍历
    let res = [], queue = [];
    queue.push(root);

    while(root !== null && queue.length) {
        //设置max初始值就是队列的第一个元素
        let max = queue[0].val;
        let length = queue.length;
        while(length--) {
            let node = queue.shift();
            max = max > node.val ? max : node.val;
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        //把每一层的最大值放到res数组
        res.push(max);
    }

    return res;
};