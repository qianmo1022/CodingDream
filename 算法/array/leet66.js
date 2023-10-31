var plusOne = function(digits) {
    var len = digits.length;
    var i = len - 1;
    while (i >= 0) {
        if (digits[i] < 9) {
            digits[i] += 1;
            return digits;
        }
        digits[i] = 0;
        i--;
    }
    digits.unshift(1);
    return digits;
};

var digits = [9, 9, 9];
console.log(plusOne(digits));