var minWindow = function(s, t) {
    let map = new Map()
    for(let c of t) {
        map.set(c, map.has(c) ? map.get(c) + 1 : 1)
    }
    let counter = map.size//counter是t中不同字符的个数
    let begin = 0, end = 0//begin和end是滑动窗口的两端
    let len = Infinity
    let head = 0//head是最小子串的起始位置
    while(end < s.length) {
        let c = s[end]
        if(map.has(c)) {
            map.set(c, map.get(c) - 1)
            if(map.get(c) === 0) counter--
        }
        end++
        while(counter === 0) {//当counter为0时，说明此时的滑动窗口已经包含了t中的所有字符
            let tempc = s[begin]//tempc是滑动窗口的左端
            if(map.has(tempc)) {
                map.set(tempc, map.get(tempc) + 1)//如果左端是t中的字符，tempc的个数加1
                if(map.get(tempc) > 0) counter++//如果tempc的个数大于0，说明此时的滑动窗口不包含t中的所有字符，counter加1从而跳出循环
            }
            if(end - begin < len) {//更新最小子串的长度和起始位置
                len = end - begin
                head = begin
            }
            begin++
        }
    }
    return len === Infinity ? '' : s.substr(head, len)

};