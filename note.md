# 704. Binary Search
使用二元搜尋找到指定的元素，因為要使用二元搜尋機制實作，所以本題不使用Array.indexOf()

## 解題方法
因為nums是已經排序過後的陣列，因此適用二元搜尋，每次切一半去搜尋，跟中間值比大小來決定要搜尋的目標是在左邊或右邊。

### Step 1 初始化左右邊界
```
let hi = nums.length - 1;
let lo = 0;
```

### Step 2 不斷切分陣列，每次取位於陣列中間的值做比較，判斷目標位於左邊或右邊
```
while(hi > lo) {
    const mid = lo + Math.floor((hi - lo) / 2);
    const val = nums[mid];
    if(target > val) {
        // 大於的情況下可以排除該元素
        lo = mid + 1;
    } else {
        // 小於等於的情況下必須將該元素納入可能的選項
        hi = mid;
    }
}
```

### Step 3 最後 hi 會等於 lo，再回傳結果
```
return nums[lo] == target ? lo : -1;
```

## 特別注意
為避免無限迴圈的情況，mid的計算方式就十分重要。
mid的計算方式決定每次判斷是是根據左邊或右邊：
```
const mid = lo + Math.floor((hi - lo) / 2) // left/lower mid
const mid = lo + Math.floor((hi - lo + 1) / 2) // right/upper mid
```

這邊會影響到後續判斷的邏輯，小技巧是考慮陣列只有兩個的情況，必須確保每次 hi 或 lo 的移動最少有移動 1 個位置