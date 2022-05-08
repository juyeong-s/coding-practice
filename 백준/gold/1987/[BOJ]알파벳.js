function solve() {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  function isValid(x, y) {
    return x >= 0 && x < r && y >= 0 && y < c;
  }

  let answer = 0;
  const alphabet = Array.from({ length: 26 }, () => false);
  function dfs(x, y, cnt) {
    alphabet[board[x][y]] = true;
    answer = Math.max(answer, cnt);

    for (let i = 0; i < 4; i++) {
      const moveX = x + dx[i];
      const moveY = y + dy[i];

      if (isValid(moveX, moveY) && !alphabet[board[moveX][moveY]]) {
        dfs(moveX, moveY, cnt + 1);
        alphabet[board[moveX][moveY]] = false;
      }
    }
  }
  dfs(0, 0, 1);
  return answer;
}

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "백준/gold/1987/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [r, c] = input[0].split(" ").map((el) => +el);
const board = input.slice(1).map((row) => row.split(""));
console.log(solve());
