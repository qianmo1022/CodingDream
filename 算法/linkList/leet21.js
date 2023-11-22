function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var mergeTwoLists = function(list1, list2) {
    const ret = new ListNode(0, null);//创建一个新的链表，头节点为0
    let cur = ret;//cur指向ret,不用直接操作ret，因为ret发生改变之后，就不是头节点了
    while (list1 && list2) {
        if (list1.val <= list2.val){
            cur.next = list1;
            list1 = list1.next;
        }else {
            cur.next = list2;
            list2 = list2.next;
        }
        cur = cur.next;
    }
    cur.next = list1 ? list1 : list2;
    return ret.next;
};