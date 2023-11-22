function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
 }
 
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
    let ret = new ListNode(0);//创建一个新的链表，头节点为0
    let cur = ret;//cur指向ret
    let carry = 0;//记录进位
    while (l1 || l2 || carry) {
         let sum = carry;
         if (l1) {
              sum += l1.val;
              l1 = l1.next;
         }
         if (l2) {
              sum += l2.val;
              l2 = l2.next;
         }
         cur.next = new ListNode(sum % 10);//使用取余运算符，创建一个新的链表，头节点为sum % 10，从而得到当前位的值
         cur = cur.next;//cur指向cur.next，即指向新的链表，得到当前位的值
         carry = sum >= 10 ? 1 : 0;
    }
    return ret.next;
};
addTwoNumbers([2,4,3],[5,6,4])