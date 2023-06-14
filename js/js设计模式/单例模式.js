var person = (function () {
  var name = 'zfpx';
  var fn = function () {
      console.log(name)
  };
  var fn2 = function () {
      console.log(name);
  };
  var fn3 = function () {
      fn2();
  };
  return {
      f: fn
  }
})();