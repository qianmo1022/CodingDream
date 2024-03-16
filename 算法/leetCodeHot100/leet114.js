// // 前序遍历
// var flatten = function(root) {
//     const list = []
//     pre(root,list)
//     const len = list.length
//     for(let i = 1; i < len; i++){ // 从第二个开始，将每个节点的左子树和右子树连接起来
//         const prev = list[i - 1],curr = list[i]
//         prev.left = null
//         prev.right = curr
//     }
// };
// const pre = (root,list)=>{
//     if(root!==null){
//         list.push(root)
//         pre(root.left,list)
//         pre(root.right,list)
//     }
// }
// // 层序遍历，迭代
// var flatten = function(root) {
//     const list = []// 存放所有节点，来获取长度
//     const stack = []
//     let node = root
//     while(node !== null || stack.length ){
//         while(node !== null){
//             list.push(node)
//             stack.push(node)
//             node = node.left
//         }
//         node = stack.pop()
//         node = node.right
//     }
//     const len = list.length
//     for(let i = 1; i < len; i++){
//         const prev = list[i - 1],curr = list[i]
//         prev.left = null
//         prev.right = curr
//     }
// };
// // 迭代的同时修改指针
// var flatten = function(root) {
//     if(root === null){
//         return
//     }
//     const stack = []
//     stack.push(root)
//     let prev = null
//     while(stack.length) {
//         const curr = stack.pop()
//         if(prev!==null){
//             prev.left = null
//             prev.right = curr
//         }
//         const left = curr.left,right = curr.right
//         if(right !== null){
//             stack.push(right)
//         }
//         if(left !== null){
//             stack.push(left)
//         }
//         prev = curr
//     }
// };

var flatten = function(root) {
    let curr = root
    while(curr !== null){
        if(curr.left !== null){
            const next = curr.left
            let pre = next
            while(pre.right !== null){
                pre = pre.right
            }
            pre.right = curr.right
            curr.left = null
            curr.right = next
        }
        curr = curr.right
    }
};