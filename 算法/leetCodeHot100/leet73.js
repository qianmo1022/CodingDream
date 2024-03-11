// var setZeroes = function(matrix) {
//     const m = matrix.length, n = matrix[0].length
//     const row  = new Array(m).fill(false)
//     const col = new Array(n).fill(false)
//     for(let i = 0;i < m;i++){
//         for(let j = 0;j < n; j++){
//             if(matrix[i][j] === 0){
//                 row[i] = col[j] = true
//             }
//         }
//     }
//     for(let i = 0;i < m; i++){
//         for(let j = 0;j < n;j++){
//             if(row[i] || col[j]){
//                 matrix[i][j] = 0
//             }
//         }
//     }
// };

// var setZeroes = function(matrix) {
//     const m = matrix.length, n = matrix[0].length;
//     let flagCol0 = false, flagRow0 = false;//标记第一列和第一行是否有0
//     for (let i = 0; i < m; i++) {// 遍历第一列判断是否有0
//         if (matrix[i][0] === 0) {
//             flagCol0 = true;
//         }
//     }
//     for (let j = 0; j < n; j++) {// 遍历第一行判断是否有0
//         if (matrix[0][j] === 0) {
//             flagRow0 = true;
//         }
//     }
//     for (let i = 1; i < m; i++) {// 遍历除第一行和第一列的所有元素，如果有0，则将对应的第一行和第一列的元素置为0
//         for (let j = 1; j < n; j++) {
//             if (matrix[i][j] === 0) {
//                 matrix[i][0] = matrix[0][j] = 0;
//             }
//         }
//     }
//     for (let i = 1; i < m; i++) {
//         for (let j = 1; j < n; j++) {
//             if (matrix[i][0] === 0 || matrix[0][j] === 0) {// 如果对应的第一行或第一列有0，则将当前元素置为0
//                 matrix[i][j] = 0;
//             }
//         }
//     }
//     if (flagCol0) { // 如果第一列有0，则将第一列置为0
//         for (let i = 0; i < m; i++) {
//             matrix[i][0] = 0;
//         }
//     }
//     if (flagRow0) { // 如果第一行有0，则将第一行置为0
//         for (let j = 0; j < n; j++) {
//             matrix[0][j] = 0;
//         }
//     }
// };


var setZeroes = function(matrix) {
    const m = matrix.length, n = matrix[0].length;
    let flagCol0 = false;
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) {
            flagCol0 = true;
        }
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = matrix[0][j] = 0;
            }
        }
    }
    for (let i = m - 1; i >= 0; i--) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
        if (flagCol0) {
            matrix[i][0] = 0;
        }
    }
};
