var a = 'hello' //字符串 string
var b = 1123.4321 //数字 number
var c = true //false 布尔类型 boolean
var d = undefined //定义了但是未赋值（能找到）
var e = null // 空类型 （找不到）

var obj = {//引用类型 object类型
    name: 'cc',//键值对
    age: 18
}

var arr = ['a', 'b', 'c', 'd']
arr.push('e')//加在在后方
arr.unshift('w')//加在前方
arr.pop()//删除尾部
arr.shift()//删除头部

console.log(arr)

