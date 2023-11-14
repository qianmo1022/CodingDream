var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return '';//如果数组为空，返回空字符串
    if (strs.length === 1) return strs[0];//如果数组只有一个元素，返回该元素
    let prefix = strs[0];//取第一个元素作为前缀
    for (let i = 1; i < strs.length; i++) {//遍历数组
        while (strs[i].indexOf(prefix) !== 0) {//如果不是以该前缀开头
            prefix = prefix.slice(0, prefix.length - 1);//将前缀最后一个字符去掉
            if (prefix === '') return '';//如果前缀为空，返回空字符串
        }
    }
    return prefix;//返回前缀
};