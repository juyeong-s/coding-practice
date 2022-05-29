function solve() {
  let answer = 0;
  function dfs(depth, currValue, sum, arr) {
    if (depth === n - 1) {
      answer = Math.max(answer, sum);
    }
    for (let i = 0; i < arr.length; i++) {
      dfs(
        depth + 1,
        arr[i],
        sum + Math.abs(currValue - arr[i]),
        arr.filter((num, index) => index !== i)
      );
    }
  }
  for (let i = 0; i < n; i++) {
    dfs(
      0,
      nums[i],
      0,
      nums.filter((num, index) => index !== i)
    );
  }
  return answer;
}

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "백준/silver/10819/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const n = input[0];
const nums = input[1].split(" ").map((el) => +el);
console.log(solve());
