var reverseBetween = function(head, left, right) {
    if (head == null || head.next == null) {
        return head;
    }
    // 把链表left到right的节点取出来，反转，再放回去
    const dummy = new ListNode(0, head);//dummy节点
    let lNode = dummy;
    let rNode = dummy;
    for (let i = 1; i < left; i++) {//curr走到left的前一个节点
        lNode = lNode.next; // 左侧截取之前的节点
    }
    for (let i = 1; i < right + 1; i++) {//curr走到right的节点
        rNode = rNode.next; // 右侧截取的节点
    }
    const r = rNode.next;//rNode后面的节点,即right节点,反转后队列需要指向right的next
    rNode.next = null;//rNode后面的节点置空
    const l = lNode.next;//lNode后面的节点,即left节点,反转后的尾节点

    const reverse = reverseList(lNode.next);//反转left到right的节点
    lNode.next = reverse;//left的next指向反转后的头节点
    l.next = r;//反转后的尾节点的next指向right的next

    return dummy.next;
};


var reverseList = function(head) {
    let prev = null;
    let curr = head;//curr节点,记录当前节点
    while (curr) {
        const next = curr.next;//next节点,记录当前节点的下一个节点
        curr.next = prev;//交换，将当前节点的next指向前一个节点
        prev = curr;//prev节点后移
        curr = next;//curr节点后移
    }
    return prev;
};