function solve() {
  let start = 1;
  let end = Math.pow(2, 31) - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    const count = lan.reduce((acc, curr) => acc + Math.floor(curr / mid), 0);

    if (count < n) end = mid - 1;
    else start = mid + 1;
  }
  return end;
}

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "백준/silver/1654/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [k, n] = input[0].split(" ").map((num) => parseInt(num));
const lan = input.slice(1).map((num) => parseInt(num));
console.log(solve());
