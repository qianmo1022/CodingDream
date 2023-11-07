var arr = [1,[2,[3,4]]] // 希望输出[1,2,3,4]

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