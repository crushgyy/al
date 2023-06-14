// [1,2,7,3,4,9,3,5,4]
// dp[0] = nums[0]
// dp[i]  nums[i] + dp[i-2]  dp[i-1]
// 当最后一位偷时 只需要考虑当前花费 和 dp[i-2]最高偷
// 当最后一位bu偷时 只需要考虑dp[i-1]最高偷
var rob = function(nums) {
  let dp = []
  dp[0] = nums[0]
  dp[1] = Math.max(nums[0],nums[1])
  for (let i = 2 ;i < nums.length ;i++) {
      dp[i] = Math.max(nums[i] + dp[i-2],dp[i-1])   
  }
  return dp[nums.length-1]
};

// 房间首尾相连
var rob1 = function(nums) {
  if(nums.length === 0) return 0
  if(nums.length === 1) return nums[0]
  return Math.max(rob(nums.slice(1)),rob(nums.slice(0,nums.length-1)))
};
// 房子是二叉搜索树
const rob = root => {
  // 后序遍历函数
  const postOrder = node => {
      // 递归出口
      if (!node) return [0, 0];
      // 遍历左子树
      const left = postOrder(node.left);
      // 遍历右子树
      const right = postOrder(node.right);
      // 不偷当前节点，左右子节点都可以偷或不偷，取最大值
      const DoNot = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
      // 偷当前节点，左右子节点只能不偷
      const Do = node.val + left[0] + right[0];
      // [不偷，偷]
      return [DoNot, Do];
  };
  const res = postOrder(root);
  // 返回最大值
  return Math.max(...res);
};