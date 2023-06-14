function g(root,p,q) {
  
  let dfs = function (root,p,q) {
    if (!root || root === p || root === q) {
      return root
    }
    let left = dfs(root.left,p,q)
    let right = dfs(root.right,p,q)
    if (left && right) {
      return root
    } else if (!left) {
      return right
    } else {
      return left
    }
  }
  return dfs(root,p,q)
}