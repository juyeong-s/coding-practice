function solve() {
  solution.sort((a, b) => a - b);

  let answer = [];
  let min = 2000000000;
  let left = 0,
    right = solution.length - 1;

  while (left < right) {
    const sum = solution[left] + solution[right];
    const absSum = Math.abs(sum);

    if (absSum < min) {
      min = absSum;
      answer = [solution[left], solution[right]];
    }
    if (!min) break;

    sum > 0 ? right-- : left++;
  }
  return answer.join(" ");
}

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "백준/gold/2470/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const n = +input[0];
const solution = input[1].split(" ").map((el) => +el);
console.log(solve());
