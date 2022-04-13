function solve() {
  const stack = [];
  const answer = Array.from({ length: n }, () => 0);
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && top[i] > top[stack[stack.length - 1]]) {
      const last = stack.pop();
      answer[last] = i + 1;
    }
    stack.push(i);
  }
  return answer.join(" ");
}

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "백준/gold/2493/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const n = +input[0];
const top = input[1].split(" ").map((el) => +el);
console.log(solve());
