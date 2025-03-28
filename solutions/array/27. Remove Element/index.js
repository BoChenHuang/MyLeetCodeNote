/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let j = 0; // 慢指針
    for(let i = 0; i < nums.length; i++) { //  快指針遍歷陣列
        if(nums[i] != val) {
            nums[j] = nums[i]; // 不是要刪掉的元素保留並更新慢指針
            j++;
        }
    }
    return j;
};