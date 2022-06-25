function solve() {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const set = new Set();

  function isValid(x, y) {
    return x >= 0 && x < 5 && y >= 0 && y < 5;
  }

  function dfs(x, y, attached) {
    if (attached.length === 6) {
      set.add(attached);
      return;
    }

    for (let i = 0; i < 4; i++) {
      const moveX = x + dx[i];
      const moveY = y + dy[i];
      if (isValid(moveX, moveY)) {
        dfs(moveX, moveY, attached + numMap[moveX][moveY]);
      }
    }
  }

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      dfs(i, j, numMap[i][j]);
    }
  }
  return set.size;
}

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "백준/silver/2210/testcase.txt";
const numMap = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.split(" "));
console.log(solve());
