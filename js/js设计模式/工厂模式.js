function factory(name) {
  var obj = {
      name:name,
      set:function () {
        console.log(this.name);
      },
      get:function () {
        console.log(this.name);
      }
  };
  return obj
}
var obj = factory('zfpx');
var obj2 = factory('zfpx2');
var obj3 = factory('zfpx3');
