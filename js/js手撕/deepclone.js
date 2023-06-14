// 浅拷贝
// Object.assign  扩展运算符
const obj = {
  name: 'lin'
}
const newObj = Object.assign({}, obj)
// 数组的 slice 和 concat 方法
const arr = ['lin', 'is', 'handsome']
const newArr = arr.slice(0)

const arr2 = ['lin', 'is', 'handsome']
const newArr2 = [].concat(arr)

// 数组静态方法 Array.from
const arr3 = ['lin', 'is', 'handsome']
const newArr3 = Array.from(arr)
// 扩展运算符
const arr4 = ['lin', 'is', 'handsome']
const newArr4 = [...arr]

const obj2 = {
  name: 'lin'
}
const newObj2 = { ...obj }








//深拷贝
// 如果是原始类型，无需继续拷贝，直接返回
// 如果是引用类型，创建一个新的对象，遍历需要克隆的对象，将需要克隆对象的属性执行深拷贝后依次添加到新对象上。
function deepClone(obj){
  let _obj = JSON.stringify(obj),
  objClone = JSON.parse(_obj);
  return objClone
}    
// 这个 Web API 名称叫 structuredClone()，详情可访问 MDN 和最新的 HTML5 规范
const newObj3 = structuredClone(obj)  
//
function clone(target, map = new Map()) {
  if (typeof target === 'object') {
      let cloneTarget = Array.isArray(target) ? [] : {};
      // 检查map中有无克隆过的对象有 - 直接返回没有 - 将当前对象作为key，克隆对象作为value进行存储
      if (map.has(target)) {
        return map.get(target);
      }
      map.set(target, cloneTarget);
      for (const key in target) {
          cloneTarget[key] = clone(target[key], map);
      }
      return cloneTarget;
  } else {
      return target;
  }
};