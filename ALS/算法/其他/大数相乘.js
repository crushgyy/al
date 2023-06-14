/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  // 特殊情况处理
  if (num1 == "0" || num2 == "0") return "0";
  let arr = [],
      l1 = num1.length-1,
      l2 = num2.length-1,
      add = 0
  while (add || l1 >= 0 || l2 >= 0) {
    let val1 = l1 < 0 ? 1 : num1[l1];
    let val2 = l2 < 0 ? 1 : num2[l2];
    let sum = add + parseInt(val1) * parseInt(val2);
    add = Math.floor(sum / 10);
    arr.unshift(Math.floor(sum % 10))
    l1--
    l2--
  }
  console.log(arr.join())
};

// 大数相加
function sum(str1,str2) {
  let res = [],
      l1 = str1.length-1,
      l2 = str2.length-1,
      add = 0
  if (!l1) return l2
  if (!l2) return l1


  while (l1 >= 0 || l2 >= 0 || add) {
    let val1 = l1 < 0 ? 0 : parseInt(str1[l1]);
    let val2 = l2 < 0 ? 0 : parseInt(str2[l2]);
    let sum  = add + val1 + val2;
    add = sum >= 10 ? 1 : 0;
    res.unshift(sum % 10)
    l1--
    l2--
  }
  return res.join()
}
let st1 = '123414',
    st2 = '123812'
sum(st1,st2)