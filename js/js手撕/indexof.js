const fn = (long, short) => {
  let longLen = long.length
  let shortLen = short.length

  for (let i = 0; i <= longLen - shortLen; i++) {
      let j;
      for (j = 0; j < shortLen; j++) {
          // long[i + j] 表示从 i + 0  -> i + j j长度
          if (long[i + j] !== short[j]) {
              break
          }
      }
      if (j === shortLen) return i

  }

  return -1
}





// 大概思路： 遍历long，和short不匹配，直接跳过short的长度（依赖一个进位表）
// 建立一个进位表，只和short有关
const buildMap = str => {
  const a = [...str]
  const len = a.length
  const map = {}
  a.forEach((i, index) => {
      map[i] = len - index
  })

  return map
}

// 开始操作
const fn2 = (long, short) => {
  const map = buildMap(short)

  const longLen = long.length
  const shortLen = short.length
  let i
  for (i = 0; i <= longLen - shortLen; ) {
      let j;
      for (j = 0; j < shortLen; j++) {
          if (long[i + j] !== short[j]) {
              const next = long[i + shortLen]
              const c = map[next] ? map[next] : shortLen
              i += c
              break;
          }
          
      }
      if (j === shortLen) return i
      
  }

  return -1
}