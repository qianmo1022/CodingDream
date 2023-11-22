var mergeKLists = function(lists) {
    const arr = [];
    for (let i = 0; i < lists.length; i++) {
        let head = lists[i];
        while (head) {
            arr.push(head.val);//将所有节点的值放入数组
            head = head.next;
        }
    }
    arr.sort((a, b) => a - b);//对数组进行升序排序
    const dummy = new ListNode(0, null);
    let cur = dummy;
    for (let i = 0; i < arr.length; i++) {
        cur.next = new ListNode(arr[i], null);//初始操作的是数组，而要求返回的是链表，所以要new一个新的节点
        cur = cur.next;
    }
    return dummy.next;
};