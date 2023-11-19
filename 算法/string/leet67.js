var addBinary = function(a, b) {
    let result = '';//字符串
    let carry = 0;//进位
    let i = a.length - 1;
    let j = b.length - 1;
    while (i >= 0 || j >= 0) {
        let sum = carry;//让sum等于进位，因为进位是上一次的结果
        if (i >= 0) {
            sum += parseInt(a[i]);//parseInt() 函数可解析一个字符串，并返回一个整数。
            i--;
        }
        if (j >= 0) {
            sum += parseInt(b[j]);
            j--;
        }
        result = (sum % 2) + result;//当前位的结果
        carry = Math.floor(sum / 2);//进位所加的数
    }
    if (carry > 0) {
        result = carry + result;
    }
    return result;
};

console.log(addBinary('11', '1'));