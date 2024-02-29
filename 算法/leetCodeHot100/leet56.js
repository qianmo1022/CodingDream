// var merge = function (intervals) {
//     intervals.sort((a, b) => a[0] - b[0]);//按照区间的左端点排序
//     let prev = intervals[0]
//     let result = []
//     for(let i =0; i<intervals.length; i++){
//         let cur = intervals[i]
//         if(cur[0] > prev[1]){
//             result.push(prev)
//             prev = cur
//         }else{
//             prev[1] = Math.max(cur[1],prev[1])
//         }
//     }
//     result.push(prev)
//     return result
// };

var merge = function(intervals) {
    let n = intervals.length;
    if ( n < 2) return intervals;
    intervals.sort((a, b) => a[0]- b[0]);
    let res = [],
        left = intervals[0][0],
        right = intervals[0][1];
    for (let i = 1; i < n; i++) {
        if (intervals[i][0] > right) {
            res.push([left, right]);
            left = intervals[i][0];
            right = intervals[i][1];
        } else {
            right = Math.max(intervals[i][1], right);
        }
    }
    res.push([left, right]);
    return res;
};