
// 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历结果。如果是则返回 true，否则返回 false。
// 假设输入的数组的任意两个数字都互不相同。
/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function (postorder) {
  // 后序遍历顺序：左右根
  // 左子树比根节点小，右子树比根节点大
  if (postorder.length <= 2) return true;
  // 这里用pop的一个好处在于最后面 postorder.slice(i) 不需要考虑根节点就可以拿到右子树了
  const root = postorder.pop();
  let i = 0;
  // 找到左右子树的分界点
  while (postorder[i] < root) {
    i++;
  }
  let rightTree = postorder.slice(i);
  // 右子树当中所有节点都应该大于root
  const rightResult = rightTree.every((item) => item > root);
  //对左右子树递归判断。如果所有的都满足就返回true，否则返回false
  return (
    rightResult &&
    verifyPostorder(postorder.slice(0, i)) &&
    verifyPostorder(rightTree)
  );
};