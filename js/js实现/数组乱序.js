let arr = [1,2,3,4,5,6,7]

let ary = arr.sort(() => Math.random() < 0.5 ? -1 : 1)
console.log(ary);