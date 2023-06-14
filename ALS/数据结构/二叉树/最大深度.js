// 最大深度 
// dfs

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if(!root) return 0
  let max = 0

  const dfs = (root, cLevel) => {
      if(!root.left && !root.right) max = Math.max(max, cLevel)
      root.left && dfs(root.left, cLevel + 1)
      root.right && dfs(root.right, cLevel + 1)
  }
  dfs(root, 1)
  return max 
};
// bfs
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if(!root ) return 0
  const queue = [root]
  let depth = 0
  while(queue.length) {
      const len = queue.length
      depth ++ 
      for(let i = 0; i < len; i ++) {
        // node放在里面是因为 每一层只能算一个深度
          const node = queue.shift()
          node.left && queue.push(node.left)
          node.right && queue.push(node.right)
      }
  }
  return depth
};
// 最小深度
// 递归法：
/**
    * @param {TreeNode} root
    * @return {number}
    */
var minDepth = function(root) {
  if(!root) return 0
  let min = Infinity;

  const dfs = (root, cLevel) => {
      if(!root.left && !root.right) min = Math.min(min, cLevel)
      root.left && dfs(root.left, cLevel + 1)
      root.right && dfs(root.right, cLevel + 1)
  }
  dfs(root, 1)
  return min 
};

// 迭代法：
/**
* @param {TreeNode} root
* @return {number}
*/
var minDepth = function(root) {
  if(!root) return 0;
  const queue = [root];
  let dep = 0;
  while(true) {
      let size = queue.length;
      dep++;
      while(size--){
          const node = queue.shift();
          // 到第一个叶子节点 返回 当前深度 
          if(!node.left && !node.right) return dep;
          node.left && queue.push(node.left);
          node.right && queue.push(node.right);
      }
  }
};
