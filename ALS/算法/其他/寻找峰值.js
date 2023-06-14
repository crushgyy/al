var findPeakElement = function(nums) {
  let l = nums.length
  nums[l] = - Number.MIN_SAFE_INTEGER
  for (let i = 1; i < l; i++) {
    if (nums[i] > nums[i-1] && nums[i] > nums[i+1]) {
      return i
    }
  }
  return 0
};