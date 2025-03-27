/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // 使用二元搜尋做搜尋

    // 左右邊界
    let hi = nums.length - 1;
    let lo = 0;
    while(hi > lo) {
        const mid = lo + Math.floor((hi - lo) / 2);
        const val = nums[mid];
        if(target > val) {
            // 大於的情況下可以排除該元素
            lo = mid + 1;
        } else {
            // 小於 "等於" 的情況下必須將該元素納入可能的選項
            hi = mid;
        }
    }

    //迭代完後 hi 會等於 lo
    return nums[lo] == target ? lo : -1;
};

