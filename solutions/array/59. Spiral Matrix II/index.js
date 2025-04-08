/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let Array2D = (r,c) => [...Array(r)].map(_=>Array(c).fill(0));
    let ans = Array2D(n, n);
    let x = 0, y = 0, dx = 1, dy = 0;


    for(let i = 1; i <= Math.pow(n, 2); i++) {
        ans[y][x] = i;
        if(y + dy >= n || x + dx >= n || ans[y + dy][x + dx] != 0)  { // out of boundary
            const temp = dx;
            dx = 0 - dy;
            dy = temp;
        }
        
        x += dx;
        y += dy;
    }
    return ans;
};