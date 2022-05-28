function solve(n, tree) {
  tree.sort((a, b) => a - b);
  let maxLen = 0;
  for (let i = 2; i < n; i++) {
    maxLen = Math.max(maxLen, Math.abs(tree[i] - tree[i - 2]));
  }
  return maxLen;
}

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "백준/silver/11497/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
for (let i = 1; i < input.length - 1; ) {
  const n = +input[i];
  const tree = input[i + 1].split(" ").map((el) => +el);
  i += 2;
  console.log(solve(n, tree));
}
