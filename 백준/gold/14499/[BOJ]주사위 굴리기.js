function solve() {
  const dice = Array.from({ length: 6 }, () => 0); // 순서대로 아래 0, 앞 1, 위 2, 뒤 3, 왼 4, 오 5

  function isValid(x, y) {
    return x >= 0 && x < n && y >= 0 && y < m;
  }

  function changePosition(cmd) {
    switch (cmd) {
      case 1:
        if (isValid(x, y + 1)) {
          y += 1;
          return true;
        }
        break;
      case 2:
        if (isValid(x, y - 1)) {
          y -= 1;
          return true;
        }
        break;
      case 3:
        if (isValid(x - 1, y)) {
          x -= 1;
          return true;
        }
        break;
      case 4:
        if (isValid(x + 1, y)) {
          x += 1;
          return true;
        }
        break;
      default:
        break;
    }
    return false;
  }

  function moveDice(cmd) {
    const copy = dice.map((num) => num);
    switch (cmd) {
      case 1:
        dice[0] = copy[4];
        dice[2] = copy[5];
        dice[4] = copy[2];
        dice[5] = copy[0];
        break;
      case 2:
        dice[0] = copy[5];
        dice[2] = copy[4];
        dice[4] = copy[0];
        dice[5] = copy[2];
        break;
      case 3:
        dice[0] = copy[3];
        dice[1] = copy[0];
        dice[2] = copy[1];
        dice[3] = copy[2];
        break;
      case 4:
        dice[0] = copy[1];
        dice[1] = copy[2];
        dice[2] = copy[3];
        dice[3] = copy[0];
        break;
      default:
        break;
    }
  }

  function changeDiceBottom() {
    if (map[x][y] === 0) map[x][y] = dice[0];
    else {
      dice[0] = map[x][y];
      map[x][y] = 0;
    }
  }

  for (const cmd of command) {
    if (changePosition(cmd)) {
      moveDice(cmd);
      changeDiceBottom();
      console.log(dice[2]);
    }
  }
}

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "백준/gold/14499/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.split(" ").map((num) => +num));
let [n, m, x, y, k] = input[0];
const map = input.slice(1, n + 1);
const command = input[n + 1];
solve();
