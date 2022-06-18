function solve1() {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const board = Array.from({ length: n }, () => Array(m).fill(true));

  for (const [leftX, leftY, rightX, rightY] of position) {
    for (let i = n - rightY; i < n - leftY; i++) {
      for (let j = leftX; j < rightX; j++) {
        board[i][j] = false;
      }
    }
  }

  function isValid(x, y) {
    return x >= 0 && x < n && y >= 0 && y < m;
  }

  const sizes = [];

  function bfs(x, y) {
    const queue = [[x, y]];
    let size = 1;

    while (queue.length) {
      const [currX, currY] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const moveX = currX + dx[i];
        const moveY = currY + dy[i];
        if (isValid(moveX, moveY) && board[moveX][moveY]) {
          board[moveX][moveY] = false;
          queue.push([moveX, moveY]);
          size++;
        }
      }
    }
    sizes.push(size);
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j]) {
        board[i][j] = false;
        bfs(i, j);
      }
    }
  }

  console.log(`${sizes.length}\n${sizes.sort((a, b) => a - b).join(" ")}`);
}

function solve2() {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const board = Array.from({ length: n }, () => Array(m).fill(true));

  for (const [leftX, leftY, rightX, rightY] of position) {
    for (let i = n - rightY; i < n - leftY; i++) {
      for (let j = leftX; j < rightX; j++) {
        board[i][j] = false;
      }
    }
  }

  function isValid(x, y) {
    return x >= 0 && x < n && y >= 0 && y < m;
  }

  let count = 0;
  function dfs(x, y) {
    if (!isValid(x, y) || !board[x][y]) return;
    board[x][y] = false;
    count++;

    for (let i = 0; i < 4; i++) {
      dfs(x + dx[i], y + dy[i]);
    }
  }

  const sizes = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j]) {
        dfs(i, j);
        sizes.push(count);
        count = 0;
      }
    }
  }

  console.log(`${sizes.length}\n${sizes.sort((a, b) => a - b).join(" ")}`);
}

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "백준/silver/2583/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.split(" ").map((num) => +num));
const [n, m, k] = input[0];
const position = input.slice(1);
solve1();
solve2();
