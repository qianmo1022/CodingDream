var rotateRight = function(head, k) {
    const dummy = new ListNode(0,head);
    let fast = dummy;
    let slow = dummy;
    let length = 0;
    while (fast.next) {
        length++;
        fast = fast.next;
    }
    let count = length - k % length;
    while (count > 0) {
        slow = slow.next;
        count--;
    }
    fast.next = dummy.next;
    dummy.next = slow.next;
    slow.next = null;
    return dummy.next;
};