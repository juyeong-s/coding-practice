function solve() {
  let cnt = 0;
  function dfs(idx, sum) {
    if (idx === n) {
      if (sum === s) cnt++;
      return;
    }
    dfs(idx + 1, sum);
    dfs(idx + 1, sum + sequence[idx]);
  }
  dfs(0, 0);

  return s ? cnt : cnt - 1;
}

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "백준/silver/1182/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [n, s] = input[0].split(" ").map((el) => +el);
const sequence = input[1].split(" ").map((el) => +el);
console.log(solve());
