function solve() {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  function bfs(height, x, y, visited) {
    const queue = [[x, y]];

    while (queue.length) {
      const [currX, currY] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const [moveX, moveY] = [currX + dx[i], currY + dy[i]];

        if (moveX >= 0 && moveX < n && moveY >= 0 && moveY < n) {
          if (!visited[moveX][moveY] && board[moveX][moveY] > height) {
            visited[moveX][moveY] = true;
            queue.push([moveX, moveY]);
          }
        }
      }
    }
  }

  let max = 0;
  for (let i = 0; i <= 100; i++) {
    let answer = 0;
    const visited = Array.from({ length: n }, () => Array(n).fill(false));

    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        if (!visited[j][k] && board[j][k] > i) {
          visited[j][k] = true;
          bfs(i, j, k, visited);
          answer++;
        }
      }
    }
    max = Math.max(max, answer);
  }

  return max;
}

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "백준/silver/2468/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const n = +input[0];
const board = input.slice(1).map((row) => row.split(" ").map((el) => +el));
console.log(solve());
