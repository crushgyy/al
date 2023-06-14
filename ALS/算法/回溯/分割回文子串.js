function partition(s) {
  const res = []
  const path = []

  const isHuiwen = (
      str
      ) => {
      let l = 0,
          r = str.length-1
      while (l < r) {
        if (str[l] !== str[r]) {
          return false
        }
        l++
        r--
      }
      return true
  }
  const rec = (str, index) => {
  // index >= str.length 证明分割到最后了 终止
      if (index >= str.length) {
          res.push(str)
          return
      }
      for (let i = index; i < str.length; i++) {
          if (isHuiwen(str.substring(index, i + 1))) {
            path.push(str.substring(index, i + 1))
            rec(str, i + 1)
            path.pop()
          }
      }
  }
  rec(s, 0)
  return res
};