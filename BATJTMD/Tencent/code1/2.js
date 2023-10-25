//hackthon
function createPhoneNumber(numbers) {
    var format = "(xxx) xxx-xxxx";//模板
    for (let i = 0; i < numbers.length; i++) {
        format = format.replace('x',numbers[i])//replace是考的最多的一道的字符串方法
    }
    return format
}
// leetcode 要看题解

console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]));