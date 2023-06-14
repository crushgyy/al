// 关于为什么切分为3的优先级最高 
// 可以利用均值不等式求出乘积最大值 L(m)=(n/m)^m 对此式求导（可利用对数法），
// 可以证明当 m=n/e 时，乘积取最大，此时每段绳子的长度为 n/(n/e)=e，
// 自然对数e的值为2.718，显然接近3，所以总体来讲3最好

/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function(n) {
  if(n < 4) return n - 1;
  let result = 1;
  while(n > 4) {
      result *= 3;
      n -= 3;
  }
  return result * n;
};

var cuttingRope = function(n) {
  const dp = Array(n+1).fill(0)
  dp[2] = 1
  for (let i = 3; i <= n; i++) {
    for (let j = 1; j < i; j++){
        dp[i] = Math.max(dp[i],j*(i-j),j*dp[i-j])
    }
  }
  return dp[n]
};