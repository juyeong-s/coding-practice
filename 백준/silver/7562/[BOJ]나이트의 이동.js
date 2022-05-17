function solve(n, position) {
  const move = [
    [-2, -1],
    [-2, 1],
    [-1, 2],
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2],
  ];
  const [startX, startY] = position[0];
  const [targetX, targetY] = position[1];

  const board = Array.from({ length: n }, () => Array(n).fill(0));

  function isValid(x, y) {
    return x >= 0 && x < n && y >= 0 && y < n;
  }

  const queue = [[startX, startY]];

  while (queue.length) {
    const [x, y] = queue.shift();
    if (x === targetX && y === targetY) break;

    for (let i = 0; i < 8; i++) {
      const [dx, dy] = [x + move[i][0], y + move[i][1]];

      if (isValid(dx, dy) && !board[dx][dy]) {
        board[dx][dy] = board[x][y] + 1;
        queue.push([dx, dy]);
      }
    }
  }

  return board[targetX][targetY];
}

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "백준/silver/7562/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.split(" ").map((el) => +el));
for (let i = 1; i < input.length; i += 3) {
  const n = input[i][0];
  console.log(solve(n, input.slice(i + 1, i + 3)));
}
