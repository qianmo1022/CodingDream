// if (true) {
//     var a = 1//用let声明会报错，因为let是es6新增的所以会与if的{}形成块级作用域，而由于变量无法从外层向内访问，故无法访问
// }
    // {
    //     let a = 1//会报错，let与花括号配合会形成块级作用域
    // }
// for (let i = 0; i < array.length; i++) {
//     let a = 1 //会报错
    
// }
var a = 1
function foo() {
    let a = 3
    if (1) {
        let a = 2
    }
    console.log(a);
}

foo()

