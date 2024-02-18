// var preorder = function(root) {
//     const res = [];
//     helper(root, res);
//     return res;
// }

// const helper = (root, res) => {
//     if (root === null) {
//         return;
//     }
//     res.push(root.val);
//     for (const ch of root.children) {
//         helper(ch, res);
//     }
// };

var preorder = function(root) {
    const res = [];
    if (root == null) {
        return res;
    }

    const stack = [];
    stack.push(root);
    while (stack.length) {
        const node = stack.pop();
        res.push(node.val);
        for (let i = node.children.length - 1; i >= 0; --i) {
            stack.push(node.children[i]);
        }
    }
    return res;
};