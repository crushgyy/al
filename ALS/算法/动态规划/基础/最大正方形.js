/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  if (!matrix || !matrix.length || !matrix[0].length) {
     return 0
   }
   let m = matrix.length
   let n = matrix[0].length
   let max = 0
   let dp = Array.from(Array(m),() => Array(n).fill(0))
 
   for (let i = 0; i < m; i++) {
     for (let j = 0; j < n; j++) {
       if (matrix[i][j] == '1') {
         if (i == 0 || j == 0) {
           dp[i][j] = 1
         } else {
           dp[i][j] = Math.min(Math.min(dp[i][j-1],dp[i-1][j]),dp[i-1][j-1]) + 1
         }
       } 
       max = Math.max(dp[i][j],max)
     }
   }
   return Math.pow(max,2)
 };