function Person3() {
  var name2 = 'zfpx';
  this.name = name2;
  this.age = 9;
  this.getName = function () {
      console.log(12)
  }
}
var per = new Person3();
console.log(per); // {name,age}
per.getName();
/*
* per 是Person3（自定义类） 的一个实例
* 是实例的话就能调用 所属类原型上的方法和属性
* */
