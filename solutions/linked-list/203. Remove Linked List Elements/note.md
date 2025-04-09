# 203. Remove Linked List Elements
給定一個Linked List與目標數字，移除目標數字的Node

## 解題方法
Linked List 的移除只要打斷連接目前node的連結即可，所以當篩選到目標時，將前一個 node 的連結接到目標 node 的連結。

### Step 1 遍歷所有 node 找尋目標，並打斷連結
```
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
```

## 特別注意
因為不是雙向的Linked List，所以如果是檢查當前 node 作為判斷基準的話需要紀錄上一個 node，才能夠跨node連結。
因此更好的做法是一開始建立一個 node 在 head 的最前方，每次檢查 next 是否為目標，若為目標則打斷連結。
```
const dummy = new ListNode(0, head)
let current = dummy;

while(current) {
    if(current.next.val == val) {
        current.next = current.next.next;
    } else
        current = current.next;
}

return dummy.next;
```