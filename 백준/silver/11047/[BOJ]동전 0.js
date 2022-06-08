function solve() {
  let count = 0;
  for (let i = n - 1; i >= 0; i--) {
    if (coin[i] <= k) {
      count += Math.floor(k / coin[i]);
      k %= coin[i];
    }
  }
  return count;
}

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "백준/silver/11047/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
let [n, k] = input[0].split(" ").map((num) => +num);
const coin = input.slice(1).map((num) => +num);
console.log(solve());
