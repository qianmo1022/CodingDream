// // 递归
// var convertBST = function(root) {
//     let pre = 0;
//     const ReverseInOrder = (cur) => {
//         if(cur) {
//             ReverseInOrder(cur.right);
//             cur.val += pre;
//             pre = cur.val;
//             ReverseInOrder(cur.left);
//         }
//     }
//     ReverseInOrder(root);
//     return root;
// };

// 迭代
var convertBST = function (root) {
    let pre = 0;
    let cur = root;
    let stack = [];
    while (cur !== null || stack.length !== 0) {
        while (cur !== null) {
            stack.push(cur);
            cur = cur.right;
        }
        cur = stack.pop();
        cur.val += pre;
        pre = cur.val;
        cur = cur.left;
    }
    return root;
};
