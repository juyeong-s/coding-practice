function solve() {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  function bfs(board) {
    let answer = 0;
    const visited = Array.from({ length: n }, () => Array(n).fill(false));

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (!visited[i][j]) {
          visited[i][j] = true;
          const queue = [[i, j]];

          while (queue.length) {
            const [currX, currY] = queue.shift();

            for (let i = 0; i < 4; i++) {
              const [moveX, moveY] = [currX + dx[i], currY + dy[i]];
              if (
                moveX >= 0 &&
                moveX < n &&
                moveY >= 0 &&
                moveY < n &&
                !visited[moveX][moveY]
              ) {
                if (board[currX][currY] === board[moveX][moveY]) {
                  visited[moveX][moveY] = true;
                  queue.push([moveX, moveY]);
                }
              }
            }
          }
          answer++;
        }
      }
    }

    return answer;
  }

  const originAnswer = bfs(originBoard);
  const weakAnswer = bfs(weakBoard);
  console.log(originAnswer, weakAnswer);
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
solve();
