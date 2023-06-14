function removeElements(head, val) {
  // 删除头部节点
  while (head !== null && head.val === val) {
      head = head.next;
  }
  if (head === null) return head;
  let pre = head, cur = head.next;
  while (cur) {
      if (cur.val === val) {
          pre.next = cur.next;
      } else {
          pre = pre.next;
      }
      cur = cur.next;
  }
  return head;
};

// 删除倒数第N个
var removeNthFromEnd = function(head, n) {
  let slow = head, fast = head;
  // 先让 fast 往后移 n 位
  while(n--) {
      fast = fast.next;
  }

  // 如果 n 和 链表中总结点个数相同，即要删除的是链表头结点时，fast 经过上一步已经到外面了
  if(!fast) {
      return head.next;
  }

  // 然后 快慢指针 一起往后遍历，当 fast 是链表最后一个结点时，此时 slow 下一个就是要删除的结点
  while(fast.next) {
      slow = slow.next;
      fast = fast.next;
  }
  slow.next = slow.next.next;

  return head;
};