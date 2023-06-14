var solveNQueens = function(n) {
  function isValid(row, col, chessBoard, n) {
    // 列查询
      for(let i = 0; i < row; i++) {
          if(chessBoard[i][col] === 'Q') {
              return false
          }
      }
      // 因为在单层搜索的过程中，每一层递归，只会选for循环（也就是同一行）里的一个元素，所以不用去重了。
      
      // 斜角查询
      for(let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
          if(chessBoard[i][j] === 'Q') {
              return false
          }
      }
      // 斜角查询
      for(let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
          if(chessBoard[i][j] === 'Q') {
              return false
          }
      }
      return true
  }

  function transformChessBoard(chessBoard) {
      return chessBoard.map(item => item.join())
  }

  let result = []
  function backtracing(row,chessBoard) {
      if(row === n) {
          result.push(transformChessBoard(chessBoard))
          return
      }
      for(let col = 0; col < n; col++) {
          if(isValid(row, col, chessBoard, n)) {
              chessBoard[row][col] = 'Q'
              backtracing(row + 1,chessBoard)
              chessBoard[row][col] = '.'
          }
      }
  }
  let chessBoard = new Array(n).fill([]).map(() => new Array(n).fill('.'))
  backtracing(0,chessBoard)
  return result
};