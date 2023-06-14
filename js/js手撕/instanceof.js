function new_instance_of(leftVaule, rightVaule) { 
  let rightProto = rightVaule.prototype; // 取右表达式的 prototype 值
  leftVaule = leftVaule.__proto__; // 取左表达式的__proto__值
  while (true) {
      if (leftVaule === null) {
          return false;	
      }
      if (leftVaule === rightProto) {
          return true;	
      } 
      leftVaule = leftVaule.__proto__ 
  }
}


const instanceOf1 = (obj, func) => {
  // 必须是对象或者函数 
  if (!(obj && ['object', 'function'].includes(typeof obj))) {
    return false
  }

  let proto = Object.getPrototypeOf(obj)

  if (proto === func.prototype) {
    return true
  } else if (proto === null) {
    return false
  } else {
    return instanceOf1(proto, func)
  }
}


const instanceOf2 = (obj, func) => {
  // 必须是对象或者函数 
  if (!(obj && ['object', 'function'].includes(typeof obj))) {
    return false
  }

  let proto = obj

  while (proto = Object.getPrototypeOf(proto)) {
    if (proto === func.prototype) {
      return true
    }
  }

  return false
}