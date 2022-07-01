function solve() {
  let answer = 0;
  let patternCnt = 0;

  for (let i = 0; i < m - 2; i++) {
    if (s[i] === "I" && s[i + 1] === "O" && s[i + 2] === "I") {
      patternCnt++;
      if (patternCnt === n) {
        patternCnt--;
        answer++;
      }
      i++;
    } else patternCnt = 0;
  }
  return answer;
}

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "백준/silver/5525/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const n = +input[0];
const m = +input[1];
const s = input[2];
console.log(solve());
