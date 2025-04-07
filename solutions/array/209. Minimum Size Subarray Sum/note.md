# * 209. Minimum Size Subarray Sum (Medium)
給定一數字陣列與目標，找尋總和大於等於目標的最小子陣列並回傳其長度。

## 解題方法
為了在O(n)的複雜度內完成，因此不使用雙迴圈遍歷的方式。
這邊使用雙指針法的概念，製造一個浮動窗口，當窗口內的總和達到要求時紀錄其長度，並試著減少窗口的左邊界，若依然符合則紀錄長度並重複，直到不滿足要求重新移動右邊界加入新的值。

### Step 1 初始化左右邊界與結果
```
let left = 0;
let sum = 0;
let result = Number.MAX_SAFE_INTEGER;
```

### Step 2 移動窗手
每次加入一個數字來增加窗口，若窗口內總和符合條件則試著縮小窗口以找到最小窗口長度，直到無法達到目標值後重新開始下一輪for迴圈加入新值。
```
for(let right = 0; right < nums.length; right ++) {
    const num = nums[right]; //移動右邊界加入新的數值
    sum += num;
    // 若以符合要求開始移動左邊界減少窗口長度，找到符合條件的最小窗口長度
    while(sum >= target) { 
        const length = right - left + 1;
        if(length < result)
            result = length;
        sum -= nums[left];
        left ++;
    }
}
```

### Step 3 回傳結果
遍歷完所有數字後，若result的值為被改變則代表沒有任何窗口達到要求
```
return result == Number.MAX_SAFE_INTEGER ? 0 : result;
```