function solve() {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  function countOne(board) {
    return board.reduce((acc, curr) => acc + curr.filter((el) => el).length, 0);
  }

  function isValid(x, y) {
    return x >= 0 && x < n && y >= 0 && y < m;
  }

  function bfs() {
    const visited = Array.from({ length: n }, () => Array(m).fill(false));
    const queue = [[0, 0]];

    while (queue.length) {
      const [currX, currY] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const [moveX, moveY] = [currX + dx[i], currY + dy[i]];

        if (isValid(moveX, moveY) && !visited[moveX][moveY]) {
          if (cheese[moveX][moveY]) {
            cheese[moveX][moveY] = 0;
          } else {
            queue.push([moveX, moveY]);
          }
          visited[moveX][moveY] = true;
        }
      }
    }
  }

  let time = 0;
  let oneNum = countOne(cheese);

  while (oneNum) {
    bfs();
    time++;

    const checkOneNum = countOne(cheese);
    if (checkOneNum) {
      oneNum = checkOneNum;
    } else {
      console.log(time);
      break;
    }
  }
  console.log(oneNum);
}

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "백준/gold/2636/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [n, m] = input[0].split(" ").map((el) => +el);
const cheese = input.slice(1).map((row) => row.split(" ").map((el) => +el));
solve();
