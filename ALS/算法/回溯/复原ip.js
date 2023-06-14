var isIp = function (str) {
  let resBool = true;
  let tempVal = Number(str);
  if (
      str.length === 0 || isNaN(tempVal) ||
      tempVal > 255 || tempVal < 0 ||
      (str.length > 1 && str[0] === '0')
  ) {
      resBool = false;
  }
  return resBool;
}
var restoreIpAddresses = function(s) {
  const res = []
  const backTracking = function (startIndex = 0,path = []) {
    if (path.length === 4 && startIndex >= s.length) {
      res.push(path.join('.'))
      return
    }
    if (path.length === 4 || startIndex >= s.length) return
    for (let i = startIndex; i < s.length; i++) {
      if (isIp(s.substring(startIndex,i+1))) {
        path.push(s.substring(startIndex,i+1))
        backTracking(i+1,path)
        path.pop()
      } 
    }
  }
  backTracking()
  return res
};




function isValidIpSegment(str) {
  let resBool = true;
  let tempVal = Number(str);
  if (
      str.length === 0 || isNaN(tempVal) ||
      tempVal > 255 || tempVal < 0 ||
      (str.length > 1 && str[0] === '0')
  ) {
      resBool = false;
  }
  return resBool;
}
function restoreIpAddresses(s) {
  const resArr = [];
  backTracking(s, 0, []);
  return resArr;
  function backTracking(s, startIndex, route){
      let length = s.length;
      if (route.length === 4 && startIndex >= length) {
          // 把ip地址分为四块合法的 且 分割到了最后 就终止
          resArr.push(route.join('.'));
          return;
      }
      if (route.length === 4 || startIndex >= length) return;
      let tempStr = '';
      // startIndex + 1 从0 开始 '' 前面没有意义  一段ip最多只能有三位
      for (let i = startIndex + 1; i <= Math.min(length, startIndex + 3); i++) {
          tempStr = s.slice(startIndex, i);
          if (isValidIpSegment(tempStr)) {
              route.push(s.slice(startIndex, i));
              backTracking(s, i, route);
              route.pop();
          }
      }
  }
};
