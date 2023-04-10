function solution(game_board, table) {
  let answer = 0;
  const n = game_board.length;
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  const isValid = (x, y) => x >= 0 && x < n && y >= 0 && y < n;

  const rotate = (board) => {
    const newBoard = [];

    for (let i = 0; i < n; i++) {
      const col = [];
      for (let j = n - 1; j >= 0; j--) {
        const value = board[j][i];
        col.push(value);
      }
      newBoard.push(col);
    }
    return newBoard;
  };

  function searchAdjCoordByBFS(x, y, board, visited, target) {
    const coords = [[x, y]];
    const queue = [[x, y]];

    while (queue.length) {
      const [curX, curY] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const moveX = curX + dx[i];
        const moveY = curY + dy[i];

        if (isValid(moveX, moveY) && board[moveX][moveY] === target && !visited[moveX][moveY]) {
          queue.push([moveX, moveY]);
          coords.push([moveX, moveY]);
          visited[moveX][moveY] = true;
        }
      }
    }
    return coords.sort(([aX, aY], [bX, bY]) => aX - bX || aY - bY);
  }

  const convertDatum = (coord) => {
    const newCoord = coord.map((el) => el);
    let [decreaseX, decreaseY] = newCoord[0];

    for (let i = 0; i < newCoord.length; i++) {
      const [x, y] = newCoord[i];
      newCoord[i] = [x - decreaseX, y - decreaseY];
    }
    return newCoord;
  };

  const getBlocksCoords = (board) => {
    const blockCoords = [];
    let boardVisited = Array.from({ length: n }, () => Array.from({ length: n }, () => false));

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (!board[i][j] || boardVisited[i][j]) continue;

        // 블록을 만나면
        boardVisited[i][j] = true;
        const coords = searchAdjCoordByBFS(i, j, board, boardVisited, 1);
        blockCoords.push(coords);
      }
    }
    return blockCoords;
  };

  let tableCopy = table.map((row) => row.map((el) => el));
  let gameVisited = Array.from({ length: n }, () => Array.from({ length: n }, () => false));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (game_board[i][j] || gameVisited[i][j]) continue;

      // 빈 공간이면
      gameVisited[i][j] = true;

      let emptyCoord = searchAdjCoordByBFS(i, j, game_board, gameVisited, 0); // 현재 빈 공간의 좌표값
      emptyCoord = convertDatum(emptyCoord);
      const emptyCoordJoin = emptyCoord.reduce((acc, [x, y]) => (acc += `${x}${y}`), "");

      for (let k = 0; k < 4; k++) {
        let isMatched = false;
        tableCopy = rotate(tableCopy);
        const blockCoords = getBlocksCoords(tableCopy); // [0, 0]을 기준으로 한 모든 블록 좌표 다 가져옴

        for (const block of blockCoords) {
          const convertBlock = convertDatum(block);

          const blockJoin = convertBlock.reduce((acc, [x, y]) => (acc += `${x}${y}`), "");
          if (emptyCoordJoin === blockJoin) {
            answer += emptyCoord.length;
            isMatched = true;
            for (const [x, y] of block) tableCopy[x][y] = 0;
            break;
          }
        }
        if (isMatched) break;
      }
    }
  }
  return answer;
}
