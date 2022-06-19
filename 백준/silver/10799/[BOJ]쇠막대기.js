function solve() {
  let cutCnt = 0;
  const stack = [];
  for (let i = 0; i < input.length; i++) {
    const bracket = input[i];
    if (bracket === ")") {
      stack.pop();
      cutCnt += input[i - 1] === ")" ? 1 : stack.length;
      continue;
    }
    stack.push(bracket);
  }
  return cutCnt + stack.length;
}

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "백준/silver/10799/testcase.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("");
console.log(solve());
