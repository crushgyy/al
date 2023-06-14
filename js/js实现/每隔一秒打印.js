// 每隔一秒输出1，2，3，4，5
for (var i = 5; i >= 0; i--) {
  (function(i) { //for循环后，注册了5个定时器函数
    setTimeout(function() {
      console.log(i);
    }, i * 1000);
  })(i);
}
for (let i = 5; i >= 0; i--) {
  setTimeout(function() {
      console.log(i)
  }, 1000 * i)
}