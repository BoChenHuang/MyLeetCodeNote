# 206. Reverse Linked List
給定一個 Linked List ， 回傳其翻轉後的結果

## 解題方法
遍歷輸入的Lined List，同時使用每次讀取的head來插入至新的 Linked List中。

```
function(head) {
    let prev = null;

    while(head) {
        if(prev) {
            prev = new ListNode(head.val, prev) // 若新的 Linked List 已存在則建立新的 node 連接過去
        }
        
        prev = prev ? prev : new ListNode(head.val, undefined); // 記錄前一個 node

        head = head.next;
    }
    return prev
};
```