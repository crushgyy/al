// 观察者
class Observer {
  constructor(name) {
    // 观察者 name
    this.name = name
  }
  // 触发器
  update() {
    console.log("观察者：", this.name)
  }
}

// 被观察者
class Subject {
  constructor() {
    // 观察者列表
    this._observers = []
  }
  // 获取 观察者列表
  get obsers() {
    return this._observers
  }
  // 添加
  add(obser) {
    this._observers.push(obser)
  }
  // 移除
  remove(obser) {
    this._observers = this._observers.filter((n) => n !== obser)
  }
  // 通知所有观察者
  notify() {
    this._observers.forEach((obser) => obser.update())
  }
}
