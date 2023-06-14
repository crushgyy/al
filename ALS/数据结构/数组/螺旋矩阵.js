// 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
var spiralOrder = function (matrix) {
  if (matrix.length == 0) return []
  const res = []
  let top = 0, 
      bottom = matrix.length - 1, 
      left = 0, 
      right = matrix[0].length - 1
  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) res.push(matrix[top][i])
    top++
    for (let i = top; i <= bottom; i++) res.push(matrix[i][right])
    right--
    if (top > bottom || left > right) break
    for (let i = right; i >= left; i--) res.push(matrix[bottom][i])
    bottom--
    for (let i = bottom; i >= top; i--) res.push(matrix[i][left])
    left++
  }
  return res
};

// 2 给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。
var generateMatrix = function(n) {
  let l = 0, 
  r = n - 1, 
  t = 0, 
  b = n - 1;
  let mat = Array.from(Array(n),() => Array(n).fill(0)),
  num = 1,
  tar = n * n
  while(num <= tar){
    for(let i = l; i <= r; i++) mat[t][i] = num++; // left to right.
    t++;
    for(let i = t; i <= b; i++) mat[i][r] = num++; // top to bottom.
    r--;
    for(let i = r; i >= l; i--) mat[b][i] = num++; // right to left.
    b--;
    for(let i = b; i >= t; i--) mat[i][l] = num++; // bottom to top.
    l++;
  }
  return mat;
};