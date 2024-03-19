// 面试的准备策略 大厂面经
// 广度优先列表转树
function bfs (root){
    // 队列，FIFO(先进先出)
    const queue = [root]
    while (queue.length) {
        const currentNode = queue.shift()
        console.log(currentNode.val)

        if (currentNode.children) {
            currentNode.children.forEach(child => {
                queue.push(child)
            })
        }
    }
}