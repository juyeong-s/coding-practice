function solve() {
  function searchAdj() {
    switch (d) {
      case 0:
        d = 3;
        if (board[r][c - 1] === 0) {
          c -= 1;
          return true;
        }
        break;
      case 1:
        d = 0;
        if (board[r - 1][c] === 0) {
          r -= 1;
          return true;
        }
        break;
      case 2:
        d = 1;
        if (board[r][c + 1] === 0) {
          c += 1;
          return true;
        }
        break;
      case 3:
        d = 2;
        if (board[r + 1][c] === 0) {
          r += 1;
          return true;
        }
        break;
    }
    return false;
  }

  function checkBackWall() {
    switch (d) {
      case 0:
        if (board[r + 1][c] === 1) return true;
        else r += 1;
        break;
      case 1:
        if (board[r][c - 1] === 1) return true;
        else c -= 1;
        break;
      case 2:
        if (board[r - 1][c] === 1) return true;
        else r -= 1;
        break;
      case 3:
        if (board[r][c + 1] === 1) return true;
        else c += 1;
        break;
    }
    return false;
  }

  while (true) {
    board[r][c] = 2;
    let isAdj = false;
    for (let i = 0; i < 4; i++) {
      if (searchAdj()) {
        isAdj = true;
        break;
      }
    }
    if (isAdj) continue;
    if (checkBackWall()) return board.flat().filter((num) => num === 2).length;
  }
}

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "백준/gold/14503/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.split(" ").map((num) => +num));
let [r, c, d] = input[1];
const board = input.slice(2);
console.log(solve());
