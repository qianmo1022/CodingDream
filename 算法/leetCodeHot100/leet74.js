// var searchMatrix = function(matrix, target) {
//     const rowIndex = binarySearchFirstColumn(matrix, target);
//     if (rowIndex < 0) {
//         return false;
//     }
//     return binarySearchRow(matrix[rowIndex], target);
// };

// const binarySearchFirstColumn = (matrix, target) => {
//     let low = -1, high = matrix.length - 1;
//     while (low < high) {
//         const mid = Math.floor((high - low + 1) / 2) + low;
//         if (matrix[mid][0] <= target) {
//             low = mid;
//         } else {
//             high = mid - 1;
//         }
//     }
//     return low;
// }

// const binarySearchRow = (row, target) => {
//     let low = 0, high = row.length - 1;
//     while (low <= high) {
//         const mid = Math.floor((high - low) / 2) + low;
//         if (row[mid] == target) {
//             return true;
//         } else if (row[mid] > target) {
//             high = mid - 1;
//         } else {
//             low = mid + 1;
//         }
//     }
//     return false;
// }

var searchMatrix = function(matrix, target) {
    const m = matrix.length, n = matrix[0].length;
    let low = 0, high = m * n - 1;
    while (low <= high) {
        const mid = Math.floor((high - low) / 2) + low;
        const x = matrix[Math.floor(mid / n)][mid % n];
        if (x < target) {
            low = mid + 1;
        } else if (x > target) {
            high = mid - 1;
        } else {
            return true;
        }
    }
    return false;
};
