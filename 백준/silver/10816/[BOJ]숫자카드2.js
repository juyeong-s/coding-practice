function solve() {
  myCard.sort((a, b) => a - b);

  function lowerBound(start, end, target) {
    while (start < end) {
      let mid = Math.floor((start + end) / 2);

      if (myCard[mid] < target) {
        start = mid + 1;
      } else {
        end = mid;
      }
    }
    return end;
  }

  function upperBound(start, end, target) {
    while (start < end) {
      let mid = Math.floor((start + end) / 2);

      if (myCard[mid] <= target) {
        start = mid + 1;
      } else {
        end = mid;
      }
    }
    return end;
  }

  const answer = [];
  for (const target of card) {
    answer.push(upperBound(0, n, target) - lowerBound(0, n, target));
  }
  return answer.join(" ");
}

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "백준/silver/10816/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const n = +input[0];
const myCard = input[1].split(" ").map((el) => +el);
const m = +input[2];
const card = input[3].split(" ").map((el) => +el);
console.log(solve());
