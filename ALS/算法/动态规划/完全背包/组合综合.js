// 组合 不强调顺序 先遍历物品 再遍历背包
//  排列 强调顺序 先遍历背包 再遍历物品
// 组合总和4

// 给你一个由 不同 整数组成的数组 nums ，和一个目标整数 target 。请你从 nums 中找出并返回总和为 target 的元素组合的个数。
// 元素可以重复使用 完全背包  背包从 0 到 target
// 位置不同可以看做为排列 先遍历背包 再遍历物品
const combinationSum4 = (nums, target) => {

  let dp = Array(target + 1).fill(0);
  dp[0] = 1;

  for(let i = 0; i <= target; i++) {
      for(let j = 0; j < nums.length; j++) {
          if (i >= nums[j]) { // 类似于 背包从num[i] 开始
              dp[i] += dp[i - nums[j]];
          }
      }
  }

  return dp[target];
};
var combinationSum5 = function(nums, target) {
  let res = []
  function breakTracking(index = 0,path = [],sum = 0) {
    if (sum > target) {
      return
    }
    if (sum === target) {
      res.push([...path])
    }
    for (let i = index; i < nums.length; i++) {
      path.push(nums[i])
      breakTracking(i,path,sum+nums[i])
      path.pop()
    }
  }
  breakTracking()
  console.log(res);
  return res.length
};
combinationSum5([1,2,3],5)