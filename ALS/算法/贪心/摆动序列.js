// **贪心**
var wiggleMaxLength = function(nums) {
  let l = nums.length;
    if (l < 2) {
      return l
    }
    let res = 0,
        pre = 0,
        cur = 0
    for (let i = 1; i < l; i++) {
      cur = nums[i] - nums[i-1];
      if ((cur > 0 && pre <= 0) || (cur < 0 && pre >= 0)) {
        res++
        pre = cur
      }
    }
    return res+1
  };

// **动态规划**
var wiggleMaxLength = function(nums) {
  if (nums.length === 1) return 1; 
  // 考虑前i个数，当第i个值作为峰谷时的情况（则第i-1是峰顶）
  let down = 1;
  // 考虑前i个数，当第i个值作为峰顶时的情况（则第i-1是峰谷）
  let up = 1;
  for (let i = 1; i < nums.length; i++) {
      if (nums[i] < nums[i - 1]) {
        down = Math.max(up + 1, down);
      }
      if (nums[i] > nums[i - 1]) {
        up = Math.max(down + 1, up);
      }
  }
  return Math.max(down, up);
};
