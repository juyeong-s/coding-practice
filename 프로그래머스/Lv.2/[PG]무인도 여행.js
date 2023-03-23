function solution(maps) {
  const result = [];
  const r = maps.length;
  const c = maps[0].length;
  const visited = Array.from({ length: r }, () => Array.from({ length: c }, () => false));

  function isValid(x, y) {
    return x >= 0 && x < r && y >= 0 && y < c;
  }

  function bfs(startX, startY) {
    let sumPeriod = +maps[startX][startY];
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    const queue = [[startX, startY]];

    while (queue.length) {
      const [x, y] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const moveX = x + dx[i];
        const moveY = y + dy[i];

        if (isValid(moveX, moveY) && maps[moveX][moveY] !== "X" && !visited[moveX][moveY]) {
          visited[moveX][moveY] = true;
          queue.push([moveX, moveY]);
          sumPeriod += +maps[moveX][moveY];
        }
      }
    }
    return sumPeriod;
  }

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (maps[i][j] !== "X" && !visited[i][j]) {
        visited[i][j] = true;
        result.push(bfs(i, j));
      }
    }
  }

  const sorted = result.sort((a, b) => a - b);
  return sorted.length ? sorted : [-1];
}

console.log(solution(["X591X", "X1X5X", "X231X", "1XXX1"]));
console.log(solution(["XXX", "XXX", "XXX"]));
