let arr = [2,3,1,4,5]

// arr.sort((a,b) => a-b) 

function bubbleSort(arr){
    const len = arr.length
    for (let i = 0; i < len; i++) {
        // arr[i]
        for (let j = i + 1; j < len; j++) {
            // arr[j]
            if (arr[i] > arr[j]) {
                //es6解构赋值
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }
    return arr
}

// function bubbleSort(arr){
//     let res = []
//     let min = getMin(arr)
//     while (arr.length) {
//         res.push(min)
//         arr.splice(arr.indexOf(min), 1)
//     }

//     return res
// }

// function getMin(array){
//     let min = Infinity
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] < min) {
//            min = array[i]
//         }
//     }
//     return min
// }

console.log(bubbleSort(arr));
