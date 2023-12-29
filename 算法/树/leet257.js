// var binaryTreePaths = function(root) {
//     //递归遍历+递归三部曲
//     let res = [];
//     //1. 确定递归函数 函数参数
//     const getPath = function(node,curPath) {
//      //2. 确定终止条件，到叶子节点就终止
//         if(node.left === null && node.right === null) {
//             curPath += node.val;
//             res.push(curPath);
//             return;
//         }
//         //3. 确定单层递归逻辑
//         curPath += node.val + '->';
//         node.left && getPath(node.left, curPath);
//         node.right && getPath(node.right, curPath);
//     }
//     getPath(root, '');
//     return res;
//  };

var binaryTreePaths = function(root) {
    if (!root) return [];
    const stack = [root], paths = [''], res = [];
    while (stack.length) {
      const node = stack.pop();
      let path = paths.pop();
      if (!node.left && !node.right) { // 到叶子节点终止, 添加路径到结果中
        res.push(path + node.val);
        continue;
      }
      path += node.val + '->';
      if (node.right) { // 右节点存在
        stack.push(node.right);
        paths.push(path);
      }
      if (node.left) { // 左节点存在
        stack.push(node.left);
        paths.push(path);
      }
    }
    return res;
  }; 