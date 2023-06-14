var findLengthOfLCIS = function(nums) {
  let len = nums.length
  if (len < 2) {
    return len
  }
  let dp = Array(len).fill(1),
      max = 0
  for (let i = 1; i < len; i++) {
    if (nums[i] > nums[i-1]) {
      dp[i] = Math.max(dp[i],dp[i-1]+1)
    }
    max = Math.max(max,dp[i])
  }
  return max
};