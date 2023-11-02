let str = 'abca'

var validPalindrome = function(s) {
    if(isPalindrome(s)) {
        return true
    } else {
        const len = s.length;
        for (let i = 0; i < len; i++) {
            //每个字符都去掉一次，判断是否是回文
            const str = s.split('').splice(i, 1).join('')
            if (isPalindrome(str)) return true 
        }
    }

};

function isPalindrome(str) {
    const len = str.length;
    for (let i = 0; i < str.length; i++) {
        if (s[i] !== s[len - 1 - i])  {
            return false
        }
    }
    return true
}