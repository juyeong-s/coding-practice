function solve() {
  atm.sort((a, b) => a - b);
  return atm.reduce((acc, curr, index) => acc + curr * (n - index), 0);
}

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "백준/silver/11399/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const n = +input[0];
const atm = input[1].split(" ").map((num) => +num);
console.log(solve());
