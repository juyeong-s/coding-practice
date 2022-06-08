function solve() {
  let minValue = cost[0];
  let sum = 0n;
  for (let i = 0; i < n - 1; i++) {
    sum += minValue * road[i];
    if (minValue > cost[i + 1]) minValue = cost[i + 1];
  }
  return String(sum);
}

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "백준/silver/13305/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const n = +input[0];
const road = input[1].split(" ").map((num) => BigInt(num));
const cost = input[2].split(" ").map((num) => BigInt(num));
console.log(solve());
