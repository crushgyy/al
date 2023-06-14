


// 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。


let result = []
let path = []
var combine = function(n, k) {
  combineHelper(n, k, 1)
  return result
};
const combineHelper = (n, k, startIndex) => {
  if (path.length === k) {
    result.push([...path])
    return
  }
  // // 剪枝：i <= (n-k+path.length+1)
  for (let i = startIndex; i <= n ; ++i) {
    path.push(i)
    combineHelper(n, k, i + 1)
    path.pop()
  }
}

// 组合总和 1
// 给你一个 无重复元素 的整数数组 candidates 和一个目标整数 target ，找出 candidates 中可以使数字和为目标数 target 的 所有 不同组合 ，并以列表形式返回。你可以按 任意顺序 返回这些组合。
// candidates 中的 同一个 数字可以 无限制重复被选取 。如果至少一个数字的被选数量不同，则两种组合是不同的。 
// 对于给定的输入，保证和为 target 的不同组合数少于 150 个。

function combinationSum(candidates, target){
  const resArr = [];
  function backTracking(
      candidates, target,
      startIndex, route, curSum
  ){
      if (curSum > target) return;
      if (curSum === target) {
          resArr.push(route.slice());
          return
      }
      for (let i = startIndex, length = candidates.length; i < length; i++) {
          let tempVal = candidates[i];
          route.push(tempVal);
          // 可重复选取 所以这里 i 不用 +1 
          backTracking(candidates, target, i, route, curSum + tempVal); // 关键点:不用i+1了，表示可以重复读取当前的数
          route.pop();
      }
  }
  backTracking(candidates, target, 0, [], 0);
  return resArr;
};
// 组合总和2
function combinationSum2(candidates, target){
  candidates.sort((a, b) => a - b);
  //  排序
  const resArr = [];
  function backTracking(
      candidates, target,
      curSum, startIndex, route
  ) {
      if (curSum > target) return;
      if (curSum === target) {
          resArr.push(route.slice());
          return;
      }
      for (let i = startIndex, length = candidates.length; i < length; i++) {
          // 去重
          if (i > startIndex && candidates[i] === candidates[i - 1]) {
              continue;
          }
          let tempVal = candidates[i];
          route.push(tempVal);
          backTracking(candidates, target, curSum + tempVal, i + 1, route);  // 只能使用一次 i + 1
          route.pop();

      }
  }
  backTracking(candidates, target, 0, 0, []);
  return resArr;
};


// 组合总和 3
// 找出所有相加之和为 n 的 k 个数的组合，且满足下列条件：
// 只使用数字1到9
// 每个数字 最多使用一次 
function combinationSum3(k, n){
  const resArr = [];
  function backTracking(k, n, sum, startIndex, tempArr) {
      if (sum > n) return;
      if (tempArr.length === k) {
          if (sum === n) {
              resArr.push([...tempArr]);
          }
          return;
      }
      for (let i = startIndex; i <= 9 ; i++) {
          tempArr.push(i);
          backTracking(k, n, sum + i, i + 1, tempArr);
          tempArr.pop();
      }
  }
  backTracking(k, n, 0, 1, []);
  return resArr;
};
// 组合 不强调顺序 先遍历物品 再遍历背包
//  排列 强调顺序 先遍历背包 再遍历物品
// 组合总和4
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
  return res.length
};
