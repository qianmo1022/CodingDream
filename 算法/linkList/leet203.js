/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    const ret = new ListNode (0, head);//创建一个新的链表，头节点为0，指向head
    let cur = ret;//cur指向ret
    while (cur.next) {//cur.next不为空
        if (cur.next.val === val) {//cur.next的值等于val
            cur.next = cur.next.next;//cur.next指向cur.next.next
            continue;
        }
        cur = cur.next;//cur指向cur.next
    }
    return ret.next;//返回ret.next
};