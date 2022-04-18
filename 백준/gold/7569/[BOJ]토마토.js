function solve() {
  console.log(m, n, h, tomatoBoard);
  const dx = [-1, 1, 0, 0, 0, 0];
  const dy = [0, 0, -1, 1, 0, 0];
  const dz = [0, 0, 0, 0, -1, 1];

  function checkRipe() {
    for (let i = 0; i < h; i++) {
      for (let j = 0; j < n; j++) {
        for (let k = 0; k < m; k++) {
          if (tomatoBoard[i][j][k] === 0) return false;
        }
      }
    }
    return true;
  }

  function isValid(x, y, z) {
    return x >= 0 && x < n && y >= 0 && y < m && z >= 0 && z < h;
  }

  function bfs() {
    const queue = [];

    for (let i = 0; i < h; i++) {
      for (let j = 0; j < n; j++) {
        for (let k = 0; k < m; k++) {
          if (tomatoBoard[i][j][k] === 1) {
            queue.push([i, j, k]);
          }
        }
      }
    }

    let answer = 0;
    while (queue.length) {
      const len = queue.length;
      answer++;

      for (let i = 0; i < len; i++) {
        const [currZ, currX, currY] = queue.shift();
        for (let j = 0; j < 6; j++) {
          const [moveX, moveY, moveZ] = [
            currX + dx[i],
            currY + dy[i],
            currZ + dz[i],
          ];

          if (
            isValid(moveX, moveY, moveZ) &&
            tomatoBoard[moveZ][moveX][moveY] === 0
          ) {
            queue.push([moveZ, moveX, moveY]);
            tomatoBoard[moveZ][moveX][moveY] = 1;
          }
        }
      }
    }
    return checkRipe() ? answer - 1 : -1;
  }

  return bfs();
}

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "백준/gold/7569/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [m, n, h] = input[0].split(" ").map((el) => +el);
const box = input.slice(1).map((row) => row.split(" ").map((el) => +el));
const tomatoBoard = [];
for (let i = 0; i < n * h; i += n) {
  tomatoBoard.push(box.slice(i, i + n));
}
console.log(solve());
