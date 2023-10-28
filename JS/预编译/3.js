function foo(a,b) {
    console.log(a);
    c = 0
    var c
    a = 3
    b = 2
    console.log(b);
    function b() {}
    function d() {}
    console.log(b);
}
// AO : {
//     a: undefined -> 1 ->3
//     b: undefined -> function b() {} -> 2
//     c: undefined -> 0
//     d: function d() {}
// }
foo(1)
