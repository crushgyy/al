// 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。

// 给你一个可能存在 重复 元素值的数组 numbers ，它原来是一个升序排列的数组，并按上述情形进行了一次旋转。请返回旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一次旋转，该数组的最小值为 1。  

var minArray = function(numbers) {
  let right = numbers.length-1,
      left = 0
  while (left < right) {
    let mid = Math.floor((left + right)/2)
    if (numbers[mid] > numbers[right]) {
      left = mid + 1
    } else if (numbers[mid] < numbers[right]) {
      right = mid
    } else {
      right--
    }
  }
  return numbers[left]
};
//找到相应值
const search = function(nums, target) {
  if (!nums.length) return -1
  let left = 0, right = nums.length - 1, mid
  while (left <= right) {
      mid = left + ((right - left) >> 1)
      if (nums[mid] === target) {
        return mid
      }
      if (nums[mid] >= nums[left]) {
          if (target >= nums[left] && target < nums[mid]) {
            right = mid - 1
          } else {
            left = mid + 1
          }
      } else {
          if (target > nums[mid] && target <= nums[right]) {
            left = mid + 1
          } else {
            right = mid - 1
          }
      }
  }
  return -1
}