var a = 1
var b = 'hello world'

function foo() {
    var c = true
    console.log(a);
}

console.log(c);//会报错，无法不能由外到内查找变量

foo()