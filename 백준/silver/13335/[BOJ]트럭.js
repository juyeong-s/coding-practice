function solve() {
  const stack = [];
  let time = 0;
  let currWeight = 0;

  for (const weight of truck) {
    while (true) {
      if (stack.length === w) {
        currWeight -= stack.shift();
        continue;
      }
      if (currWeight + weight <= l) {
        stack.push(weight);
        currWeight += weight;
        time++;
        break;
      } else {
        stack.push(0);
        time++;
      }
    }
  }
  return time + w;
}

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "백준/silver/13335/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.split(" ").map((num) => +num));
const [n, w, l] = input[0];
const truck = input[1];
console.log(solve());
