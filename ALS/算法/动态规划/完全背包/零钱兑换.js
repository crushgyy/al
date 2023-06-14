// 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。
// 计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。
// coins = [1, 2, 5], amount = 11
// dp[i] = Math.min(dp[i-coins[i]]+1,dp[i])
const coinChange = (coins, amount) => {
  if(!amount) {
      return 0;
  }
// amount包含0 所以要加1 
  let dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for(let i =0; i < coins.length; i++) {
      for(let j = coins[i]; j <= amount; j++) {
        dp[j] = Math.min(dp[j - coins[i]] + 1, dp[j]);
      }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}


const change = (amount, coins) => {
  let dp = Array(amount + 1).fill(0);
  dp[0] = 1;

  for(let i = 0; i < coins.length; i++) {
      for(let j = coins[i]; j <= amount; j++) {
          dp[j] += dp[j - coins[i]];
      }
  }

  return dp[amount];
}