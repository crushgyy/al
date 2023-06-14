function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

var preorderTraversal = function(root) {
  let res = []
  let dfs = function (root) {
    if (root) {
      res.push(root.val)
      dfs(root.left)
      dfs(root.right)
    }
  }
  dfs(root)
  return res
};

var preorderTraversal = function(root, res = []) {
  const stack = [];
  if (root) stack.push(root);
  while(stack.length) {
      const node = stack.pop();
      if(!node) {
          res.push(stack.pop().val);
          continue;
      }
      // 反着入栈，正着出栈
      if (node.right) stack.push(node.right); // 右
      if (node.left) stack.push(node.left); // 左
      stack.push(node); // 中
      stack.push(null);
  }; 
  return res;
};


// 层序遍历
var levelOrder = function(root) {
  const res = [],
        stack = [root]
  if (!root) return res
  while (stack.length) {
    let l = stack.length,
        temp = []
    for (let i = 0; i < l; i++) {
      let node = stack.shift()
      temp.push(node.val)
      node.left && stack.push(node.left)
      node.right && stack.push(node.right)
    }
    res.push(temp)
  }
  return res
};





























var preorderTraversal = function(root, res = []) {
  const stack = [];
  if (root) stack.push(root);
  while(stack.length) {
      const node = stack.pop();
      if(!node) {
          res.push(stack.pop().val);
          continue;
      }
      if (node.right) stack.push(node.right); // 右
      if (node.left) stack.push(node.left); // 左
      stack.push(node); // 中
      stack.push(null);
  }; 
  return res;
};