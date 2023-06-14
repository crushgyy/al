var nextGreaterElement = function(nums1, nums2) {
  let res = [],
    stack = [],
  map = new Map()
  nums2.forEach(item => {
    while (stack.length && item > stack[stack.length-1]) {
      map.set(stack.pop(),item)
    }
    stack.push(item)
  });
  stack.forEach(item => map.set(item,-1))
  nums1.forEach(item => res.push(map.get(item)))
  return res
};

// 2
var nextGreaterElements = function(nums) {
  let ary = [...nums].slice(0,nums.length-1);
  let arr = nums.concat(ary),
      len = arr.length,
      res = Array(len).fill(-1),
      stack = []
  for (let i = 0; i < len; i++) {
    while (stack.length && arr[i] > arr[stack[stack.length-1]]) {
      res[stack.pop()] = arr[i]
    }
    stack.push(i)
  }
  return res.slice(0,nums.length)
};