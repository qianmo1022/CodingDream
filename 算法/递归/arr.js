var arr = [1,[2,[3,4]]] // 希望输出[1,2,3,4]

var newArr = arr.flat(2)// 使数组扁平化，2表示深度，如果不写默认为1，如果写Infinity则表示无限深度
console.log(newArr);
// typeof 只能判断基本类型，不能判断引用类型
