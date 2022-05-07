function solve() {
  let answer = 0;
  let leftPointer = 0;
  function cut(left, right) {
    const result = [c];
    for (let i = left; i < right; i++) result.push(sushi[i % n]);
    return result;
  }

  while (leftPointer < n) {
    const cutSushi = cut(leftPointer, leftPointer + k);
    const setSize = new Set(cutSushi).size;
    answer = Math.max(answer, setSize);
    leftPointer++;
  }
  return answer;
}

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "백준/silver/2531/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [n, d, k, c] = input[0].split(" ").map((el) => +el);
const sushi = input.slice(1).map((el) => +el);
console.log(solve());
