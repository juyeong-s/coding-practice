// solution1
function solve1() {
  let count = 0;
  let answer = [0, 0];
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  let visited = Array.from({ length: n }, () => Array(n).fill(false));

  function dfs(x, y, board) {
    for (let i = 0; i < 4; i++) {
      const [moveX, moveY] = [x + dx[i], y + dy[i]];

      if (
        moveX < 0 ||
        moveX >= n ||
        moveY < 0 ||
        moveY >= n ||
        visited[moveX][moveY]
      )
        continue;

      if (board[x][y] === board[moveX][moveY]) {
        visited[moveX][moveY] = true;
        dfs(moveX, moveY, board);
      }
    }
  }

  function find(board) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (!visited[i][j]) {
          visited[i][j] = true;
          dfs(i, j, board);
          count++;
        }
      }
    }
  }

  find(originBoard);
  answer[0] = count;
  count = 0;
  visited = Array.from({ length: n }, () => Array(n).fill(false));

  find(weakBoard);
  answer[1] = count;

  return answer.join(" ");
}

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "백준/gold/10026/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const n = +input[0];
const originBoard = input.slice(1).map((row) => row.split(""));
const weakBoard = originBoard.map((row) =>
  row.map((el) => (el === "G" ? "R" : el))
);
console.log(solve1());
console.log(solve2());


// solution2
function solve2() {
  let count = 0;
  let answer = [0, 0];
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  function dfs(x, y, color, board) {
    if (x < 0 || x >= n || y < 0 || y >= n) return;

    if (board[x][y] === color) {
      board[x][y] = 0;

      for (let i = 0; i < 4; i++) {
        const [moveX, moveY] = [x + dx[i], y + dy[i]];
        dfs(moveX, moveY, color, board);
      }
    }
  }

  function find(board) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        const node = board[i][j];
        if (node) {
          dfs(i, j, node, board);
          count++;
        }
      }
    }
  }

  find(originBoard);
  answer[0] += count;
  count = 0;

  find(weakBoard);
  answer[1] += count;

  return answer.join(" ");
}
