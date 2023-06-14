let version1 = "1.0.1", version2 = "1"


var compareVersion = function(version1, version2) {
  const v1 = version1.split('.'),
        v2 = version2.split('.')
  let l1 = v1.length,
      l2 = v2.length,
      left = 0,
      right = 0
  // console.log(v1,v2);
  if(l1 > l2) {
    v2.push(...Array(l1-l2).fill(0))
  }
  if (l2 > l1) {
    v1.push(...Array(l2-l1).fill(0))
  }
  while (left < v2.length) {
    if (parseInt(v1[left]) === parseInt(v2[right])) {
      left++
      right++
    } else if (parseInt(v1[left]) > parseInt(v2[right])) {
      return 1
    } else {
      return -1
    }
  }
  return 0
};
console.log(compareVersion(version1,version2));