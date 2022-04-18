function solve() {
  const dx = [-1, 1, 0, 0, 0, 0];
  const dy = [0, 0, -1, 1, 0, 0];
  const dz = [0, 0, 0, 0, -1, 1];

  function isValid(z, x, y) {
    return x >= 0 && x < n && y >= 0 && y < m && z >= 0 && z < h;
  }

  function bfs() {
    let number = 0;

    const queue = [];
    for (let i = 0; i < h; i++) {
      for (let j = 0; j < n; j++) {
        for (let k = 0; k < m; k++) {
          if (tomatoBoard[i][j][k] === "1") {
            queue.push([i, j, k]);
          }
        }
      }
    }

    while (number !== queue.length) {
      const [currZ, currX, currY] = queue[number];

      for (let i = 0; i < 6; i++) {
        const moveZ = currZ + dz[i];
        const moveX = currX + dx[i];
        const moveY = currY + dy[i];

        if (
          isValid(moveZ, moveX, moveY) &&
          tomatoBoard[moveZ][moveX][moveY] === "0"
        ) {
          queue.push([moveZ, moveX, moveY]);
          tomatoBoard[moveZ][moveX][moveY] =
            +tomatoBoard[currZ][currX][currY] + 1 + "";
        }
      }
      number++;
    }
  }

  bfs();

  let answer = 0;
  for (const box of tomatoBoard) {
    for (const row of box) {
      for (const value of row) {
        if (value === "0") return -1;
        answer = Math.max(answer, value);
      }
    }
  }
  return answer === 1 ? 0 : answer - 1;
}

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "백준/gold/7569/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.split(" "));
const [m, n, h] = input[0].map((el) => +el);
const box = input.slice(1);
const tomatoBoard = [];
for (let i = 0; i < n * h; i += n) {
  tomatoBoard.push(box.slice(i, i + n));
}
console.log(solve());
