function solve() {
  for (let i = 0; i < m; i++) {
    card.sort((a, b) => a - b);
    const sum = card[0] + card[1];
    card[0] = sum;
    card[1] = sum;
  }
  return card.reduce((acc, curr) => acc + curr, 0);
}

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "백준/silver/15903/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [n, m] = input[0].split(" ").map((el) => parseInt(el, 10));
const card = input[1].split(" ").map((el) => parseInt(el, 10));
console.log(solve());
