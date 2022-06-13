function solve() {
  let sum = 0;
  let temp = 1;
  let prev = "";
  const stack = [];

  for (const bracket of brackets) {
    if (bracket === "(") {
      stack.push("(");
      temp *= 2;
      prev = "(";
    } else if (bracket === "[") {
      stack.push("[");
      temp *= 3;
      prev = "[";
    } else if (bracket === ")") {
      if (!stack.length || stack[stack.length - 1] !== "(") return 0;

      if (prev === "(") sum += temp;
      temp /= 2;
      stack.pop();
      prev = ")";
    } else if (bracket === "]") {
      if (!stack.length || stack[stack.length - 1] !== "[") return 0;

      if (prev === "[") sum += temp;
      temp /= 3;
      stack.pop();
      prev = "]";
    }
  }

  return stack.length ? 0 : sum;
}

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "백준/silver/2504/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const n = input.length;
const brackets = input[0];
console.log(solve());
