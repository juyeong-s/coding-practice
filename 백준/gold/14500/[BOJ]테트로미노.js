function solve() {
  let answer = 0;
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  function isValid(x, y) {
    return x >= 0 && x < n && y >= 0 && y < m;
  }

  const visited = Array.from({ length: n }, () => Array(m).fill(false));

  function dfs(x, y, score, cnt) {
    if (cnt === 4) {
      answer = Math.max(answer, score);
      return;
    }

    for (let i = 0; i < 4; i++) {
      const moveX = x + dx[i];
      const moveY = y + dy[i];

      if (isValid(moveX, moveY) && !visited[moveX][moveY]) {
        /* solution1 */
        // if (cnt === 2) {
        //   visited[moveX][moveY] = true;
        //   dfs(x, y, score + paper[moveX][moveY], cnt + 1);
        //   visited[moveX][moveY] = false;
        // }
        visited[moveX][moveY] = true;
        dfs(moveX, moveY, score + paper[moveX][moveY], cnt + 1);
        visited[moveX][moveY] = false;
      }
    }
  }

  /* solution2 - otherShape */
  const dx2 = [
    [0, 0, 1],
    [0, 0, -1],
    [1, 2, 1],
    [-1, 0, 1],
  ];
  const dy2 = [
    [1, 2, 1],
    [1, 2, 1],
    [0, 0, 1],
    [1, 1, 1],
  ];

  function otherShape(x, y) {
    for (let i = 0; i < 4; i++) {
      let state = true;
      let score = paper[x][y];

      for (let j = 0; j < 3; j++) {
        const moveX = x + dx2[i][j];
        const moveY = y + dy2[i][j];

        if (isValid(moveX, moveY)) {
          score += paper[moveX][moveY];
        } else {
          state = false;
          break;
        }
      }
      if (state) answer = Math.max(answer, score);
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      visited[i][j] = true;
      dfs(i, j, paper[i][j], 1);
      visited[i][j] = false;
      otherShape(i, j);
    }
  }
  return answer;
}

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "백준/gold/14500/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.split(" ").map((el) => +el));
const [n, m] = input[0];
const paper = input.slice(1);
console.log(solve());
