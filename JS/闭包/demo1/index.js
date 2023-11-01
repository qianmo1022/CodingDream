
showName();
console.log(myName);//undefined

var myName = '王艺杰'//变量声明会提升到作用域顶部，但是赋值不会

function showName() {//函数声明会提升到作用域顶部
    console.log('杰哥');//杰哥
}