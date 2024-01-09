// var lowestCommonAncestor = function(root, p, q) {
//     // 使用递归的方法
//     // 1. 使用给定的递归函数lowestCommonAncestor
//     // 2. 确定递归终止条件
//     if(root === null) {
//         return root;
//     }
//     if(root.val > p.val && root.val > q.val) {
//         // 向左子树查询
//          return root.left = lowestCommonAncestor(root.left,p,q);
//     }
//     if(root.val < p.val && root.val < q.val) {
//         // 向右子树查询
//         return root.right = lowestCommonAncestor(root.right,p,q);
//     }
//     return root;
// };

var lowestCommonAncestor = function(root, p, q) {
    // 使用迭代的方法
    while(root) {
        if(root.val > p.val && root.val > q.val) {
            root = root.left;
        }else if(root.val < p.val && root.val < q.val) {
            root = root.right;
        }else {
            return root;
        }
        
    }
    return null;
};