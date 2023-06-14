function AA() {
  AA.a = function () {
    console.log(1);
  };
  this.a = function () {
    console.log(2);
  };
}
// 外部添加的属性 只作为该函数的属性
AA.a = function () { 
  console.log(3);
};
AA.a(); // 3
AA.prototype.a = function () {
  console.log(4);
};
AA.a(); // 3  
let aa = new AA();
aa.a(); // 2
AA.a(); // 1 /内部添加的可被实例继承
