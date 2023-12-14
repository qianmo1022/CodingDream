// var findMedianSortedArrays = function(nums1, nums2) {
//     let m = nums1.length, n = nums2.length
//     let i = 0 ,j = 0
//     let newArr = []
//     while(i<m && j<n){
//         if(nums1[i] < nums2[j]) {
//             newArr.push(nums1[i++])
//         } else {
//             newArr.push(nums2[j++])
//         }
//     }
//     newArr = newArr.concat(i<m ? nums1.slice(i):nums2.slice(j))
//     const len = newArr.length
//     if(len % 2 === 0){
//         return (newArr[len/2]+newArr[len/2 - 1])/2
//     } else {
//         return newArr[(len - 1)/2]
//     }
// };

// var findMedianSortedArrays = function(nums1, nums2) {
//     let newArr = []
//     for(let i = 0; i < nums1.length; i++){
//         newArr.push(nums1[i])
//     }
//     for(let i = 0; i < nums2.length; i++){
//         newArr.push(nums2[i])
//     }
//     newArr.sort((a,b)=>a-b)
//     const len = newArr.length
//     if(len % 2 === 0){
//         return (newArr[len/2]+newArr[len/2 - 1])/2
//     } else {
//         return newArr[(len - 1)/2]
//     }
// };

function findMedianSortedArrays(nums1, nums2) {
    if (nums1.length > nums2.length) {//保证nums1是短的那个数组
        [nums1, nums2] = [nums2, nums1];
    }

    const m = nums1.length;
    const n = nums2.length;
    let minIdx = 0;
    let maxIdx = m;
    const halfLen = Math.floor((m + n + 1) / 2);//halfLen是中位数的位置

    while (minIdx <= maxIdx) {
        const i = Math.floor((minIdx + maxIdx) / 2);//i是nums1的切割点
        const j = halfLen - i;//j是nums2的切割点

        if (i < m && nums2[j - 1] > nums1[i]) {
            minIdx = i + 1;
        } else if (i > 0 && nums1[i - 1] > nums2[j]) {
            maxIdx = i - 1;
        } else {
            let maxLeft = 0;
            if (i === 0) {
                maxLeft = nums2[j - 1];
            } else if (j === 0) {
                maxLeft = nums1[i - 1];
            } else {
                maxLeft = Math.max(nums1[i - 1], nums2[j - 1]);
            }

            if ((m + n) % 2 === 1) {
                return maxLeft;
            }

            let minRight = 0;
            if (i === m) {
                minRight = nums2[j];
            } else if (j === n) {
                minRight = nums1[i];
            } else {
                minRight = Math.min(nums1[i], nums2[j]);
            }

            return (maxLeft + minRight) / 2.0;
        }
    }
    return 0.0;
}
