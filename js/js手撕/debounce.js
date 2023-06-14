//不立刻执行 在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。（搜索框、表单验证）
function debounce(fn,time,flag = true) {
  let timer = null
  return function(...args){
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this,args)
    },time)
  }
}

// 立刻执行

function debounce2(fn,time,flag = true) {
  let timer = null
  return function (...args) {
    clearTimeout(timer)
    if (flag) {
      fn.apply(this,args)
      flag = false
    }
    timer = setTimeout(() => {
      fn.apply(this,args)
      
    },time)
  }
}