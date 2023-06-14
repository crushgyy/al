function jsonp ({url, data, callback}) {
  // 避免名称重复
  const fnName = `jsonp_${new Date().getTime()}`;
  // 参数解析
  const arr = [];
  for ( let i in data) {
    arr.push(i + '=' + data[i]);
  }
  const param = arr.join('&');
  // 创建script
  const script = document.createElement('script');
  script.src = `${url}?${param}&callback=${fnName}`;
  script.type = 'text/javascript';
  document.body.appendChild(script);

  window[fnName] = function (res) {   
      callback && callback(res);
      // 很多候选人漏掉clean这块
      document.body.removeChild(script);
      delete window[fnName];
  }

  script.onerror = function() { // 异常处理，也是很多人漏掉的部分
    window[fnName] = function() {
      callback && callback(
        'something error hanppend!'
      )
      document.body.removeChild(script);
      delete window[fnName];
    }
  }
  
}