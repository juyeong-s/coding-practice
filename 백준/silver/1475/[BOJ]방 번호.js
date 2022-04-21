function solve() {
  const set = Array.from({ length: 10 }, () => 0);

  for (const num of room) {
    if (num === 6 || num === 9) {
      if (set[6] < set[9]) {
        set[6] += 1;
      } else {
        set[9] += 1;
      }
      continue;
    }
    set[num] += 1;
  }
  return Math.max(...set);
}

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "백준/silver/1475/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.split("").map((el) => +el));
const room = input[0];
console.log(solve());
