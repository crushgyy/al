let arr = [1,2,3,5,6,7,8,9],
    tar = 4

// 寻找比target大的最小元素
function getNum(nums,target) {
  let len = nums.length,
      l = 0,
      r = len - 1
  if (target < nums[0]) {
    return nums[0]
  }
  if (target > nums[len-1]) {
    return -1
  }
 
  while (l <= r ) {
    let mid = Math.floor((l + r) / 2)
    if (nums[mid] <= target) {
      l = mid+1
    } else if (nums[mid] > target) {
      r = mid - 1
    }
  }
  console.log(nums[l]);
  return nums[l]
}
getNum(arr,tar)



// 寻找比target小的最大元素
function getNum2(nums,target) {
  let len = nums.length,
      l = 0,
      r = len - 1
  if (target < nums[0]) {
    return -1
  }
  if (target > nums[len-1]) {
    return nums[len-1]
  }
 
  while (l <= r ) {
    let mid = Math.floor((l + r) / 2)
    if (nums[mid] < target) {
      l = mid+1
    } else if (nums[mid] >= target) {
      r = mid - 1
    }
  }
  console.log(nums[r]);
  return nums[r]
}
getNum2(arr,tar)