function solve() {
  repair.sort((a, b) => a - b);

  let answer = 1;
  let start = repair[0];

  for (let i = 1; i < n; i++) {
    if (start + l <= repair[i]) {
      answer++;
      start = repair[i];
    }
  }
  return answer;
}

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "백준/silver/1449/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.split(" ").map((num) => +num));
const [n, l] = input[0];
const repair = input[1];
console.log(solve());
