function solve(bracket) {
  const stack = [];
  for (const str of bracket) {
    if (str === "}" && stack.length && stack[stack.length - 1] === "{")
      stack.pop();
    else stack.push(str);
  }

  let count = 0;
  while (stack.length) {
    if (stack.pop() === stack.pop()) count++;
    else count += 2;
  }
  return count;
}

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "백준/silver/4889/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
for (let i = 0; i < input.length - 1; i++) {
  console.log(`${i + 1}. ${solve(input[i])}`);
}
