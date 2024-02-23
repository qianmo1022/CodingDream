// // var firstUniqChar = function(s) {
// //     const frequency = _.countBy(s);
// //     for (const [i, ch] of Array.from(s).entries()) {
// //         if (frequency[ch] === 1) {
// //             return i;
// //         }
// //     }
// //     return -1;
// // };

// var firstUniqChar = function(s) {
//     const position = new Map();
//     const n = s.length;
//     for (let [i, ch] of Array.from(s).entries()) {
//         if (position.has(ch)) {
//             position.set(ch, -1);
//         } else {
//             position.set(ch, i);
//         }
//     }
//     let first = n;
//     for (let pos of position.values()) {
//         if (pos !== -1 && pos < first) {
//             first = pos;
//         }
//     }
//     if (first === n) {
//         first = -1;
//     }
//     return first;
// };

var firstUniqChar = function(s) {
    const position = new Map();
    const q = [];
    const n = s.length;
    for (let [i, ch] of Array.from(s).entries()) {
        if (!position.has(ch)) {
            position.set(ch, i);
            q.push([s[i], i]);
        } else {
            position.set(ch, -1);
            while (q.length && position.get(q[0][0]) === -1) {
                q.shift();
            }
        }
    }
    return q.length ? q[0][1] : -1;
};
