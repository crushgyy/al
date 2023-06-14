var removeElement = function(nums) {
  let res = [],
      l = 0,
      r = nums.length-1
  while (l <= r) {
    if (Math.pow(nums[l],2) > Math.pow(nums[r],2)) {
      res.unshift(Math.pow(nums[l],2))
      l++
    } else {
      res.unshift(Math.pow(nums[r],2))
      r--
    }
  }
  return res
}; 