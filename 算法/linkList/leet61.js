var rotateRight = function(head, k) {
    const dummy = new ListNode(0,head);
    let fast = dummy;
    let slow = dummy;
    let length = 0;
    while (fast.next) {//计算链表长度
        length++;
        fast = fast.next;
    }
    let count = length - k % length;//计算需要移动的次数
    while (count > 0) {//找到需要移动的节点的前一个节点
        slow = slow.next;//slow指向需要移动的节点的前一个节点·
        count--;
    }
    fast.next = dummy.next;//将链表首尾相连
    dummy.next = slow.next;//将slow.next作为新的头节点
    slow.next = null;//将slow.next置为null
    return dummy.next;
};