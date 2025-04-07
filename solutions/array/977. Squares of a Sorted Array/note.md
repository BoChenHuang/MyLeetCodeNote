# 977. Squares of a Sorted Array
給定一個遞增排序的數列，將其每個數平方後同樣回傳遞增排序後的結果，複雜度需要在O(n)。

## 解題方法
因為nums是已經排序過後的陣列，因此平方後每一輪的最大值只會出現在邊界位置，所以使用雙指標的方式，每一輪取邊界值做比較，將較大的一方塞入結果．

### Step 1 初始化左右邊界
```
let left = 0;
let right = nums.length - 1;
```

### Step 2 每一輪比較邊界，將較大的值塞入答案中，並且移動邊界，執行的回合數必須等同 nums 陣列長度。

```
for(let i = size - 1; i >= 0; i--) {
        const leftNum = Math.abs(nums[left]);
        const rightNum = Math.abs(nums[right]);

        if(leftNum > rightNum) {
            ans[i] = Math.pow(leftNum, 2);
            left ++;
        } else {
            ans[i] = Math.pow(rightNum, 2);
            right --;
        }
    }
```