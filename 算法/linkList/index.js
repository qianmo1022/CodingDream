let arr = [1,2,3,4,5,6,7,8] // 数组是有序列表，线性结构

// let res = {
//     val: 1,
//     next: {
//         val: 2,
//         next: {
//             val: 3
//         }
//     }
// }

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


const node1 = new ListNode(1)
node1.next = new ListNode(2)
const node3 = new ListNode(3)
node3.next = node1.next// node3.next = 2
node1.next = node3// node1.next = 3 ,1->3->2
node1.next = node3.next// node1.next = 2 ,1->2