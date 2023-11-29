// var getIntersectionNode = function(headA, headB) {
//     const visited = new Set();
//     let temp = headA;
//     while (temp) {
//         visited.add(temp);
//         temp = temp.next;
//     }
//     temp = headB
//     while (temp) {
//         if (visited.has(temp)) {
//             return temp;
//         }
//         temp = temp.next;
//     }
//     return null;
// };

var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) return null;//如果有一个链表为空，直接返回null
    let tempA = headA;
    let tempB = headB;
    while (tempA !== tempB) {//如果两个链表没有相交，最后会同时指向null，退出循环
        tempA = tempA === null ? headB : tempA.next;//如果tempA到达链表尾部，就从headB开始遍历
        tempB = tempB === null ? headA : tempB.next;//如果tempB到达链表尾部，就从headA开始遍历
    }
    return tempA;
}