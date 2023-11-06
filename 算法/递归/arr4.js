var arr = [{a: 1}, [2, [3, 4]]]

function flaten(arr) {
  return arr.toString().split(',').map(function(item) {// toString()方法将数组转换为字符串，split()方法将字符串转换为数组
    return +item
  })
}

console.log(flaten(arr));

