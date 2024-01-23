const isPalindrome = (s, l, r) => {
    for (let i = l, j = r; i < j; i++, j--) {
        if(s[i] !== s[j]) return false;
    }
    return true;
}

var partition = function(s) {
    const res = [], path = [], len = s.length;
    backtracking(0);
    return res;
    function backtracking(startIndex) {
        if(startIndex >= len) {
            res.push(Array.from(path));
            return;
        }
        for(let i = startIndex; i < len; i++) {
            if(!isPalindrome(s, startIndex, i)) continue;
            path.push(s.slice(startIndex, i + 1));
            backtracking(i + 1);
            path.pop();
        }
    }
};