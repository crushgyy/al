// dp[i][0] 第i天 持有 股票的金额 dp[i][1] 第i天 不持有 股票的金额
// dp[i][0] = Math.max(dp[i-1][0],-price[i]) 
// dp[i][1] = Math.max(dp[i-1][1],dp[i-1][0]+price[i])  
//  买卖一次
var maxProfit = function(prices) {
  let len = prices.length
  let dp = Array.from(Array(len),() => Array(2).fill(0))
  dp[0][0] = -prices[0]
  dp[0][1] = 0
  for (let i = 1; i < len; i++) {
    dp[i][0] = Math.max(dp[i-1][0],0 -prices[i])
    dp[i][1] = Math.max(dp[i-1][1],dp[i-1][0]+prices[i])
  }
  return dp[len-1][1]
};
// 多次买卖
var maxProfit = function(prices) {
    // dp[i][0] = max dp[i-1][0] dp[i-1][1] - prces[i] 持有股票
    // dp[i][1] = max dp[i-1][1]  dp[i-1][0] + prces[i]不持有股票
    let len = prices.length
    let dp = Array.from(Array(len),() => Array(2).fill(0))
    dp[0][0] = - prices[0]
    dp[0][1] =  0
    for(let i = 1; i < len ;i++) {
        dp[i][0] = Math.max(dp[i-1][0],dp[i-1][1] - prices[i])
        dp[i][1] = Math.max(dp[i-1][1],dp[i-1][0] + prices[i])
    }
    return dp[len-1][1]
};
// 含冷冻期 //0:买入 1:卖出(冷冻)  2:卖出(无冷冻)
var maxProfit = function(prices) {
  let len = prices.length
  let dp = Array.from(Array(len),() => Array(3).fill(0))
  dp[0][0] = - prices[0]
  dp[0][1] = 0
  dp[0][2] = 0
  for(let i = 1; i < len ;i++) { 
      dp[i][0] = Math.max(dp[i-1][0],dp[i-1][2] - prices[i])
      dp[i][1] = dp[i-1][0] + prices[i]
      dp[i][2] = Math.max(dp[i-1][1],dp[i-1][2])
  }
  return Math.max(dp[len-1][2],dp[len-1][1])
};
// 含手续费 卖出交手续费
var maxProfit = function(prices,fee) {
  let len = prices.length
  let dp = Array.from(Array(len),() => Array(2).fill(0))
  dp[0][0] = - prices[0]
  dp[0][1] =  0
  for(let i = 1; i < len ;i++) {
      dp[i][0] = Math.max(dp[i-1][0],dp[i-1][1] - prices[i])
      dp[i][1] = Math.max(dp[i-1][1],dp[i-1][0] + prices[i]-fee)
  }
  return dp[len-1][1]
};

// 只能买买两次
 

// 第一次卖出
// 第二次买入
// 第二次卖出
const maxProfit = prices => {
  const len = prices.length;
  const dp = new Array(len).fill(0).map(x => new Array(5).fill(0));
  dp[0][1] = -prices[0];
  dp[0][3] = -prices[0];

  for (let i = 1; i < len; i++) {
// 0. 没有操作
      dp[i][0] = dp[i - 1][0];
// 第一次买入
      dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
// 第一次卖出
      dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1] + prices[i]);
// 第二次买入
      dp[i][3] = Math.max(dp[i - 1][3], dp[i - 1][2] - prices[i]);
// 第二次卖出
      dp[i][4] = Math.max(dp[i - 1][4], dp[i - 1][3] + prices[i]);
  }
  return dp[len - 1][4];
};

// 买卖k次
const maxProfit = (k,prices) => {
  if (prices == null || prices.length < 2 || k == 0) {
      return 0;
  }
  
  let dp = Array.from(Array(prices.length), () => Array(2*k+1).fill(0));
  // 多次买入的初始化 
  for (let j = 1; j < 2 * k; j += 2) {
      dp[0][j] = 0 - prices[0];
  }
  
  for(let i = 1; i < prices.length; i++) {
      for (let j = 0; j < 2 * k; j += 2) {
          dp[i][j+1] = Math.max(dp[i-1][j+1], dp[i-1][j] - prices[i]);
          dp[i][j+2] = Math.max(dp[i-1][j+2], dp[i-1][j+1] + prices[i]);
      }
  }

  return dp[prices.length - 1][2 * k];
};