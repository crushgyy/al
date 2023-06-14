// 给你一个字符串 s ，请你统计并返回这个字符串中 回文子串 的数目。
// 回文字符串 是正着读和倒过来读一样的字符串。

let str = 'abaaaacdsddfddgegererr'

// 回文子串 请你统计并返回这个字符串中 回文子串 的数目。
const countSubstrings = (s) => {
  const strLen = s.length;
  let numOfPalindromicStr = 0;
  let dp = Array.from(Array(strLen), () => Array(strLen).fill(false));

  for(let j = 0; j < strLen; j++) {
      for(let i = 0; i <= j; i++) {
          if(s[i] === s[j]) {
              if((j - i) < 2) {
                  dp[i][j] = true;
              } else {
                  dp[i][j] = dp[i+1][j-1];
              }
              numOfPalindromicStr += dp[i][j] ? 1 : 0;
          }
      }
  }

  return numOfPalindromicStr;
}
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let max = ''

  for(let i=0; i< s.length; i++) {
      // 分奇偶， 一次遍历，每个字符位置都可能存在奇数或偶数回文
    if (s[i] == s[i+1]) {
        help(i,i+1)
    }
    help(i,i)
  }

  function helper(l, r) {
      // 定义左右双指针
      while(l>=0 && r< s.length && s[l] === s[r]) {
          l--
          r++
      }
      // 拿到回文字符， 注意 上面while满足条件后多执行了一次，所以需要l+1, r+1-1
      const maxStr = s.slice(l + 1, r + 1 - 1);
      // 取最大长度的回文字符
      if (maxStr.length > max.length) max = maxStr
  }
  return max
};