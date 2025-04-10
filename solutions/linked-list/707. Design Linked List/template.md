# 707. Design Linked List
實作一個class來完成 Linked List 資料結構的所有功能，必須包含以下功能：

1. MyLinkedList(): Initializes the MyLinkedList object.
2. get(index): Get the value of the indexth node in the linked list. If the index is invalid, return -1.
3. addAtHead(int val): Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
4. addAtTail(int val): Append a node of value val as the last element of the linked list.
5. addAtIndex(int index, int val) Add a node of value val before the indexth node in the linked list. If index equals the length of the linked list, the node will be appended to the end of the linked list. If index is greater than the length, the node will not be inserted.
6. deleteAtIndex(int index) Delete the indexth node in the linked list, if the index is valid.

## 解題方法
MyLinkedList 是代表一整個 Linked List，所以將整個 Linked List 功能進行拆分會比較好做：
1. ListNode class: 代表 Linked List 中的每個 node
2. getLength(): 回傳 Linked List 的長度
3. getNode(index): 回傳指定 index 的 node

### Step 1 construtor & list node
```
// Linked List 中的每個 node
class ListNode {
    constructor(val, next) {
        this.val = val == undefined ? 0 : val;
        this.next = next == undefined ? null : next;
    }
}

var MyLinkedList = function() {
    this.head = null; // head 指在 Linked List 的頭
};
```

### Step 2 getLength function
```
MyLinkedList.prototype.getLength = function() {
    let leng = 0;
    let head = this.head;
    while(head) { // 不斷查詢直到 Linked List 盡頭
        leng++;
        head = head.next;
    }
    return leng;
};
```

### Step 3 getNode(index) function
```
MyLinkedList.prototype.getNode = function(index) {
    // index invalid or linked list is empty
    if(!this.head || index < 0 || index > this.getLength() - 1)
        return null;

    // 查詢回合數等於index
    let head = this.head;
    for (let i = 0; i < index; i++) {
        if(!head)
            break;
        head = head.next;
    }
    return head;
};
```

### Step 4 addAtHead function
```
MyLinkedList.prototype.addAtHead = function(val) {
    let head = this.head;

    // new node
    const node = new ListNode(val, undefined);

    if(head) { // Linked List 已存在
        node.next = head;
        this.head = node;
    } else {   // Linked List 為空
        this.head = node;
    }
};
```

### Step 5 addAtTail function
```
MyLinkedList.prototype.addAtTail = function(val) {
    const newNode = new ListNode(val, undefined); // new node
    const length = this.getLength();
    const lastNode = this.getNode(length - 1);


    if(lastNode) // Linked List 存在
        lastNode.next = newNode;
    else // Linked List 不存在
        this.head = newNode;    
};
```

### Step 6 addAtIndex function
```
MyLinkedList.prototype.addAtIndex = function(index, val) {
    const length = this.getLength();
    const nodeAtIndex = this.getNode(index);

    if(index == length) { //index 等於Linked List長度，直接將 node 加在最後面
        this.addAtTail(val);
    } else {
        if(nodeAtIndex) {
            const newNode = new ListNode(val, nodeAtIndex); //new node
            const prev = this.getNode(index - 1); //目標 index 前一個node

            if(prev)
                prev.next = newNode; //更改前一個 node 的 next 到新的 node
            else
                this.head = newNode; //此次新增為第一個，因此將第一個 node 設定為新的 node
        }
    }
};
```

### Step 7 deleteAtIndex function
```
MyLinkedList.prototype.deleteAtIndex = function(index) {
    const nodeAtIndex = this.getNode(index);
    if(nodeAtIndex) { // 欲刪除的node存在再做
        const prev = this.getNode(index - 1);
        if(prev)
            prev.next = nodeAtIndex.next; // 將前一個 node 的 next 更改為欲刪除 node 的 next，藉此跳過欲刪除的 node
        else
            this.head = nodeAtIndex.next; // 此次刪除的 node 為第一個，將 head 設為欲刪除 node 的 next
    }
};
```