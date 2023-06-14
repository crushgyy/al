
// 异步失败 多次重试
function f() {
  return new Promise((resolve,reject) => {
    if (Math.random() > 0.7) {
      resolve('success')
    } else {
      reject('failed')
    }
  })
}
function retry(asyncRequest, times) {
  return asyncRequest().catch((err) => {
    if (--times) {
      return retry(asyncRequest, times);
    } else {
      throw err;
    }
  });
}

retry(f,3).then(console.log).catch(console.log)

// promise 串行
function next(index, arr,successed = 0,failed = 0) {
  if (index >= arr.length) {
    return {
      successed,
      failed
    }
  }
  arr[index]().then(res => {
    next(index++, arr,successed++,failed)
  }).catch(err => {
    next(index++, arr,successed,failed++)
  })
}

next(0, fnarr)
