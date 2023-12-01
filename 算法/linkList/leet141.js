var hasCycle = function(head) {
  if (!head||!head.next) return false;//如果链表为空或者只有一个节点，直接返回false
    let fast = head.next//如果从head开始，fast和slow会在第一个节点相遇，所以fast从head.next开始
    let slow = head
    while (fast !== slow) {
        if (!fast || !fast.next) return false//如果fast或者fast.next为空，说明链表没有环
        fast = fast.next.next
        slow = slow.next//fast每次走两步，slow每次走一步,按照相对速度，相当于slow不动，fast每次走一步，所以一定会相遇
    }
    return true//如果fast和slow相遇，说明链表有环
};