var strStr = function(haystack, needle) {
    if (needle === '') return 0;
    if (haystack === '') return -1;
    for (let i = 0; i < haystack.length; i++) {//从第一个字符开始遍历，往后延伸子串，查找失败后再从第二个字符开始遍历以此类推
        if (haystack[i] === needle[0]) {
            let j = 1;//注意这里的j是局部变量，必须用let
            while (j < needle.length && haystack[i + j] === needle[j]) {//如果子串的字符与needle相同，j++
                j++;
            }
            if (j === needle.length) return i;//如果j等于needle的长度，说明找到了子串，返回子串的起始位置
        }
    }
    return -1;
};