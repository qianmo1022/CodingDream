//递归
// var preorderTraversal = function(root) {
//     const res = [];
//     const preorder = (root) => {
//         if (!root) return;
//         res.push(root.val);
//         preorder(root.left);
//         preorder(root.right);
//     }
//     preorder(root);
//     return res;
// };

//迭代
var preorderTraversal = function(root) {
    if(!root) return []
    const res = []
    const stack = []
    stack.push(root)

    while(stack.length){
        const top = stack.pop()
        res.push(top.val)
        if(top.right) {
            stack.push(top.right)
        }
        if(top.left) {
            stack.push(top.left)
        }
    }

    return res
}