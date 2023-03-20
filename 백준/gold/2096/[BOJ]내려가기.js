function solve1(n, board) {
  let maxDp = [0, 0, 0];
  let minDp = [0, 0, 0];

  for (let i = 0; i < n; i++) {
    const [max0, max1, max2] = maxDp;
    maxDp = [
      Math.max(max0, max1) + board[i][0],
      Math.max(max0, max1, max2) + board[i][1],
      Math.max(max1, max2) + board[i][2],
    ];

    const [min0, min1, min2] = minDp;
    minDp = [
      Math.min(min0, min1) + board[i][0],
      Math.min(min0, min1, min2) + board[i][1],
      Math.min(min1, min2) + board[i][2],
    ];
  }

  return `${Math.max(...maxDp)} ${Math.min(...minDp)}`;
}

function solve2(n, board) {
  for (let i = 0; i < 3; i++) {
    const cur = board[0][i];
    board[0][i] = [cur, cur];
  }

  for (let i = 1; i < n; i++) {
    const [one, two, three] = board[i];
    const prev = board[i - 1];
    for (let j = 0; j < 3; j++) {
      if (j === 0) {
        board[i][j] = [
          Math.max(one + prev[j][0], one + prev[j + 1][0]),
          Math.min(one + prev[j][1], one + prev[j + 1][1]),
        ];
      } else if (j === 1) {
        board[i][j] = [
          Math.max(two + prev[j - 1][0], two + prev[j][0], two + prev[j + 1][0]),
          Math.min(two + prev[j - 1][1], two + prev[j][1], two + prev[j + 1][1]),
        ];
      } else {
        board[i][j] = [
          Math.max(three + prev[j - 1][0], three + prev[j][0]),
          Math.min(three + prev[j - 1][1], three + prev[j][1]),
        ];
      }
    }
  }

  return board[n - 1]
    .reduce(
      (acc, [max, min]) => {
        if (acc[0] < max) acc[0] = max;
        if (acc[1] > min) acc[1] = min;
        return acc;
      },
      [0, Infinity]
    )
    .join(" ");
}

const filePath = process.platform === "linux" ? "/dev/stdin" : "백준/gold/2096/testcase.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");
const n = +input[0];
const board = input.slice(1).map((row) => row.split(" ").map((el) => +el));

console.log(solve1(n, board));
console.log(solve2(n, board));
