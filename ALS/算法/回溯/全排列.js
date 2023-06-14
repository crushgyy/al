// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const res = [], path = [];
  backtracking(nums, nums.length, []);
  return res;
  
  function backtracking(n, k, used) {
      if(path.length === k) {
          res.push([...path]);
          return;
      }
      for (let i = 0; i < k; i++ ) {
          if(!used[i]) {
            path.push(n[i]);
            used[i] = true; // 标记用过的元素不能再用
            backtracking(n, k, used);
            path.pop();
            used[i] = false;
          }
      }
  }
};
// 可包含重复数字的序列 nums 


var permuteUnique = function (nums) {
  nums.sort((a, b) => {
      return a - b
  })
  let result = []
  let path = []

  function backtracing(used) {
      if (path.length === nums.length) {
          result.push([...path])
          return
      }
      for (let i = 0; i < nums.length; i++) {
        // [1,1,2]
        // 树层上 i-1 为false  树枝i-1 为true  在树层上的去重 保证在树层上去重（used[i]前一个为0）
        // 树层上  1 used = [1,0,0]   1 used = [0,1,0] 2 used = [0,0,1]
        // 树层上去重
          if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
              continue
          }
          // 取过的数标记为true 不能取
          if (!used[i]) {
              path.push(nums[i])
              used[i] = true
              backtracing(used)
              path.pop()
              used[i] = false
          }


      }
  }
  backtracing([])
  return result
};
