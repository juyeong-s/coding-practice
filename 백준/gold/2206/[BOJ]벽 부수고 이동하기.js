function solve() {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  function isValid(x, y) {
    return x < 0 || x >= n || y < 0 || y >= m;
  }

  const visited = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => Array.from({ length: 2 }, () => 0))
  );
  visited[0][0][0] = 1;

  const queue = [[0, 0, 0]]; // x, y, 벽 부쉈는지
  let currIdx = 0;

  while (queue.length > currIdx) {
    const [x, y, state] = queue[currIdx++];

    if (x === n - 1 && y === m - 1) return visited[x][y][state];

    for (let i = 0; i < 4; i++) {
      const [moveX, moveY] = [x + dx[i], y + dy[i]];

      if (isValid(moveX, moveY) || visited[moveX][moveY][state]) continue;

      if (!map[moveX][moveY] && !visited[moveX][moveY][state]) {
        queue.push([moveX, moveY, state]);
        visited[moveX][moveY][state] = visited[x][y][state] + 1;
      }

      if (map[moveX][moveY] && !state) {
        queue.push([moveX, moveY, state + 1]);
        visited[moveX][moveY][state + 1] = visited[x][y][state] + 1;
      }
    }
  }
  return -1;
}

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "백준/gold/2206/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [n, m] = input[0].split(" ").map((el) => +el);
const map = input.slice(1).map((row) => row.split("").map((el) => +el));
console.log(solve());
