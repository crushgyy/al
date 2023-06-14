// 用队列实现栈
// 队列 后入后出  用push和shift代替
// 栈   后入先出  用pop和push代替
let MyStack = function() {
  this.queue = [];
  this._queue = [];
};

MyStack.prototype.push = function(x) {
  this.queue.push(x);
};

MyStack.prototype.pop = function() {
  // 因为只能shift 所以要清理队列 留下最后一个
  while(this.queue.length > 1){
      this._queue.push(this.queue.shift());
  }
  let ans = this.queue.shift();
  while(this._queue.length){
      this.queue.push(this._queue.shift());
  }
  return ans;
};

MyStack.prototype.top = function() {
  return this.queue.slice(-1)[0];
};

MyStack.prototype.empty = function() {
  return !this.queue.length;
};

// 用栈实现队列
// 队列 后入后出  用push和shift代替
// 栈   后入先出  用pop和push代替
let MyQueue = function() {
  this.stack = [];
  this._stack = [];
};

MyStack.prototype.push = function(x) {
  this.stack.push(x);
};

MyStack.prototype.pop = function() {
  while (this.stack.length > 1) {
    this._stack.push(this.stack.pop())
  }
  let res = this.stack.pop()
  while (this._stack.length) {
    this.stack.push(this._stack.pop())
  }
  return res
};

MyStack.prototype.peek = function() {
  while (this.stack.length) {
    this._stack.push(this.stack.pop())
  }
  let res = this._stack.pop()
  this.stack.push(res)
  while (this._stack.length) {
    this.stack.push(this._stack.pop())
  }
  
  return res
};

MyStack.prototype.empty = function() {
  return !this.stack.length;
};