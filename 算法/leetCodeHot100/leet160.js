/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

// 方法一：哈希集合
// var getIntersectionNode = function(headA, headB) {
//     const visited = new Set();
//     let temp = headA;
//     while (temp !== null) {
//         visited.add(temp);
//         temp = temp.next;
//     }
//     temp = headB;
//     while (temp !== null) {
//         if (visited.has(temp)) {// 由于Set中存储的是引用，所以可以直接比较，就算非相交的元素中有相同的值也不会出错
//             return temp;
//         }
//         temp = temp.next;
//     }
//     return null;
// };

// 方法二：双指针
var getIntersectionNode = function(headA, headB) {
    if (headA === null || headB === null) {
        return null;// 如果有一个链表为空，直接返回null
    }
    let pA = headA, pB = headB;
    while (pA !== pB) {
        pA = pA === null ? headB : pA.next;
        pB = pB === null ? headA : pB.next;
    }
    return pA;
};