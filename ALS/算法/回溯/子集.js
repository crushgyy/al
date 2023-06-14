// 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。

// 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。


//  子集问题不用return

 
var subsets = function(nums) {
  let result = []
  let path = []
  function backtracking(startIndex) {
      result.push([...path])
      for(let i = startIndex; i < nums.length; i++) {
          path.push(nums[i])
          backtracking(i + 1)
          path.pop()
      }
  }
  backtracking(0)
  return result
};
//  无重复
var subsetsWithDup = function(nums) {
  let result = []
  let path = []
  nums = nums.sort((a,b) => a-b)
  function backtracking(startIndex) {
      result.push([...path])
      for(let i = startIndex; i < nums.length; i++) {
          if (i > startIndex && nums[i] === nums[i-1]) {
            continue
          }
          path.push(nums[i])
          backtracking(i + 1)
          path.pop()
      }
  }
  backtracking(0)
  return result
};