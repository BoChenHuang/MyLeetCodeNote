# 142. Linked List Cycle II
找出 Linked List 中循環的入口

## 解題方法

1. 循環判斷
使用快慢指針：fast、slow，fast每次走二步，slow每次走一步，若 Linked List 存在循環則兩個指針必在循環中相遇。

2. 入口尋找

    * 假設head到入口處的距離為 x
    * 入口處至 fast 與 slow 交匯處距離為 y
    * 交匯處至入口距離為 z

    當 fast 與 slow 交會時：
        slow 走過的長度為 x + y
        fast 走過的長度為 x + n(y + z) + y ， n 代表走了幾圈
    
    又 fast 走過的距離為 slow 的兩倍，所以可得：
    ```
        x + n ( y + z ) + y = 2 * ( x + y )
    ```
    整理一下：
    ```
        ( n - 1 )y + nz = x
    ```
    當 n = 1 時：
    ```
        z = x;
    ```
    因為我們已經找到交匯處，所以 n 一定等於 1, 意味只要算 z 就可以得到 x，所以同時從 head 與 交會處往下移動，兩者相交處即為入口。


## Code
```
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let fast = head;
    let slow = head;

    while(fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;

        if(fast == slow) {
            let index1 = fast;
            let index2 = head;
            while(index1 != index2) {
                index1 = index1.next;
                index2 = index2.next;
            }
            return index1;
        }
            
    }
    
    return null;
};
```

## Ref
https://github.com/youngyangyang04/leetcode-master/blob/master/problems/0142.%E7%8E%AF%E5%BD%A2%E9%93%BE%E8%A1%A8II.md