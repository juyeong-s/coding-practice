function solve() {
  function bfs(w, h, board, visited) {
    const dx = [1, -1, 0, 0, -1, -1, 1, 1]; // 상하좌우 왼위 오위 왼아 오아
    const dy = [0, 0, -1, 1, -1, 1, -1, 1];
    let answer = 0;

    for (let i = 0; i < h; i++) {
      for (let j = 0; j < w; j++) {
        if (!visited[i][j] && board[i][j]) {
          visited[i][j] = true;
          const queue = [[i, j]];

          while (queue.length) {
            const [currX, currY] = queue.shift();
            for (let i = 0; i < 8; i++) {
              const [moveX, moveY] = [currX + dx[i], currY + dy[i]];

              if (
                moveX >= 0 &&
                moveX < h &&
                moveY >= 0 &&
                moveY < w &&
                !visited[moveX][moveY] &&
                board[moveX][moveY]
              ) {
                visited[moveX][moveY] = true;
                queue.push([moveX, moveY]);
              }
            }
          }
          answer++;
        }
      }
    }
    return answer;
  }

  for (let i = 0; i < input.length; ) {
    const [w, h] = input[i];
    if (!w || !h) return;

    const board = input.slice(i + 1, i + h + 1);
    const visited = Array.from({ length: h }, () => Array(w).fill(false));
    console.log(bfs(w, h, board, visited));

    i += h + 1;
  }
  return;
}

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "백준/silver/4963/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((arr) => arr.split(" ").map(Number));
solve();
