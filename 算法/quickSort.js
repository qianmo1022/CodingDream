function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const pivot = arr[0];// 基准值
  const left = [];
  const right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

const array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log(quickSort(array)); // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

// function quickSort(arr, left, right) {
//   var len = arr.length,
//     partitionIndex,
//     left = typeof left != "number" ? 0 : left,
//     right = typeof right != "number" ? len - 1 : right;

//   if (left < right) {
//     partitionIndex = partition(arr, left, right);
//     quickSort(arr, left, partitionIndex - 1);
//     quickSort(arr, partitionIndex + 1, right);
//   }
//   return arr;
// }

// function partition(arr, left, right) {
//   // 分区操作
//   var pivot = left, // 设定基准值（pivot）
//     index = pivot + 1;
//   for (var i = index; i <= right; i++) {
//     if (arr[i] < arr[pivot]) {
//       swap(arr, i, index);
//       index++;
//     }
//   }
//   swap(arr, pivot, index - 1);
//   return index - 1;
// }

// function swap(arr, i, j) {
//   var temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }
// function partition2(arr, low, high) {
//   let pivot = arr[low];
//   while (low < high) {
//     while (low < high && arr[high] > pivot) {
//       --high;
//     }
//     arr[low] = arr[high];
//     while (low < high && arr[low] <= pivot) {
//       ++low;
//     }
//     arr[high] = arr[low];
//   }
//   arr[low] = pivot;
//   return low;
// }

// function quickSort2(arr, low, high) {
//   if (low < high) {
//     let pivot = partition2(arr, low, high);
//     quickSort2(arr, low, pivot - 1);
//     quickSort2(arr, pivot + 1, high);
//   }
//   return arr;
// }
