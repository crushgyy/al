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
// 最长回文子串
function longestPalindrome(s) {
  // 就一个值，那肯定是对称的。
  if (s.length <=1) {
    return s
  }
  let max = ''
  for (let i = 0; i < s.length; i++) {
    let l = i, r = i
    // 锁定左边和s[i]相同的邻居范围
    while (0 < l && s[l - 1] === s[i]) {
      l--
    }
    // 锁定右边和s[i]相同的邻居范围
    while (r < s.length - 1 && s[r + 1] === s[i]) {
      r++
    }
    // 以左右邻居为起点，向两边扩散，任何一方达到左右边界，则对称长度达到极限。
    while (0 < l && r < s.length - 1) {
      // 试探后发现两边不相等，立即结束探测
      if (s[l - 1] !== s[r + 1]) {
        break
      }
      // 相等则继续扩散
      l--
      r++
    }
    // 扩散到边界后和最大串比较长度
    if (r - l + 1 > max.length) {
      max = s.slice(l, r + 1)
    }
  }
  return max
}


const countSubstrings2 = (s) => {
  const strLen = s.length;
  let numOfPalindromicStr = 0;

  for(let i = 0; i < 2 * strLen - 1; i++) {
      let left = Math.floor(i/2);
      let right = left + i % 2;

      while(left >= 0 && right < strLen && s[left] === s[right]){
          numOfPalindromicStr++;
          left--;
          right++;
      }
  }

  return numOfPalindromicStr;
}