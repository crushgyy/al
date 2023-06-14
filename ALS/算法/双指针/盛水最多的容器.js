var maxArea = function(height) {
  let l = 0,
      r = height.length-1,
      max = 0
  while (l < r) {
    let t = (r - l) * Math.min(height[l],height[r])
    max = Math.max(t,max)
    if (height[l] > height[r]) {
      r--
    } else {
      l++
    }
  }
  return max
};