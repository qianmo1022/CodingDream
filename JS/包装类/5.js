// 包装类

// var obj = {}
// console.log(obj.a);

// var num = 123
// num.abc = 'hello'
// console.log(num.abc);

// var num = new Number(123)
// num.abc = 'hello'
// console.log(num.abc);
// console.log(num * 2);//246,参与四则运算时会被转换为基本数据类型，再进行运算

// var str = 'abcd'
// console.log(str.length);//4

// var num = 4
// num.len = 3
// // <==> var num =new Number(4)
// // num.len = 3
// // delete num.len

// new Number(4).len //隐式包装类
// console.log(num.len);//undefined

// 考点
// var arr = [1, 2, 3, 4, 5]
// arr.length = 2

// console.log(arr);//[1,2]

// var str = 'abcd'
// // str.length = 2
// //new String('abcd').length = 2 delete
// 可访问但不可修改
// console.log(str.length);//4

// 阿里面试题
var str = 'abc'
str += 1 // 'abc1'
var test = typeof(str) // 'string'
if (test.length == 6) {// new String('string').length == 6
    test.sign = 'typeOf的返回结果可能是String'
    // new String(test).sign = 'typeOf的返回结果可能是String'
    // delete
}
// new String(test).sign
console.log(test.sign);// 有声明无赋值所以打印undefined