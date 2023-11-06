// var a = 1

// function foo (a) {
//     console.log(this.a);
// }

// foo(a)

// function foo () {
//     var a = 2
//     this.bar()
// }

function foo () {
    var b = 1
    bar()
}
function bar () {
    console.log(this.b);
}
foo ()

function baz( ) {
    console.log(this.b);
}
