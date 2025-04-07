/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const size = nums.length;
    const ans = new Array(size);
    let left = 0;
    let right = size - 1;

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
    return ans;
};