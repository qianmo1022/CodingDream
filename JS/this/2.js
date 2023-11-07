// var a = 1

// function foo (a) {
//     console.log(this.a);
// }

// foo(a)

// function foo () {
//     var a = 2
//     this.bar()
// }

var b = 2
function foo() {  // [[scope]]
  var b = 1

  function bar() {
    baz()
  }
  function baz() {
    console.log(this.b);
  }
  bar()
}

foo()// 2，因为this指向的是window，window.b = 2