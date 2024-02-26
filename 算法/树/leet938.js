// var rangeSumBST = function(root, low, high) {
//     if (!root) {
//         return 0;
//     }
//     if (root.val > high) {
//         return rangeSumBST(root.left, low, high);
//     }
//     if (root.val < low) {
//         return rangeSumBST(root.right, low, high);
//     }
//     return root.val + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high);
// };

var rangeSumBST = function(root, low, high) {
    let sum = 0;
    const q = [root];
    while (q.length) {
        const node = q.shift();
        if (!node) {
            continue;
        }
        if (node.val > high) {
            q.push(node.left);
        } else if (node.val < low) {
            q.push(node.right);
        } else {
            sum += node.val;
            q.push(node.left);
            q.push(node.right);
        }
    }
    return sum;
};
