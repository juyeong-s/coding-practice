function solve() {
  let answer = "";
  nArr.sort((a, b) => a - b);

  for (const num of mArr) {
    let start = 0;
    let end = n - 1;
    let len = answer.length;
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);

      if (nArr[mid] === num) {
        answer += "1\n";
        break;
      } else if (nArr[mid] > num) end = mid - 1;
      else start = mid + 1;
    }
    if (len === answer.length) answer += "0\n";
  }
  return answer;
}

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "백준/silver/1920/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const n = +input[0];
const nArr = input[1].split(" ").map((num) => parseInt(num));
const m = +input[2];
const mArr = input[3].split(" ").map((num) => parseInt(num));
console.log(solve());
