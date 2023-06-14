/**
 * @param {number[]} nums
 * @return {boolean}  [2,3,1,1,4]
 */
var canJump = function(nums) {
  if(nums.length === 1) return true
  let cover = 0
  //  注意这里是 i <= cover
  for(let i = 0; i <= cover; i++) {
      cover = Math.max(cover, i + nums[i])
      if(cover >= nums.length - 1) {
          return true
      }
  }
  return false
};
// 最小步数
var jump = function(nums) {
  let curIndex = 0
  let nextIndex = 0
  let steps = 0
  //  注意这里是 nums.length - 1
  for(let i = 0; i < nums.length - 1; i++) {
      nextIndex = Math.max(nums[i] + i, nextIndex) //nextIndex 表示 i 到 nums[i] + i 这之间 最大的覆盖范围
      if(i === curIndex) {
          curIndex = nextIndex
          steps++
      }
  }

  return steps
};
