// var merge = function(nums1, m, nums2, n) {
//     var i = m - 1, j = n - 1, k = m + n - 1;
//     while (i >= 0 && j >= 0)
//         nums1[k--] = nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];
//     while (j >= 0)
//         nums1[k--] = nums2[j--];
// };

// var merge = function(nums1, m, nums2, n) {
//     nums1.splice(m, nums1.length - m, ...nums2);//splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。
//     nums1.sort((a, b) => a - b);//a-b升序，b-a降序
// };
var merge = function(nums1, m, nums2, n) {
    let p1 = 0, p2 = 0;
    const sorted = new Array(m + n).fill(0);
    var cur;//当前值
    while (p1 < m || p2 < n) {
        if (p1 === m) {//p1到头了
            cur = nums2[p2++];//p2++先取值再自增
        } else if (p2 === n) {//p2到头了
            cur = nums1[p1++];//p1++先取值再自增
        } else if (nums1[p1] < nums2[p2]) {//p1没到头，p2没到头，比较大小
            cur = nums1[p1++];//p1++先取值再自增
        } else {
            cur = nums2[p2++];//p2++先取值再自增
        }
        sorted[p1 + p2 - 1] = cur;//p1和p2都自增了，所以要-1
    }
    for (let i = 0; i != m + n; ++i) {
        nums1[i] = sorted[i];//把排序好的数组赋值给nums1
    }
};