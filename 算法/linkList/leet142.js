// var detectCycle = function(head) {
//     const dummy = new ListNode(0,head);
//     let fast = dummy;
//     let slow = dummy;
//     if (!head||!head.next) return null;//如果链表为空或者只有一个节点，直接返回null
//     while (fast&&fast.next) {
//         fast = fast.next.next;
//         slow = slow.next;
//         if (fast === slow) break;
//     }
//     if (fast !== slow) return null;//如果fast和slow没有相遇，说明链表没有环
//     fast = dummy;
//     while (fast !== slow) {//找到环的入口节点
//         fast = fast.next;
//         slow = slow.next;
//     }
//     return fast;//返回环的入口节点
// };

// var detectCycle = function(head) {
//     const dummy = new ListNode(0,head);
//     let fast = dummy;
//     let slow = dummy;
//     while (fast && fast.next) {
//         fast = fast.next.next;
//         slow = slow.next
//         if (fast === slow) {
//             fast = dummy;
//             while (fast !== slow){
//                 fast = fast.next
//                 slow = slow.next
//             }
//             return fast
//         }
//     }
//     return null
// }

var detectCycle = function(head) {
    if (!head || !head.next) {
      return null; // 没有节点或只有一个节点，肯定没有环
    }
  
    let slow = head;
    let fast = head;
  
    // 使用快慢指针找到相遇点
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
  
      if (slow === fast) {
        // 有环，将一个指针移到头部，两个指针以相同速度前进，再次相遇的地方就是环的起点
        slow = head;
        while (slow !== fast) {
          slow = slow.next;
          fast = fast.next;
        }
        return slow;
      }
    }
  
    return null; // 没有环
  };