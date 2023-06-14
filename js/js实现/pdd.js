// a = [1, 2, { a: 2 }]
// b = Object.assign({}, a) //浅拷贝 拷贝一层
// d = Object.assign(a)  //引用地址
// let c=[...a] //浅拷贝 拷贝一层
// a[0] = 2
// a[2]['a'] = 10
// console.log(a, b,c,d)
