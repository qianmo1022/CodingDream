let arr = [5, 3, 2, 4, 1]

function insertSort (arr) {
    const len = arr.length
    let temp 
    for (let i = 1; i < len; i++) {//第一个不用比较
        temp = arr[i]//待插入的元素
        let  j = i//从待插入元素的前一个开始比较
        while (j > 0 && arr[j - 1] > temp) {//如果前一个元素大于待插入元素
            arr[j] = arr[j - 1]//前一个元素后移
            j--
        }
        arr[j] = temp//因为此时的j已经减到了0，所以要插入的位置就是j
    }
    return arr
}

console.log(insertSort(arr));

