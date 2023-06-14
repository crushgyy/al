
function _curry(fn,...args) {
  return function (...params) {
      let _args = [...args,...params];
      if(_args.length >= fn.length){
          return fn.apply(this,_args);
      }else{
          return _curry.call(this,fn,..._args)
      }
  }
}
let f = function (a,b,c) {
  return a + b + c
}
let t = _curry(f)
console.log(t(2)(3)(5));


