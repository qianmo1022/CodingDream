function isSubtree(root, subRoot) {
    if (!root) return false; // 如果 root 为空，则无法匹配子树
    if (isSameTree(root, subRoot)) return true; // 如果当前节点与 subRoot 相同，则找到匹配的子树

    // 递归检查左子树和右子树
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

function isSameTree(tree1, tree2) {
    if (!tree1 && !tree2) return true; // 如果两棵树均为空，则它们相同
    if (!tree1 || !tree2) return false; // 如果一棵树为空，另一棵不为空，则它们不同
    if (tree1.val !== tree2.val) return false; // 如果节点值不同，则两棵树不同

    // 递归比较左右子树
    return isSameTree(tree1.left, tree2.left) && isSameTree(tree1.right, tree2.right);
}