// 给你一个 只包含正整数 的 非空 数组 nums 。
// 请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。
var canPartition = function(nums) {
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
  }
  if (sum % 2 !== 0) return false
  let target = sum / 2
  let dp = Array(target+1).fill(0)
  for (let i = 0; i < nums.length; i++) {
    for (let j = target; j >= nums[i]; j--) {
      dp[j] = Math.max(dp[j],dp[j-nums[i]]+nums[i])  
    }
  }
  return dp[target] === target
};