// 增删元素的时间复杂度
// 数组O(n)
// 链表O(1)

// 读取值
// 数组O(1)
// 链表O(n)
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const index = 10
let node = new ListNode()

for (let i = 0; i < index; i++) {
    node = new ListNode(i, node)
}