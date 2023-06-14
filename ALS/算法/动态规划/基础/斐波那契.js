// dp[i]
// dp[i] = dp[i-1] + dp[i-2]
// dp[0] = 1  dp[1] = 1
// 
function dp(n) {
  let dp = []
  dp[0] = 1
  dp[1] = 1
  for (let i = 2; i < n; i++) {
    dp[i] = dp[i-1] + dp[i-2]
  }
  return dp[n]
}
