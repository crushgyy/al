// 创建了一个空对象obj
// 将这个空对象的__proto__成员指向函数对象prototype成员对象
//将函数对象的this指针替换成obj，然后再调用函数

// 构造器函数
let Parent = function (name, age) {
  this.name = name;
  this.age = age;
};
Parent.prototype.sayName = function () {
  console.log(this.name);
};
//自己定义的new方法
let newMethod = function (Parent, ...rest) {
  // 1.以构造器的prototype属性为原型，创建新对象； 
  let child = Object.create(Parent.prototype);
  // 2.将this和调用参数传给构造器执行
  Parent.apply(child, rest);
  // 3.返回第一步的对象
  return child;
};
//创建实例，将构造函数Parent与形参作为参数传入
const child = newMethod(Parent, 'echo', 26);
child.sayName() //'echo';

//最后检验，与使用new的效果相同
child instanceof Parent//true
child.hasOwnProperty('name')//true
child.hasOwnProperty('age')//true
child.hasOwnProperty('sayName')//false
