// var isSymmetric = function(root) {
//     // 使用递归遍历左右子树 递归三部曲
//     // 1. 确定递归的参数 root.left root.right和返回值true false 
//     const compareNode = function(left, right) {
//         // 2. 确定终止条件 空的情况
//         if(left === null && right !== null || left !== null && right === null) {
//             return false;
//         } else if(left === null && right === null) {
//             return true;
//         } else if(left.val !== right.val) {
//             return false;
//         }
//         // 3. 确定单层递归逻辑
//         let outSide = compareNode(left.left, right.right);
//         let inSide = compareNode(left.right, right.left);
//         return outSide && inSide;
//     }
//     if(root === null) {
//         return true;
//     }
//     return compareNode(root.left, root.right);
// };

var isSymmetric = function(root) {
    // 迭代方法判断是否是对称二叉树
    // 首先判断root是否为空
    if(root === null) {
        return true;
    }
    let queue = [];
    queue.push(root.left);
    queue.push(root.right);
    while(queue.length) {
        let leftNode = queue.shift();    //左节点
        let rightNode = queue.shift();   //右节点
        if(leftNode === null && rightNode === null) {
            continue;
        }
        if(leftNode === null || rightNode === null || leftNode.val !== rightNode.val) {
            return false;
        }
        queue.push(leftNode.left);     //左节点左孩子入队
        queue.push(rightNode.right);   //右节点右孩子入队
        queue.push(leftNode.right);    //左节点右孩子入队
        queue.push(rightNode.left);    //右节点左孩子入队
    }
    
    return true;
  };
