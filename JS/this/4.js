function foo (n,m) {
    console.log(this.a,n,m);
}

var obj = { 
    a: 2
}
// foo.call(obj,100,200)// 2 100 200，call装参数的时候是一个一个的

// foo.apply(obj,[100,200])// 2 100 200,apply装参数的时候是数组

var bar = foo.bind(obj)// 2 100 200,bind装参数的时候是一个一个的，但是返回的是一个函数，需要再次调用,参数可以分开传
bar(100,200)