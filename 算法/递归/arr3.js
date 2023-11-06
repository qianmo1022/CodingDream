// // var arr = [1,[2,[3,4]]] // 希望输出[1,2,3,4]

// var arr = [1,2,3,4,5,6,7]

// var sum = arr.reduce(
//     function(pre, item, index,arr){
//     return pre + item// pre是上一次的返回值，item是当前值，index是当前索引，arr是当前数组
//     },
//     0// 0是初始值，如果不写默认为数组的第一个值
// ) 

// console.log(sum);// 28

var arr = [1,[2,[3,4]]]

function flatten(arr){
    return arr.reduce(function(pre, item){
       return pre.concat(Array.isArray(item)?flatten(item):item)
    },[])
}
console.log(flatten(arr));// [ 1, 2, 3, 4 ]