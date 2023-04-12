function solution(game_board, table) {
  let answer = 0;
  const n = game_board.length;
  const d = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  const isValid = (x, y) => x >= 0 && x < n && y >= 0 && y < n;

  function rotate(board) {
    const newBoard = [];

    for (let i = 0; i < n; i++) {
      const col = [];
      for (let j = n - 1; j >= 0; j--) {
        col.push(board[j][i]);
      }
      newBoard.push(col);
    }
    return newBoard;
  }

  function searchAdjCoordByBFS(x, y, board, visited, target) {
    const coords = [[x, y]];
    const queue = [[x, y]];

    while (queue.length) {
      const [cx, cy] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const [dx, dy] = d[i];
        const [mx, my] = [cx + dx, cy + dy];

        if (isValid(mx, my) && !visited[mx][my] && board[mx][my] === target) {
          queue.push([mx, my]);
          coords.push([mx, my]);
          visited[mx][my] = true;
        }
      }
    }
    return coords.sort(([aX, aY], [bX, bY]) => aX - bX || aY - bY);
  }

  function convertByDatum(coord) {
    const [decreaseX, decreaseY] = coord[0];
    return coord.map(([x, y]) => [x - decreaseX, y - decreaseY]);
  }

  function getBlocksCoords(board) {
    const blockCoords = [];
    let boardVisited = Array.from({ length: n }, () => new Array(n).fill(false));

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (!board[i][j] || boardVisited[i][j]) continue;

        boardVisited[i][j] = true;
        blockCoords.push(searchAdjCoordByBFS(i, j, board, boardVisited, 1));
      }
    }
    return blockCoords;
  }

  let gameVisited = Array.from({ length: n }, () => new Array(n).fill(false));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (game_board[i][j] || gameVisited[i][j]) continue;
      gameVisited[i][j] = true;

      const emptyCoord = convertByDatum(searchAdjCoordByBFS(i, j, game_board, gameVisited, 0)); // 현재 빈 공간의 좌표값
      const emptyCoordStr = emptyCoord.reduce((acc, [x, y]) => (acc += `${x}${y}`), "");

      for (let k = 0; k < 4; k++) {
        let isMatched = false;
        table = rotate(table);
        const blockCoords = getBlocksCoords(table); // [0, 0]을 기준으로 한 모든 블록 좌표 다 가져옴

        for (const block of blockCoords) {
          const convertBlock = convertByDatum(block);
          const blockCoordStr = convertBlock.reduce((acc, [x, y]) => (acc += `${x}${y}`), "");
          if (emptyCoordStr === blockCoordStr) {
            isMatched = true;
            answer += emptyCoord.length;
            block.forEach(([x, y]) => (table[x][y] = 0));
            break;
          }
        }
        if (isMatched) break;
      }
    }
  }
  return answer;
}
