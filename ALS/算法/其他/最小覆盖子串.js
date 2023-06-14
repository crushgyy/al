
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const target = new Map();
  let minChar;
  let nowChar = "";
  for (let i = 0; i < t.length; i++) {
      target.set(t[i], (target.get(t[i]) || 0) + 1);
  };
  let size = target.size
  let l = 0, r = 0;
  for (; r < s.length; r++) {
      if (target.has(s[r])) target.set(s[r], target.get(s[r]) - 1);
      if (target.get(s[r]) === 0) size--

      while (!size) {
          nowChar = s.substring(l, r + 1);
          if (target.has(s[l])) {
              target.set(s[l], target.get(s[l]) + 1)
              if (target.get(s[l]) === 1) {
                  size++
                  if (!minChar || minChar.length > nowChar.length) minChar = nowChar;
              }
          }
          l++;
      }
  }
  return minChar ? minChar : '';
};