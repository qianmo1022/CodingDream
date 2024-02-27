// var groupAnagrams = function(strs) {
//     const map = new Map();//key是排序后的字符串，value是排序后的字符串对应的原始字符串数组
//     for (let str of strs) {
//         let array = Array.from(str);
//         array.sort();
//         let key = array.toString();
//         let list = map.get(key) ? map.get(key) : new Array();//如果map中没有key对应的value，就新建一个数组
//         list.push(str);
//         map.set(key, list);//更新map
//     }
//     return Array.from(map.values());
// };

var groupAnagrams = function(strs) {
    const map = new Object();
    for (let s of strs) {
        const count = new Array(26).fill(0);
        for (let c of s) {
            count[c.charCodeAt() - 'a'.charCodeAt()]++;
        }
        map[count] ? map[count].push(s) : map[count] = [s];
    }
    return Object.values(map);
};
