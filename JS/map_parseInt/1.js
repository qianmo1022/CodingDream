// - map 遍历,callback 返回值 新的数组
//  map函数传入的是一个回调函数 map(callback)  callback(item,index,array) 
// 1 parseInt(1,0, [1,2,3])       (值，索引，原数组)
// 2 parseInt(2,1, [1,2,3]) 
// 3 paeseInt(3,2, [1,2,3])
console.log([1,2,3,].map(parseInt));// [1,NaN,NaN]