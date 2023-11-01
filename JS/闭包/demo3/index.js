function bar() {
    console.log(myName);
}
function foo() {
    var myName = '龙龙'
    bar()
}

var myName = '菌菌'

foo()//输出菌菌,因为bar的词法作用域是全局（bar定义在全局）