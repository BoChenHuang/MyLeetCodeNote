/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let ans = null;
    let prev = null;
    while(head) {
        if(head.val != val) {
            if(!prev) { // first time
                ans = new ListNode(head.val, undefined);
                prev = ans;
            } else {
                prev.next = new ListNode(head.val, undefined);
                prev = prev.next;
            }
        }
        head = head.next;
    }
    return ans;
};