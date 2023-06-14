var findTargetSumWays = function(nums, target) {
  let sum = nums.reduce((pre,cur) => pre + cur)
  if ((sum + target) % 2  || Math.abs(target) > sum) {
    return 0
  }

  let tar = (sum + target) / 2;
  let dp = Array(tar+1).fill(0);
  dp[0] = 1
  for (let i = 0; i < nums.length; i++) {
    for (let j = tar; j >= nums[i]; j--) {
      dp[j] += dp[j-nums[i]]
    }
  }
  return dp[tar]
};