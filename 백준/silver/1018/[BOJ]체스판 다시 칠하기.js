function solve() {
  function coloring(board) {
    let countB = 0;
    let countW = 0;

    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 === 0) {
          if (board[i][j] === "B") countW++;
          else countB++;
        } else {
          if (board[i][j] === "B") countB++;
          else countW++;
        }
      }
    }
    return [countB, countW];
  }

  let answer = 64;
  for (let i = 0; i < n - 7; i++) {
    for (let j = 0; j < m - 7; j++) {
      const cutBoard = board.slice(i, i + 8).map((row) => row.slice(j, j + 8));
      answer = Math.min(answer, ...coloring(cutBoard));
    }
  }
  return answer;
}

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "백준/silver/1018/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [n, m] = input[0].split(" ").map((num) => +num);
const board = input.slice(1).map((row) => row.split(""));
console.log(solve());
