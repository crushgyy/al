
// 既满足时间复杂度又满足空间复杂度，就要提到位运算中的异或运算 XOR，主要因为异或运算有以下几个特点：
// 一个数和 0 做 XOR 运算等于本身：a⊕0 = a
// 一个数和其本身做 XOR 运算等于 0：a⊕a = 0
// XOR 运算满足交换律和结合律：a⊕b⊕a = (a⊕a)⊕b = 0⊕b = b

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let ans = 0;
  for(const num of nums) {
      ans ^= num;
  }
  return ans;
};
