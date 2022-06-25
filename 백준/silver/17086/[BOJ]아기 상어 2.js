function solve() {
  const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  const dy = [0, 1, 1, 1, 0, -1, -1, -1];

  function isValid(x, y) {
    return x >= 0 && x < n && y >= 0 && y < m;
  }

  const queue = [];
  function bfs() {
    while (queue.length) {
      const [x, y] = queue.shift();

      for (let move = 0; move < 8; move++) {
        const moveX = x + dx[move];
        const moveY = y + dy[move];

        if (isValid(moveX, moveY) && !space[moveX][moveY]) {
          space[moveX][moveY] = space[x][y] + 1;
          queue.push([moveX, moveY]);
        }
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (space[i][j]) queue.push([i, j]);
    }
  }
  bfs();
  return Math.max(...space.flat()) - 1;
}

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "백준/silver/17086/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.split(" ").map((num) => +num));
const [n, m] = input[0];
const space = input.slice(1);
console.log(solve());
