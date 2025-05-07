# 160. Intersection of Two Linked Lists
找出兩個Linked List的相交，若沒有則回傳null。

## 解題方法
先將較長的 Linked List 截短至與另一個Linked List長度相同，在將兩個Linked List一同移動，找到相同的節點後回傳。
Linked List 結束後若無相同的節點代表無相交則回傳null。

```
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let tempA = new ListNode(0, headA);
    let tempB = new ListNode(0, headB);

    const lengA = getListLength(tempA);
    const lengB = getListLength(tempB);

    console.log(lengA);
    console.log(lengB);

    if(lengA > lengB) {
        for(let i = 0; i < (lengA - lengB); i++) { // 將 A 截短到與 B 相同
            tempA = tempA.next;
        }
       
        while(tempA && tempB) {
            if(tempA.next == tempB.next)
                return tempA.next;
            tempA = tempA.next;
            tempB = tempB.next;
        }

    } else if(lengB >= lengA) {
        for(let i = 0; i < (lengB - lengA); i++) { // 將 B 截短到與 A 相同
            tempB = tempB.next;
        }

        while(tempA && tempB) {
            if(tempA.next == tempB.next)
                return tempB.next;
            tempA = tempA.next;
            tempB = tempB.next;
        }
    }
    return null;
};

// 取得 Linked List 長度的 function
var getListLength = function(head) {
    let leng = 0;
    let temp = head;
    while(temp) {
        leng ++;
        temp = temp.next;
    }
    return leng;
}
```