// let result = []
// let path = []
// var combine = function(n, k) {
//   result = []
//   combineHelper(n, k, 1)
//   return result
// };
// const combineHelper = (n, k, startIndex) => {
//   if (path.length === k) {
//     result.push([...path])
//     return
//   }
//   for (let i = startIndex; i <= n - (k - path.length) + 1; ++i) {
//     path.push(i)
//     combineHelper(n, k, i + 1)
//     path.pop()
//   }
// }

var combine = function(n, k) {
  const res = [], path = [];
  backtracking(n, k, 1);
  return res;
  function backtracking (n, k, i){
      const len = path.length;
      if(len === k) {
          res.push(Array.from(path));
          return;
      }
      for(let a = i; a <= n + len - k + 1; a++) {
          path.push(a);
          backtracking(n, k, a + 1);
          path.pop();
      }
  }
};