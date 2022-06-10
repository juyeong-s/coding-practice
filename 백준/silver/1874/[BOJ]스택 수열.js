function solve() {
  let result = "";
  const stack = [];
  let currNum = 1;
  for (const targetNum of seq) {
    while (currNum <= targetNum) {
      stack.push(currNum++);
      result += "+\n";
    }
    if (stack.pop() !== targetNum) return "NO";
    result += "-\n";
  }
  return result;
}

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "백준/silver/1874/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const n = +input[0];
const seq = input.slice(1).map((num) => parseInt(num));
console.log(solve());
