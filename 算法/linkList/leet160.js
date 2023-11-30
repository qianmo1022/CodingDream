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
// 双指针法，两个指针分别从两个链表的头部开始遍历，当一个指针到达链表尾部时，就从另一个链表的头部开始遍历，直到两个指针相遇，
// 如果两个链表相交，那么相遇的节点就是相交的节点，如果两个链表不相交，那么相遇的节点就是null
// 相交链表最后的部分是相同的，所以两个指针同时到达相交节点，如果两个链表相交，那么两个指针一定会相遇