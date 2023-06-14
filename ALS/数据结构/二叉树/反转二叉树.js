
// 使用递归版本的前序遍历
var invertTree = function(root) {
  // 终止条件
  if (!root) {
      return null;
  }
  // 交换左右节点
  const rightNode = root.right;
  root.right = invertTree(root.left);
  root.left = invertTree(rightNode);
  return root;
};
// 使用层序遍历： 
var invertTree = function(root) {
  //我们先定义节点交换函数
  const invertNode=function(root,left,right){
      let temp=left;
      left=right;
      right=temp;
      root.left=left;
      root.right=right;
  }
  //使用层序遍历
  let queue=[];
  if(root===null){
      return root;
  } 
  queue.push(root);
  while(queue.length){
      let length=queue.length;
      while(length--){
          let node=queue.shift();
          //节点处理逻辑
          invertNode(node,node.left,node.right);
          node.left&&queue.push(node.left);
          node.right&&queue.push(node.right);
      }
  }
  return root;
};