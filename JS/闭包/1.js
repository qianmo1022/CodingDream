var arr = []
for (var i = 0; i < 10; i++) {

  (arr[i] = function (j) {
    console.log(j)

  })(i)//形成闭包，闭包中的内容为arr[i]，arr[i]中的内容为function(j){console.log(j)}，j为i，所以输出0-9
}
//使用let i输出0-9,如果是var i则输出10个10,因为var声明的变量是全局变量，每次循环都会覆盖上一次的值，最后输出的是最后一次循环的值，
//如果用let声明则是块级作用域，每次循环都会生成一个新的变量，所以输出的是每次循环的值


// //------
// for (var j = 0; j < arr.length; j++) {
//     arr[j]()
// }//输出10个10，因为var声明的变量是全局变量，每次循环都会覆盖上一次的值，最后输出的是最后一次循环的值，所以输出10个10

// var arr = []
// for (let i = 0; i < 10; i++) {

//   arr[i] = function () {
//     console.log(i)
//   }
// } 

// //------
// for (var j = 0; j < arr.length; j++) {
//     arr[j]()
// }