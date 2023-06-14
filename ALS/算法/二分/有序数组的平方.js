/**
 * @desc two pointers solution
 * @link https://leetcode-cn.com/problems/squares-of-a-sorted-array/
 * @param nums Array  e.g. [-4,-1,0,3,10]
 * @return {array}    e.g. [0,1,9,16,100]
 */
const sortedSquares = function (nums) {
  let res = []
  for (let i = 0, j = nums.length - 1; i <= j;) {
    const left = Math.abs(nums[i])
    const right = Math.abs(nums[j])
    if (right > left) {
      // push element to the front of the array
      res.unshift(right * right)
      j--
    } else {
      res.unshift(left * left)
      i++
    }
  }
  return res
}