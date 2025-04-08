# 59. Spiral Matrix II
給定一數字 n ，建立一邊長為 n 的正方形二維陣列，並逆時針填入 1 ~ n^2 的數字。

ex:

n = 3

![alt text](image.png)

## 解題方法
### 轉彎
設 dx, dy 為每次 x, y 的位移量，而位移後的下一元素為 array[y + dy][x + dx]：
* 往右時 dx = 1, dy = 0; 往左時 dx = -1, dy = 0
* 往下時 dy = 1, dx = 0; 往上時 dy = -1, dx = 0

整理後可得知每次轉彎變化為：
dx = -dy;
dy = dx;

### 邊界判定
因為邊長為 n ，所以如果位移後會超過 n 代表超過邊界，另外如果位移後的格子中已經有填入值代表也需要轉彎

### 程式碼
#### Step 1 初始化起點及變化方向
```
let x = 0, y = 0, dx = 1, dy = 0;
```

#### Step 2 開始帶入數字，超過邊界後轉彎
```
for(let i = 1; i <= Math.pow(n, 2); i++) {
    ans[y][x] = i;
    if( y + dy >= n || 
        x + dx >= n || 
        ans[y + dy][x + dx] != 0 )  { // out of boundary
        const temp = dx;
        dx = 0 - dy;
        dy = temp;
    }
    
    x += dx;
    y += dy;
}
```

#### Step 3 回傳結果
```
return ans;
```
## Ref
https://www.youtube.com/watch?time_continue=328&v=pLjhGbKMxL4&embeds_referring_euri=https%3A%2F%2Fleetcode.com%2F&source_ve_path=Mjg2NjY