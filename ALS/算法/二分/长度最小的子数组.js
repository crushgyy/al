// 找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，
// 并返回其长度。如果不存在符合条件的子数组，返回 0

function minSubArrayLen(target, nums) {
  let left = 0, right = 0;
  let res = nums.length + 1;
  let sum = 0;
  while (right < nums.length) {
      sum += nums[right];
      if (sum >= target) {
          // 不断移动左指针，直到不能再缩小为止
          while (sum - nums[left] >= target) {
              sum -= nums[left++];
          }
          res = Math.min(res, right - left + 1);
      }
      right++;
  }
  return res === nums.length + 1 ? 0 : res;
};
