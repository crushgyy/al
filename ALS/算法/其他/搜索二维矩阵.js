var searchMatrix = function(matrix, target) {
  let m = 0,
      n = matrix[0].length-1,
      row = matrix.length,
      col = matrix[0].length
  let curTar = matrix[m][n]
  while (m < row && n >= 0) {
    curTar = matrix[m][n]
    if (curTar === target) {
      return true
    } else if (curTar < target) {
      m++
    } else {
      n--
    }
  }
  return false
};
searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]],5)