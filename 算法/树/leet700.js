// // 递归
// var searchBST = function (root, val) {
//     if (!root || root.val === val) {
//         return root;
//     }
//     if (root.val > val)
//         return searchBST(root.left, val);
//     if (root.val < val)
//         return searchBST(root.right, val);
// };

// 迭代
var searchBST = function (root, val) {
    while (root !== null) {
        if (root.val > val)
            root = root.left;
        else if (root.val < val)
            root = root.right;
        else 
            return root;
    }
    return null;
};