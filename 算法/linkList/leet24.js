function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}

// var swapPairs = function(head) {
//     if (head === null|| head.next === null) {
//         return head;
//     }//递归终止条件
//     const newHead = head.next;//新的头节点,即原来的第二个节点
//     head.next = swapPairs(newHead.next);//递归，交换后面的节点
//     newHead.next = head;//交换前两个节点
//     return newHead;
// };

var swapPairs = function(head) {
    const dummy = new ListNode(0, head);//dummy节点
    let temp = dummy;//temp节点，用于交换
    while (temp.next !== null && temp.next.next !== null) {
        const node1 = temp.next;//node1为要交换的第一个节点
        const node2 = temp.next.next;//node2为要交换的第二个节点
        temp.next = node2;//交换
        node1.next = node2.next;
        node2.next = node1;
        temp = node1;//temp节点后移
    }
    return dummy.next;
};