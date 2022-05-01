function solution(board) {
  let answer = Infinity;
  const n = board.length;
  const queue = [[0, 0, 0, 1],[0, 0, 0, 3]];
  const direction = [[-1, 0, 0], [1, 0, 1], [0, -1, 2], [0, 1, 3]];
  const dp = Array.from({ length: 4 }, () =>
    Array.from({ length: n }, () => Array(n).fill(Infinity))
  );

  function isValid(x, y) {
    return x >= 0 && x < n && y >= 0 && y < n;
  }
  
  while (queue.length) {
    const [currX, currY, currPrice, currDirect] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const moveX = currX + direction[i][0];
      const moveY = currY + direction[i][1];
      const moveDirect = direction[i][2];

      if (isValid(moveX, moveY) && board[moveX][moveY] === 0) {
        const price = currPrice + (moveDirect !== currDirect ? 6 : 1);
        if (price < dp[moveDirect][moveX][moveY]) {
          dp[moveDirect][moveX][moveY] = price;

          if (moveX !== n - 1 || moveY !== n - 1)
            queue.push([moveX, moveY, price, moveDirect]);
        }
      }
    }
  }

  for (let i = 0; i < 4; i++) {
    answer = Math.min(answer, dp[i][n - 1][n - 1]);
  }

  return answer * 100;
}
