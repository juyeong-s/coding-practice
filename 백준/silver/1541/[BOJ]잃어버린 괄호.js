function solve() {
  let arr = [];
  for (let splited of input.split("-")) {
    let cnt = 0;
    let s = splited.split("+");

    for (const op of s) {
      cnt += +op;
    }
    arr.push(cnt);
  }

  return arr[0] + arr.slice(1).reduce((acc, curr) => acc - curr, 0);
}

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "백준/silver/1541/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")[0];
console.log(solve());
