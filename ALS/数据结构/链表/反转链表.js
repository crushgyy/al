// 双指针法
function reverseList(head){
  let preNode = null,
      curNode = head,
      tempNode;
  while (curNode) {
      tempNode = curNode.next;
      curNode.next = preNode;
      preNode = curNode;
      curNode = tempNode;
  }
  return preNode;
};
