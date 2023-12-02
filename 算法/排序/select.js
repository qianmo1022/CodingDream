let arr = [5, 3, 2, 4, 1]

function selectSort(arr) {// 不断地缩小区间，在区间中找到最小值，放在区间的最前面
    const len = arr.length
    let minIndex

    for (let i = 0; i < len - 1; i++) {//最后一个不用比较
        minIndex = i
        for (let j = i + 1; j < len; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j
            }
        }

        if (minIndex !== i) {
            [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
        }
    }
    return arr
}

console.log(selectSort(arr));

