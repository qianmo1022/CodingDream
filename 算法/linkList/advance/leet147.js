var insertionSortList = function(head) {
    if(!head) return null
    const dummyHead = new ListNode(0,head)
    let lastSorted = head, curr = head.next//lastSorted是已经排好序的最后一个节点,curr是待插入的节点
    while(curr) {
        if(lastSorted.val <= curr.val){//如果curr比lastSorted大,那么就不用动
            lastSorted = lastSorted.next
        } else {//否则就从头开始找到curr应该插入的位置
            let prev = dummyHead//prev是curr应该插入的位置的前一个节点
            while (prev.next.val <= curr.val){
                prev = prev.next
            }
            lastSorted.next = curr.next
            curr.next = prev.next
            prev.next = curr
        }
        curr = lastSorted.next
    }
    return dummyHead.next
};