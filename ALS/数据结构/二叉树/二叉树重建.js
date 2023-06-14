//  前序（中左右） 和 中序（左中右）
// preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
var buildTree = function(preorder, inorder) {
  if(inorder.length==0){
      return null;
  }
  let rootVal = preorder.shift()
  let index = inorder.indexOf(rootVal)
  let tree = new TreeNode(rootVal)
  tree.left = buildTree(preorder.slice(0,index),inorder.slice(0,index))
  tree.right = buildTree(preorder.slice(index),inorder.slice(index+1))
  return tree
};

// 中序和后序
var buildTree = function( inorder,aforder) {
  if(inorder.length==0){
      return null;
  }
  let rootVal = aforder.pop()
  let index = inorder.indexOf(item)
  let tree = new TreeNode(rootVal)
  tree.left = buildTree(inorder(inorder.slice(0,index)),aforder.slice(0,index))
  tree.right = buildTree(inorder(inorder.slice(index+1)),aforder.slice(index))
  return tree
};