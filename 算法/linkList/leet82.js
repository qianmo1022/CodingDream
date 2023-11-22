
var deleteDuplicates = function(head) {
    const dummy = new ListNode(0, head);
    
    let cur = dummy;
    while(cur.next && cur.next.next) {
        if (cur.next.val === cur.next.next.val) {
            const x = cur.next.val
            while (cur.next && cur.next.val === x) {
                cur.next = cur.next.next;
            }
        }else {//头节点后面两个节点不相等，cur指向下一个节点
            cur = cur.next;
        }
    }
    return dummy.next;
};