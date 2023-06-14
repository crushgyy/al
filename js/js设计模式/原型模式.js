

function Person() {
  this.name = 'zhufeng';
  this.age = 9;
}
Person.prototype.getName = function () {
  console.log(this.name);
};

console.log(Person.prototype.constructor === Person);

console.log(Person.prototype.getName());

// var per1 = new Person();
var per1 = new Person; // 当构造函数不需要传参数的时候，后边括号可以省略；
// var per2 = new Person();
// per1 称为  Person 这个类的一个实例； 同时他也是一个对象；
console.log(per1.__proto__ === Person.prototype);
console.log(per1);
per1.getName();
