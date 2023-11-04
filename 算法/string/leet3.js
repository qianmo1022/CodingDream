const s = 'abcabcbb'
var lengthOfLongestSubstring = function(s) {
    const len = s.length;
    if (len === 0) return 0;
    let res = 1;//最长子串长度
    let currentS = s[0];

    for (let i = 0; i < len; i++) {
        let current = 1//当前子串长度
        let j = i + 1;
        while(j <len && !currentS.includes(s[j])){
            current++
            currentS += s[j]
            j++
        }
        res = Math.max(res, current)
    }
    return res
};  