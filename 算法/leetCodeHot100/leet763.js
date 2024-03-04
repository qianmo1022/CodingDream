var partitionLabels = function(s) {
    const last = new Array(26)
    const length = s.length
    const codePointA = 'a'.codePointAt(0)
    for(let i=0;i < length;i++){//记录每个字符最后出现的位置
        last[s.codePointAt(i) - codePointA] = i
    }
    const partition = []//记录分割点
    let start = 0,end = 0
    for(let i = 0;i < length;i++){
        end = Math.max(end,last[s.codePointAt(i) - codePointA])
        if (i == end) {//找到分割点
            partition.push(end - start + 1)//记录分割点
            start = end + 1//更新起始位置
        }
    }
    return partition
};