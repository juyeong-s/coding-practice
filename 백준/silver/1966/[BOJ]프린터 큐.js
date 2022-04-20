function solve(m, queue) {
  let count = 0;
  while (queue.length) {
    const [num, idx] = queue.shift();

    if (queue.some((el) => el[0] > num)) {
      queue.push([num, idx]);
    } else {
      count++;
      if (idx === m) {
        console.log(count);
        break;
      }
    }
  }
}

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "백준/silver/1966/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.split(" ").map((el) => +el));
const t = input[0];
for (let i = 1; i <= t * 2; i += 2) {
  const [n, m] = input[i];
  const queue = input[i + 1].map((num, index) => [num, index]);
  solve(m, queue);
}
