function solve() {
  console.log((A + B) % C);
  console.log(((A % C) + (B % C)) % C);
  console.log((A * B) % C);
  console.log(((A % C) * (B % C)) % C);
}

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "백준/bronze/10430/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [A, B, C] = input[0].split(" ").map((num) => +num);
solve();
