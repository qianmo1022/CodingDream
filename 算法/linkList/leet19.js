var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0, head);
    let fast = dummy;//快慢指针，后续的操作只改变了fast和slow对dummy的引用，而dummy.next没有改变
    let slow = dummy;

    while (n--) {//fast先走n步
        fast = fast.next;
    }
    // 由于fast先走了n步，当fast走到最后一个节点时，slow相当于从后往前数的第n个节点
    while (fast.next) {//fast走到最后一个节点时，slow刚好走到倒数第n个节点的前一个节点
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;//删除倒数第n个节点
    return dummy.next;
};
