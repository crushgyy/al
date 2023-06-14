// 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

// 请你设计并实现时间复杂度为 O(n) 的算法解决此问题。

var longestConsecutive = function(nums) {
  nums.sort((a,b) => a-b)
    let len = nums.length,
        max = 1 ,
        l = 0,
        r = 1,
        cur = 1
    if (len === 0) return 0
    if (len === 1) return 1
    while (l < len && r < len) {
      if (nums[r] - nums[l] === 1) {
        cur++
      } else if (nums[r] - nums[l] > 1) {
        cur = 1
      } 
      max = Math.max(cur,max)
      l++
      r++
    }
    return max
  };