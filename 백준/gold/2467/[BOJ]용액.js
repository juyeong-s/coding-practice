function solve() {
  let answer = [];
  let min = 2000000000;
  let left = 0,
    right = property.length - 1;

  while (left < right) {
    const sum = property[left] + property[right];
    const abs = Math.abs(sum);
    if (abs < min) {
      answer = [property[left], property[right]];
      min = abs;
    }
    if (!min) break;

    sum < 0 ? left++ : right--;
  }
  return answer.join(" ");
}

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "백준/gold/2467/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const n = +input[0];
const property = input[1].split(" ").map((el) => +el);
console.log(solve());
