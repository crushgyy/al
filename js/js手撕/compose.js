// compose 的执行顺序是从右往左
// pipe 从左往右的执行函数

function pipe(...funcs) {
  return (value1) => {
      return funcs.reduce((value, funcN) => funcN(value), value1);
  }
}
function compose(...funcs) {
  return (value1) => {
      return funcs.reduceRight((value, funcN) => funcN(value), value1);
  }
}


const pipe = (...fns) => x => fns.reduce((res,fn) => fn(res),x)
const compose = (...fns) => x => fns.reduceRight((res,fn) => fn(res),x)
// const compose = (...args) => x => args.reduceRight((res, cb) => cb(res), x);
