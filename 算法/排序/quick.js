let arr = [5,1,3,6,2,4,7]
// [1,3,2,4] 5 [6,7]
// []1 [3,2,4]
// []1 [2] 3 [4]


function quickSort(arr) {
    if (arr.length <= 1) return arr
    const len = arr.length
    const base = arr[0]
    let left = [],right = []
    for (let i = 1; i < len; i++) {
        if (arr[i] < base) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), base, ...quickSort(right)]
    // [...left, base, ...right]
}
console.log(quickSort(arr));