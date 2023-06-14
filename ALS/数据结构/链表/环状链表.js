// 双指针 快慢指针
var hasCycle = function(head) {
  if(head === null) return false
  let slow = head, fast = head
  while(fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) return true
      
  }
  return false
};

var detectCycle = function(head) {
  if (head === null) {
      return null;
  }
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast === slow) {
        let ptr = head;
        while (ptr !== slow) {
            ptr = ptr.next;
            slow = slow.next;
        }
        return ptr;
    }
  }
  return null;
}; 
// 如果有环 返回入环第一个节点
var detectCycle = function(head) {
  const visited = new Set(); // 建立hash表
  while (head) {
      if (visited.has(head)) {
          return head;
      }
      visited.add(head);
      head = head.next;
  }
  return null;
};
