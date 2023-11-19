var addBinary = function(a, b) {
    let result = '';
    let carry = 0;
    let i = a.length - 1;
    let j = b.length - 1;
    while (i >= 0 || j >= 0) {
        let sum = carry;
        if (i >= 0) {
            sum += parseInt(a[i]);
            i--;
        }
        if (j >= 0) {
            sum += parseInt(b[j]);
            j--;
        }
        result = (sum % 2) + result;
        carry = Math.floor(sum / 2);
    }
    if (carry > 0) {
        result = carry + result;
    }
    return result;
};