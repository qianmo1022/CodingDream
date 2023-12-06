function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const tree = new TreeNode('A');
const node1 = new TreeNode('B');
const node2 = new TreeNode('C');
tree.left = node1;
tree.right = node2;

const node3 = new TreeNode('D');
const node4 = new TreeNode('E');
node1.left = node3;
node1.right = node4;

const node5 = new TreeNode('F');
const node6 = new TreeNode('G');
node2.left = node5;
node2.right = node6;

//先序遍历
function preorder(root) { 
    if (!root) return;
    console.log(root.val);
    preorder(root.left);
    preorder(root.right);
}

//中序遍历
function inorder(root) { 
    if (!root) return;
    inorder(root.left);
    console.log(root.val);
    inorder(root.right);
}

//后序遍历
function postorder(root) { 
    if (!root) return;
    postorder(root.left);
    postorder(root.right);
    console.log(root.val);
}

console.log(preorder(tree));
console.log(inorder(tree));
console.log(postorder(tree));