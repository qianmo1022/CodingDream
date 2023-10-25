function foo(str,a) {
    eval(str)//eval（）将原本不属于此处的代码搬到此处
    console.log(a,b);
}

// foo()//foo()的词法作用域就是全局，因为foo（）声明在全局

foo('var b = 3',1)