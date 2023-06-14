// dp[i] 
// dp[n] = dp[n-1] + dp[n-2]
// dp[1] = 1 dp[2] = 2 dp[3] = 3
function dp(n) {
  let dp = []
  dp[1] = 1
  dp[2] = 2
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i-1] + dp[i-2]
  }
  return dp[n] 
}
// 最小花费

var minCostClimbingStairs = function(cost) {
  let dp = []
  dp[0] = 0
  dp[1] = 0
  for (let i = 2;i <= cost.length;i++) {
      dp[i] = Math.min(dp[i-1]+cost[i-1],dp[i-2]+cost[i-2])   
  }
  return dp[cost.length]
};