/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

const check = (left,right)=>{
    if(left === null && right === null) return true
    if(left === null || right === null) return false
    return left.val === right.val && check(left.left,right.right) && check(left.right,right.left)
}
var isSymmetric = function(root) {
    return check(root.left,root.right)
};
// @lc code=end

