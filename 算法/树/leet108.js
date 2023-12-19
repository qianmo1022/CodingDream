// const sortedArrayToBST = function(nums) {
//     const buildBST = (left, right) => {
//       if (left > right) {
//         return null;
//       }
  
//       const mid = Math.floor((left + right) / 2);
//       const node = new TreeNode(nums[mid]);
  
//       node.left = buildBST(left, mid - 1);
//       node.right = buildBST(mid + 1, right);
  
//       return node;
//     };
  
//     return buildBST(0, nums.length - 1);
// };

const sortedArrayToBST = function(nums) {
    if (nums.length === 0) return null;
    const mid = Math.floor(nums.length / 2);
    const root = new TreeNode(nums[mid]);
    root.left = sortedArrayToBST(nums.slice(0, mid));
    root.right = sortedArrayToBST(nums.slice(mid+1));
    return root;
};