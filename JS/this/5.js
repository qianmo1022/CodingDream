
function foo() {
    var a = 1
  
    var bar = function() {
      console.log(this.a);
    }
    var baz = bar.bind(foo)//显式绑定，bind返回的是一个函数，需要再次调用
  
    setTimeout(baz, 1000)
    
  }
  
  foo()// undefined，因为this指向的是window，window.a = undefined