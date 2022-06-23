function solve() {
  const rotateCnt = Math.floor(n / 2);
  const arrIdx = n - 1;
  const map = Array.from({ length: n }, () => Array(n));
  map[rotateCnt][rotateCnt] = 1;
  let currNum = n * n;

  for (let i = 0; i < rotateCnt; i++) {
    for (let j = 0; j < arrIdx - i * 2; j++) map[i + j][i] = currNum--; // 밑으로
    for (let j = 0; j < arrIdx - i * 2; j++) map[n - i - 1][i + j] = currNum--; // 오른쪽으로
    for (let j = 0; j < arrIdx - i * 2; j++)
      map[n - (i + j) - 1][n - i - 1] = currNum--; // 위로
    for (let j = 0; j < arrIdx - i * 2; j++)
      map[i][n - (i + j) - 1] = currNum--; // 왼쪽으로
  }

  let position = [];
  for (let i = 0; i < n; i++) {
    console.log(map[i].join(" "));
    for (let j = 0; j < n; j++)
      if (targetNum === map[i][j]) position = [i + 1, j + 1];
  }

  console.log(position.join(" "));
}

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "백준/silver/1913/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const n = +input[0];
const targetNum = +input[1];
solve();
