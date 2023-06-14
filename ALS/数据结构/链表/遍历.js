// 要了解链表的数据结构：
// val属性存储当前的值，next属性存储下一个节点的引用。
// 要遍历链表就是不断找到当前节点的next节点，当next节点是null时，说明是最后一个节点，停止遍历。

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head)
{
    const array = [];
    while(head){
        array.push(head.val);
        head = head.next;
    }
    return array;
}
