Promise.MyAll = function (promises) {
  let arr = [],
  count = 0
  return new Promise((resolve, reject) => {
    promises.forEach((item, i) => {
      Promise.resolve(item).then(res => {
        arr[i] = res
        count += 1
        if (count === promises.length) resolve(arr)
      }, reject)
    })
  })
}

Promise.MyAllSettled = function (promises) {
  let arr = [],
    count = 0
  return new Promise((resolve, reject) => {
    promises.forEach((item, i) => {
      Promise.resolve(item).then(res => {
        arr[i] = res
        count += 1
        if (count === promises.length) resolve(arr)
      }, (err) => {
        arr[i] = err
        count += 1
        if (count === promises.length) resolve(arr)
      })
    })
  })
}
// 一个待定的 Promise 只要给定的迭代中的一个promise解决或拒绝，
// 就采用第一个promise的值作为它的返回值，从而异步地解析或拒绝（一旦堆栈为空）。
Promise.MyRace = function(promises) {
  return new MyPromise((resolve, reject) => {
      promises.forEach(promise => {
            promise.then(res => {
                resolve(res)
            }, err => {
                reject(err)
            })
      })
  })
}
/**
* @description: 加入失败后使用失败重试功能，如果5次中有任意一次成功了，就停止尝试并返回
* @param  {*}
* @return {*}
* @param {*} fn 绑定函数
* @param {*} times 请求次数
* @param {*} delay 延迟时间
*/
Promise.prototype.retry = function(fn,times,delay){
   let tryTimes = 0
   return new Promise((resolve,reject)=>{
       function attempt(){
           Promise.resolve(fn()).then(res=>{
               return resolve(res)
           }).catch(err=>{
               if(++tryTimes<times){
                  setTimeout(attempt,delay)
                  // attempt()
               }else{
                   return reject(err)
               }
           })
       }
       attempt()
   })
}

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
// promise delay/sleep
function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time))
}


class Promise{
  constructor(executor){
    // 初始化state为等待态
    this.state = 'pending';
    // 成功的值
    this.value = undefined;
    // 失败的原因
    this.reason = undefined;
    let resolve = value => {
      // state改变,resolve调用就会失败
      if (this.state === 'pending') {
        // resolve调用后，state转化为成功态
        this.state = 'fulfilled';
        // 储存成功的值
        this.value = value;
      }
    };
    let reject = reason => {
      // state改变,reject调用就会失败
      if (this.state === 'pending') {
        // reject调用后，state转化为失败态
        this.state = 'rejected';
        // 储存失败的原因
        this.reason = reason;
      }
    };
    // 如果executor执行报错，直接执行reject
    try{
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }
}

