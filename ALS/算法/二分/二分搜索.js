
var search = function(nums, target) {
  let len = nums.length,
      l = 0,
      r = len - 1
  if (len === 0) {
    return -1
  }
  if (len === 1) {
    return nums[0] === target ? 0 : -1
  }
  while (l <= r ) {
    let mid = Math.floor((l + r) / 2)
    if (nums[mid] > target) {
      r = mid -1
    } else if (nums[mid] < target) {
      l = mid +1 
    } else {
      return mid
    }
  }
  return -1
};
// 在排序数组中查找元素的第一个和最后一个位置
var searchRange = function(nums, target) {
  let len = nums.length
  if (len === 0) return [-1,-1]
  if (len === 1) return nums[0] === target ? [0,0] : [-1,-1];
  let l = 0,
      r = len - 1,
      mid
  while (l <= r) {
    mid = Math.floor((l+r)/2);
    if (nums[mid] === target) {
      let s = mid,
          e = mid
      while (nums[s] === target) {
        s--
      }
      while (nums[e] === target) {
        e++
      }
      return [s+1,e-1]
    } else if (nums[mid] < target) {
      l = mid + 1
    } else {
      r = mid - 1
    }
  }
  return [-1,-1]
};