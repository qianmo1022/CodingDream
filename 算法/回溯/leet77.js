let result = []
let path = []
var combine = function(n, k) {
  result = []
  combineHelper(n, k, 1)
  return result
};
const combineHelper = (n, k, startIndex) => {
  if (path.length === k) {
    result.push([...path])
    return
  }
  for (let i = startIndex; i <= n - (k - path.length) + 1; ++i) {
    path.push(i)
    combineHelper(n, k, i + 1)
    path.pop()
  }
}