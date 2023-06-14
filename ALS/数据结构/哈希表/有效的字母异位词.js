var isAnagram = function(s, t) {
  let map1 = new Map(),
      map2 = new Map()
  for (let i = 0; i < s.length; i++) {
    map1.set(s[i],(map1.get(s[i]) || 0)+1)
  }
  for (let i = 0; i < t.length; i++) {
    map2.set(t[i],(map2.get(t[i]) || 0)+1)
  }
  if(map1.size !== map2.size) return false
  for (const [key,value] of map1.entries()) {
    if (map2.get(key) != value) {
      return false
    }
  }
  return true
};