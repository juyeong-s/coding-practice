function solve() {
  const dp = Array.from({ length: n + 1 }, () => Array(11).fill(0));

  for (let i = 1; i < 10; i++) {
    dp[1][i] = 1;
  }

  for (let i = 2; i <= n; i++) {
    dp[i][0] = dp[i - 1][1];
    for (let j = 1; j <= 9; j++) {
      dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % 1000000000;
    }
  }
  return dp[n].reduce((acc, curr) => acc + curr, 0) % 1000000000;
}

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "백준/silver/10844/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const n = +input[0];
console.log(solve());
