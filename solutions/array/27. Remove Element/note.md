# 27. Remove Element
將所有不符合的元素移除並調整原陣列，必須將所有未移除的元素集中至陣列前方的順序。
function 除了調整原陣列外，需回傳一 k 值表示陣列的前 k 個元素為移除元素後的陣列內容。

## 解題方法
題目要求調整原陣列內容，輕易地移除陣咧中的陣列會造成index跟著被改變，復原index的過程中容易造成效率不佳。
由於不需要在乎被移後的元素，因此可以使用 “快慢指針法” 直接取代掉原先的值：
    * 快指針：負責遍歷整個陣列
    * 慢指針：負責做元素取代

```
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
```