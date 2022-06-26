function solve() {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  function isValid(x, y) {
    return x >= 0 && x < n && y >= 0 && y < n;
  }

  function isCombination(x, y, nx, ny) {
    const diff = Math.abs(map[x][y] - map[nx][ny]);
    return diff >= l && diff <= r;
  }

  function isCombinationStart(x, y) {
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (isValid(nx, ny) && isCombination(x, y, nx, ny)) return true;
    }
    return false;
  }

  function bfs(startX, startY) {
    const queue = [[startX, startY]];
    const totalNum = [[startX, startY]];
    let sum = 0;
    let count = 0;

    while (queue.length) {
      const [x, y] = queue.shift();
      sum += map[x][y];
      count++;

      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (isValid(nx, ny)) {
          if (!visited[nx][ny] && isCombination(x, y, nx, ny)) {
            visited[nx][ny] = true;
            queue.push([nx, ny]);
            totalNum.push([nx, ny]);
          }
        }
      }
    }

    const value = Math.floor(sum / count);
    totalNum.forEach(([x, y]) => {
      map[x][y] = value;
    });
  }

  let answer = 0;
  let visited = Array.from({ length: n }, () => Array(n).fill(false));
  let check = true;

  while (check) {
    check = false;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (!visited[i][j] && isCombinationStart(i, j)) {
          visited[i][j] = true;
          bfs(i, j);
          check = true;
        }
      }
    }

    if (check) answer++;
    visited = Array.from({ length: n }, () => Array(n).fill(false));
  }

  return answer;
}

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "백준/gold/16234/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.split(" ").map((num) => +num));
const [n, l, r] = input[0];
const map = input.slice(1);
console.log(solve());
