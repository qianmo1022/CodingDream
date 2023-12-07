// var maxDepth = function(root) {
//     if(!root) {
//         return 0//没有节点，深度为0，这里是递归的出口
//     }else{
//         const left = maxDepth(root.left)
//         const right = maxDepth(root.right)
//         return Math.max(left,right)+1//+1是因为要算上root这一层
//     }
// };

function maxDepth(root) {
    if (!root) {
      return 0;
    }
  
    let queue = [root];
    let depth = 0;
  
    while (queue.length) {
        let levelSize = queue.length;
        depth++;
      for (let i = 0; i < levelSize; i++) {//这里是关键，每次循环都是把当前层的节点都出队，然后把下一层的节点都入队，所以每次循环都是一层
        const node = queue.shift();
        if (node.left) {
          queue.push(node.left);
        }
        if (node.right) {
          queue.push(node.right);
        }
      }
    }
  
    return depth;
  }
  