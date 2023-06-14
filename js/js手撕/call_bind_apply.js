// 1.判断当前this是否为函数，防止Function.prototype.myCall() 直接调用
// 2.context 为可选参数，如果不传的话默认上下文为 window
// 3.为context 创建一个 Symbol（保证不会重名）属性，将当前函数赋值给这个属性
// 4.处理参数，传入第一个参数后的其余参数
// 5.调用函数后即删除该Symbol属性

Function.prototype.myCall = function(context,...args){
  if (this === Function.prototype) {
    return undefined // 用于防止 Function.prototype.myCall() 直接调用
  }
  context = context || window;
  const fn = Symbol()
  context[fn] = this
  const result = context[fn](...args)
  delete context[fn]
  return result 
}
Function.prototype.myApply = function(context,args){
  if (this === Function.prototype) {
    return undefined // 用于防止 Function.prototype.myCall() 直接调用
  }
  context = context || window;
  const fn = Symbol()
  context[fn] = this 
  const result = Array.isArray(args) ? context[fn](...args) : context[fn]()
  delete context[fn]
  return result; 
}
Function.prototype.myBind = function(context,...args){
  if (this === Function.prototype) {
    return undefined
  }
  const _this = this;
  return function F(...arcs) {
    // 判断是否用于构造函数
    if (this instanceof F) {
      return new _this(...args,...arcs)
    }
    return _this.apply(context,args.concat(arcs))
  }
}
