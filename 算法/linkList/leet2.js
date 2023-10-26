

  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
 }
 
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
    var value =l1.val
    console.log(value);
};
addTwoNumbers([2,4,3],[5,6,4])