/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let add = 0,
       list = new ListNode(-1)
  let head = list
  while (add || l1 || l2) {
     let val1 = l1 ? l1.val : 0;
     let val2 = l2 ? l2.val : 0;
     let sum = val1 + val2 + add;
     add = sum >= 10 ? 1 : 0
     head.next = new ListNode(sum % 10)
     head = head.next
     if (l1) l1 = l1.next
     if (l2) l2 = l2.next
   }
   return list.next
};


var addTwoNumbers = function(l1, l2) {
  let addOne = 0 // 进位
  let sum = new ListNode('0') // 创建一个头链表用于保存结果
  let head = sum  // 保存头链表的位置用于最后的链表返回
  while (addOne || l1 || l2) { //在两个链表之中有一个存在的前提下执行下面的逻辑
      let val1 = l1  ? l1.val : 0
      let val2 = l2  ? l2.val : 0
      let r1 = val1 + val2 + addOne //求和
      addOne = r1 >= 10 ? 1 : 0
      sum.next = new ListNode(r1 % 10) //sum的下一个节点
      sum = sum.next  //sum指向下一个节点
      if (l1) l1 = l1.next 
      if (l2) l2 = l2.next 
  }
  return head.next //返回计算结果，之所以用head.next是因为head中保存的第一个节点是刚开始定义的“0”
};
