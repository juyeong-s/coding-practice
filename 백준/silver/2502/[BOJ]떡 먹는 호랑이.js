function solve() {
  const aDp = [1, 0];
  const bDp = [0, 1];

  for (let i = 2; i < d; i++) {
    aDp[i] = aDp[i - 1] + aDp[i - 2];
    bDp[i] = bDp[i - 1] + bDp[i - 2];
  }
  const aCoef = aDp[d - 1];
  const bCoef = bDp[d - 1];

  for (let i = 1; i <= k; i++) {
    const remain = k - aCoef * i;
    if (remain % bCoef === 0) {
      console.log(`${i}\n${remain / bCoef}`);
      break;
    }
  }
}

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "백준/silver/2502/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
let [d, k] = input[0].split(" ").map((el) => +el);
solve();
