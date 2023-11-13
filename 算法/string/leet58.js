var lengthOfLastWord = function(s) {
    const len = s.length
    var res = 0
    for(let i = len -1;i >= 0; i--)
    {
        if (s[i] != ' ')
        {
            res++
        } else if(res > 0){
            return res
        }
    }
    return res
};