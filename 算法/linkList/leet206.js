// var reverseList = function(head) {
//     let prev = null;
//     let curr = head;//curr节点,记录当前节点
//     while (curr) {
//         const next = curr.next;//next节点,记录当前节点的下一个节点
//         curr.next = prev;//交换，将当前节点的next指向前一个节点
//         prev = curr;//prev节点后移
//         curr = next;//curr节点后移
//     }
//     return prev;
// };

var reverseList = function(head) {
    if (head == null || head.next == null) {
        return head;
    }
    const newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
};