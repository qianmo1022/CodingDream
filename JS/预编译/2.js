function fn(a) {
    console.log(a); // function a () {}
    var a = 123
    console.log(a); // 123
    function a() {} //函数声明
    console.log(a); // 123
    var b = function () {} //函数表达式
    console.log(b); //function () {}
    function d() {}
    var d = a // 123
    console.log(d); // 123
}
//函数fn的作用域就是他的AO对象

//编译过程
// AO: {
//     a: undefined --> 1 --> function a() {} -->123
//     b: undefined --> function () {}
//     d: undefined --> function d() {}

// }
fn(1)