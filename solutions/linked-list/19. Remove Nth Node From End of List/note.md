# 19. Remove Nth Node From End of List
從linked list中刪除從尾巴數過來特定位置的node。

## 解題方法
製作取得linked list長度的function，透過長度減掉index即可反轉index的方向。

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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const length = getListLength(head);
    if(n == length) { // 長度等於 n 的情況移除第一個 node
        const next = head.next;
        return next;
    }
    else { // 根據 round 不斷推進找到要移除的node
        const ans = new ListNode(0, head);
        console.log('lenght: ', length);
        let round = length - n;
        let temp = head;
        let prev;
        while(temp) {
            if(round == 0)
                break;
            prev = temp;
            temp = temp.next ? temp.next : temp;
            round --;
        }
        console.log('temp: ', temp);
        if(prev)
            prev.next = temp ? temp.next : null;
        return ans.next;
    }
};

var getListLength = function(head) {
    let count = 0;
    let temp = head;
    while(temp) {
        count ++;
        temp = temp.next;
    }
    return count
}
```