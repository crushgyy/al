// 规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。（底部自动加载更多，调整窗口大小） 
// 定时器版本
  function throttle(fn,time) {
    let timer = null
    return function(...args){
      clearTimeout(timer)
      if (!timer) {
        timer = setTimeout(() => {
          timer = null
          fn.apply(this,args)
        },timer)
      }
    }
  }
// 时间戳版本
function throttle(fn,time) {
  let pre = 0
  return function (...args) {
    if (Date.now() - pre >= time) {
      pre = Date.now()
      fn.apply(this,args)
    }
  }
}