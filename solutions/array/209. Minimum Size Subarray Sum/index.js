/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left = 0;
    let sum = 0;
    let result = Number.MAX_SAFE_INTEGER;

    for(let right = 0; right < nums.length; right ++) {
        const num = nums[right];
        sum += num
        while(sum >= target) {
            const length = right - left + 1;
            if(length < result)
                result = length;
            sum -= nums[left];
            left ++;
        }
    }
    return result == Number.MAX_SAFE_INTEGER ? 0 : result;
};