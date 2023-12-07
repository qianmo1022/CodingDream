// var inorderTraversal = function(root) {
//     let num = []
//     inorder = (root) =>{
//         if(!root)return
//         inorder(root.left)
//         num.push(root.val)
//         inorder(root.right)
//     }
//     inorder(root)
//     return num
// };

var inorderTraversal = function(root) {
    let res = []
    let stack = []

    while(root||stack.length){
        while(root){
            stack.push(root)
            root = root.left
        }
        root = stack.pop()
        res.push(root.val)
        root = root.right
    }
    return res
};
