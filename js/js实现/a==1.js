const a = {
  value:1,
  valueOf:function () {
    return this.value++
  }
}
// console.log(a == 1 && a==2 && a==3); //true

let b = 1

Object.defineProperty(window,'b',{
  get(){
    return this.value++
  }
})
console.log(b === 1 && b===2 && b===3); //true