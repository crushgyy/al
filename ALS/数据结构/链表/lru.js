
var LRUCache = function(capacity) {
  this.map = new Map();
  this.capacity = capacity;
};

LRUCache.prototype.get = function(key) {
  if(this.map.has(key)){
      let value = this.map.get(key);
      this.map.delete(key); // 删除后，再 set ，相当于更新到 map 最后一位
      this.map.set(key, value);
      return value
  } else {
      return -1
  }
};

LRUCache.prototype.put = function(key, value) {
  // 如果已有，那就要更新，即要先删了再进行后面的 set
  if(this.map.has(key)){
      this.map.delete(key);
  }
  this.map.set(key, value);
  // put 后判断是否超载
  if(this.map.size > this.capacity){
      this.map.delete(this.map.keys().next().value);
  }

};
