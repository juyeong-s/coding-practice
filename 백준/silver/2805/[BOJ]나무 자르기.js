function solve() {
  function isOverflow(mid) {
    let height = 0;
    for (let i = 0; i < n; i++) {
      if (tree[i] > mid) height += tree[i] - mid;
      if (height >= m) return true;
    }
    return false;
  }

  let answer = 0;
  let min = 0;
  let max = 1000000000;
  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    if (isOverflow(mid)) {
      min = mid + 1;
      answer = mid;
    } else max = mid - 1;
  }
  return answer;
}

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "백준/silver/2805/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [n, m] = input[0].split(" ").map((num) => parseInt(num));
const tree = input[1].split(" ").map((num) => parseInt(num));
console.log(solve());
