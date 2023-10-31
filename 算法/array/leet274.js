function hIndex(citations) {
  citations.sort((a, b) => b - a)//降序排列
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] <= i) //如果当前引用数小于等于当前文章数，那么当前文章数就是H指数
      return i
  }
  return citations.length//如果没有找到，说明所有文章都符合要求，返回文章数
}