function solve() {
  const answer = Array.from({ length: n }, () => 0);

  for (let i = n; i > 0; i--) {
    const leftNum = height[i - 1];
    if (answer[leftNum] > i) answer.splice(leftNum, 0, i);
    else answer[leftNum] = i;
  }
  return answer.filter((el) => el).join(" ");
}

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "백준/silver/1138/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const n = +input[0];
const height = input[1].split(" ").map((el) => +el);
console.log(solve());
