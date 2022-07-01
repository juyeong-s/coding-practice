function findBlock(m, n, board) {
  const blockIdxArray = [];

  for (let i = 0; i < m - 1; i++) {
    for (let j = 0; j < n - 1; j++) {
      const currBlock = board[i][j];
      if (
        currBlock &&
        currBlock === board[i + 1][j] &&
        currBlock === board[i][j + 1] &&
        currBlock === board[i + 1][j + 1]
      ) {
        blockIdxArray.push([i, j, i + 1, j + 1]);
      }
    }
  }
  return blockIdxArray;
}

function deleteBlock(blockIdxArray, board) {
  for (const ids of blockIdxArray) {
    const [sx, sy, lx, ly] = ids;
    board[sx][sy] = "";
    board[sx][ly] = "";
    board[lx][sy] = "";
    board[lx][ly] = "";
  }
}

function reorderBlock(m, n, board) {
  while (true) {
    let check = false;

    for (let i = 1; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (!board[i][j] && board[i - 1][j]) {
          board[i][j] = board[i - 1][j];
          board[i - 1][j] = 0;
          if (!check) check = true;
        }
      }
    }
    if (!check) break;
  }
}

function solution(m, n, board) {
  board = board.map((row) => row.split(""));

  while (true) {
    // 블록 찾기
    const blockIdxArray = findBlock(m, n, board);
    if (!blockIdxArray.length) break;
    // 블록 지우기
    deleteBlock(blockIdxArray, board);
    // 블록 내리기
    reorderBlock(m, n, board);
  }

  return board.reduce(
    (acc, curr) => acc + curr.filter((block) => !block).length,
    0
  );
}
