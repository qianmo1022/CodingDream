// // 辅助数组解决

// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {boolean}
//  */
// var isValidBST = function (root) {
//     let arr = [];
//     const buildArr = (root) => {
//         if (root) {
//             buildArr(root.left);
//             arr.push(root.val);
//             buildArr(root.right);
//         }
//     }
//     buildArr(root);
//     for (let i = 1; i < arr.length; ++i) {
//         if (arr[i] <= arr[i - 1])
//             return false;
//     }
//     return true;
// };
// // 递归中解决

// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {boolean}
//  */
// let pre = null;
// var isValidBST = function (root) {
//     let pre = null;
//     const inOrder = (root) => {
//         if (root === null)
//             return true;
//         let left = inOrder(root.left);

//         if (pre !== null && pre.val >= root.val)
//             return false;
//         pre = root;

//         let right = inOrder(root.right);
//         return left && right;
//     }
//     return inOrder(root);
// };
// 迭代法:

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
let pre = null;
var isValidBST = function (root) {
	const queue = [];
	let cur = root;
	let pre = null;
	while (cur !== null || queue.length !== 0) {
		if (cur !== null) {
			queue.push(cur);
			cur = cur.left;
		} else {
			cur = queue.pop();
			if (pre !== null && cur.val <= pre.val) {
				return false;
			}
			pre = cur;
			cur = cur.right;
		}
	}
	return true;
};