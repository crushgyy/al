var diameterOfBinaryTree = function(root) {
  if (!root || (root.left === null && root.right === null)) return 0
  let res = 0
  const dfs = function (root) {
    if (!root) return 0
    let left = dfs(root.left);
    let right = dfs(root.right)
    res = Math.max(res,left+right+1)
    return Math.max(left,right)+1
  }
  dfs(root)
  return res - 1
};