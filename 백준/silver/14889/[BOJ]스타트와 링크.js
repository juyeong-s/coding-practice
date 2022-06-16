function solve() {
  let answer = 100 * (n / 2);
  const check = Array.from({ length: n }, () => false);

  function dfs(cnt, value) {
    if (cnt === n / 2) {
      let start = 0;
      let link = 0;

      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          if (check[i] === true && check[j] === true) start += ability[i][j];
          if (check[i] === false && check[j] === false) link += ability[i][j];
        }
      }
      answer = Math.min(answer, Math.abs(start - link));
    } else {
      for (let i = value; i < n; i++) {
        check[i] = true;
        dfs(cnt + 1, i + 1);
        check[i] = false;
      }
    }
  }
  dfs(0, 0);
  return answer;
}

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "백준/silver/14889/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const n = +input[0];
const ability = input.slice(1).map((row) => row.split(" ").map((num) => +num));
console.log(solve());
