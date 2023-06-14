var findSubsequences = function(nums) {
  let result = []
  let path = []
  function backtracing(startIndex,uset = []) {
      if(path.length > 1) {
        // 子集不用return
          result.push(path.slice())
      }
      for(let i = startIndex; i < nums.length; i++) {
         // uid[nums[i]+100] 对同一层不能使用相同的元素 去重 比如 4647  先取4 再取7 两个7其实一样
          if((path.length > 0 && nums[i] < path[path.length - 1]) || uset[nums[i] + 100]) {
              continue
          }
          uset[nums[i] + 100] = true
          path.push(nums[i])
          backtracing(i + 1)
          path.pop()
      }
  }
  backtracing(0)
  return result
};