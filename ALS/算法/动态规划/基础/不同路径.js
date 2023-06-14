// dp[i][j] 
// dp[i][j] = dp[i-1][j] + dp[i][j-1]
// dp[0][0] = 0
// dp[1][1] = 1
var uniquePaths = function(m, n) {
  const dp = Array.from(Array(m),() => Array(m).fill(0))
  // 上侧和左侧 都需要初始化
  for (let i = 0; i < m; ++i) {
    dp[i][0] = 1
  }

  for (let i = 0; i < n; ++i) {
      dp[0][i] = 1
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i-1][j] + dp[i][j-1]
    }  
  }
  return dp[m-1][n-1]
};
// 路径2 有障碍物 obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]] 1代表障碍物

var uniquePathsWithObstacles = function(obstacleGrid) {
  let m = obstacleGrid.length
  let n = obstacleGrid[0].length
  const dp = Array(m).fill().map(item => Array(n).fill(0))
  if (obstacleGrid[0][0] || obstacleGrid[m-1][n-1]) {
    return 0
  }
  // 遇到障碍我剩下就不用初始化了
  for (let i = 0; i < m && obstacleGrid[i][0] === 0; ++i) {
    dp[i][0] = 1
  }

  for (let i = 0; i < n && obstacleGrid[0][i] === 0; ++i) {
      dp[0][i] = 1
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
        // 遇到障碍物  路径为0
        dp[i][j] = obstacleGrid[i][j] ? 0 : (dp[i-1][j] + dp[i][j-1])
    }  
  }
  return dp[m-1][n-1]
};