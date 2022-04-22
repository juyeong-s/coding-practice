function solve() {
  const dx = [0, 1];
  const dy = [1, 0];
  let answer = 1;

  function rowLen(board) {
    for (let i = 0; i < n; i++) {
      let cnt = 1;
      for (let j = 1; j < n; j++) {
        if (board[i][j] === board[i][j - 1]) {
          cnt++;
          answer = Math.max(answer, cnt);
        } else cnt = 1;
      }
      answer = Math.max(answer, cnt);
    }
  }

  function colLen(board) {
    for (let i = 0; i < n; i++) {
      let cnt = 1;
      for (let j = 1; j < n; j++) {
        if (board[j][i] === board[j - 1][i]) {
          cnt++;
          answer = Math.max(answer, cnt);
        } else cnt = 1;
      }
    }
  }

  function isValid(x, y) {
    return x >= 0 && x < n && y >= 0 && y < n;
  }

  function swap(currX, currY, moveX, moveY) {
    const copied = board.map((el) => el.slice());
    const temp = copied[currX][currY];
    copied[currX][currY] = copied[moveX][moveY];
    copied[moveX][moveY] = temp;
    rowLen(copied);
    colLen(copied);
  }

  for (let i = 0; i < n; i++) {
    if (answer === n) return answer;
    for (let j = 0; j < n; j++) {
      if (answer === n) return answer;
      for (let k = 0; k < 2; k++) {
        const moveX = i + dx[k];
        const moveY = j + dy[k];

        if (isValid(moveX, moveY) && board[moveX][moveY] !== board[i][j]) {
          swap(i, j, moveX, moveY);
        }
      }
    }
  }
  return answer;
}

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "백준/silver/3085/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const n = +input[0];
const board = input.slice(1).map((row) => row.split(""));
console.log(solve());
