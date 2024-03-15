var arr = [1,[2,[3,4]]] // 希望输出[1,2,3,4]
// // 数组方法flat()
// var newArr = arr.flat(2)// 使数组扁平化，2表示深度，如果不写默认为1，如果写Infinity则表示无限深度
// console.log(newArr);

// 递归
function flatten (arr) {
    var  result = []// 定义一个空数组
    for (let i = 0; i < arr.length; i++) {// 遍历目标数组
        if (Array.isArray(arr[i])) {// 如果数组中的元素是数组的话
            result = result.concat(flatten(arr[i]))// 递归调用,将返回的数组与result连接
        } else {
            result.push(arr[i])// 如果不是数组的话，直接push到result中
        }
    }
    return result// 返回result
}
console.log(flatten(arr));

// // reduce
// function flatten(arr){
//     return arr.reduce(function(pre, item){// pre是上一次的返回值，item是当前值
//        return pre.concat(Array.isArray(item)?flatten(item):item)// 如果item是数组的话，递归调用flatten函数，否则直接concat到pre中
//     },[])// []是初始值，如果不写默认为数组的第一个值
// }
// console.log(flatten(arr));// [ 1, 2, 3, 4 ]

// // toString
// var arr = [{a: 1}, [2, [3, 4]]]
// function flaten(arr) {
//   return arr.toString().split(',').map(function(item) {// toString()方法将数组转换为字符串，split()方法将字符串转换为数组
//     return +item
//   })
// }

// console.log(flaten(arr));
