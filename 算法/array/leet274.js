function hIndex(citations) {
    // 先将引用次数数组按降序排序
    citations.sort((a, b) => b - a);
  
    // 遍历排序后的数组找到h指数
    for (let i = 0; i < citations.length; i++) {
      if (citations[i] < i + 1) {
        return i; // 当前索引加一即为h指数
      }
    }
  
    // 如果没有找到合适的h指数，返回数组的长度作为h指数
    return citations.length;
  }
  
  // 测试
  const citations = [3, 0, 6, 1, 5];
  const hIndexValue = hIndex(citations);
  console.log("研究者的h指数是：" + hIndexValue);
  