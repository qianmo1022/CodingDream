var arr = ['a', 'b', 'c', 'd']


// arr[0]='aa'
// console.log(2 in arr);判断数组中是否有2号位置
// console.log(arr.includes('c'));判断数组中是否有includes中的元素'c'

// arr.push('e')//在数组后方添加元素
// arr.pop()//在数组后方删除一个元素
// arr.unshift('hello')//在数组前部添加一个元素
// arr.shift()//删除数组的第一个元素

// arr.splice(2,0,'hello')//第一个参数代表想要植入元素的目标下标，第二个参数代表从第一个值的下标开始删除的元素个数，第三个参数为想要植入的元素
// arr.splice(2,1)//从前方下标开始删除后方值个元素

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]+'1');
// }

// arr.forEach(function (item, index, arr) {
//     console.log(item, index, arr);
// })//无法返回值的数组的遍历

// arr.map(function (item, i, arr) {
//     return item + 1
// })//有返回值的数组的遍历，可以修改数组里的每一个元素

// var s=arr.join('-')//将数组中的元素用join中的元素连接为一个字符串
// var str = 'abcd'
// var array = str.split('')//将str字符串拆分为数组

// console.log(arr.indexOf('b'));//从前往后找到数组中是否有该元素并输出下标，若不存在该元素则返回-1
// console.log(arr.lastIndexOf('c'));//从后往前找是否有该元素并输出其下标，

// var newarr=arr.reverse()//将数组中的所有元素倒序

var arr=[3,5,7,1,2]
// arr.sort(function (a,b) {//function回调函数
//     return b-a//按照参数顺序输出,b-a为倒序，a-b为正序
// })//从小到大数组元素排序，可更新数组内元素

var arr2 = [10, 20, 30]

var newArr=[].concat(arr,arr2)//将concat括号中的数组arr和arr2添加到前方的空数组中



// console.log(arr);