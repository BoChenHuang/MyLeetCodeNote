/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if(num1 == '0' || num2 == '0') return '0';
    
    const m = num1.length;
    const n = num2.length;
    const ans = new Array(m + n).fill(0);

    for(let i = m - 1; i >= 0; i--) {
        for(let j = n - 1; j >= 0; j--) {
            const pointer1 = i + j;
            const pointer2 = i + j + 1;

            const mult = Number(num1[i]) * Number(num2[j]); 
            const sum = ans[pointer2] + mult;
            const carry = Math.floor(sum / 10);
            const mod = sum % 10;

            ans[pointer1] += carry;
            ans[pointer2] = mod;
        }
    }
    if(ans[0] == '0')
        ans.shift();
    return ans.join('');
};