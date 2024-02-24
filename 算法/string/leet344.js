var reverseString = function(s) {
    const n = s.length
    for(let left = 0, right = n - 1;left < right ; ++left , --right){
        [s[left],s[right]] = [s[right],s[left]]
    }
};