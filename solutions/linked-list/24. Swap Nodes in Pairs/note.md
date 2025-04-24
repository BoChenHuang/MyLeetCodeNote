# 24. Swap Nodes in Pairs
將 linked list 中的 Node 兩兩交換

## 解題方法
每輪取兩個node出來做交換並銜接上最後一個 node 的 next，若此輪取不出兩個 node 代表已做到最後一個 node，直接接在最後即可。

```
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let ans = new ListNode(0, undefined);
    let temp = head;
    let prev = ans;
    while(temp) {
        let next = temp.next;
        if(next) { // exchange
            const nextNode = new ListNode(temp.val, undefined);
            const currentNode = new ListNode(next.val, nextNode);
            prev.next = currentNode;
            prev = nextNode;
        } else { // the last node
            const currentNode = new ListNode(temp.val, undefined);
            prev.next = currentNode;
        }
        temp = next ? next.next : null;
    }
    return ans.next;
};
```