// reduce 接收两个参数：
// 第一个参数是在每一项上调用的函数
// 该函数接收 4 个参数：
// 前一个值 prev
// 当前值 cur
// 项的索引 index
// 数组对象 array
// 第二个可选参数是作为归并基础的初始值
// reduce 方法返回一个最终的值。
Array.prototype.myReduce = function (fn, initialValue) {
  if (typeof fn !== "function") {
    throw new TypeError(`${fn} is not a function`);
  }
  const array = this
  let acc =  initialValue === 'undefined' ? array[0] : initialValue
  const startIndex = initialValue === 'undefined' ? 0 : 1

  for (let i = startIndex; i < array.length; i++) {
    const cur = array[i]
    acc = fn(acc, cur, i, array)
  }
  return acc
}
// 对每一项执行的函数
// 该函数接收三个参数：
// 数组项的值
// 数组项的下标
// 数组对象本身
// 指定 this 的作用域对象
Array.prototype.fakeFilter = function fakeFilter(fn, context) {
  if (typeof fn !== "function") {
    throw new TypeError(`${fn} is not a function`);
  }
  
  let arr = this;
  let temp = [];

  for (let i = 0; i < arr.length; i++) {
    let result = fn.call(context, arr[i], i, arr);
    if (result) temp.push(arr[i]);
  }
  return temp;
};
// 对每一项执行的函数
// 该函数接收三个参数：
// 数组项的值
// 数组项的下标
// 数组对象本身
// 指定 this 的作用域对象

Array.prototype.fakeMap = function fakeMap(fn, context) {
  if (typeof fn !== "function") {
    throw new TypeError(`${fn} is not a function`);
  }
  
  let arr = this;
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
	// 迭代执行
    let result = fn.call(context, arr[i], i, arr);
    temp.push(result);
  }
  return temp;
};

Array.prototype.grounp = function (cb) {
  if (typeof cb !== 'function') {
    throw Error('not a function')
  }
  let arr = this,
      res = {}
  for (let i = 0; i < arr.length; i++) {
    let result = cb(arr[i],i,arr)
    if (res[result]) {
      res[result].push(arr[i])
    } else {
      res[result] = [arr[i]]
    }
  }
  return res
}