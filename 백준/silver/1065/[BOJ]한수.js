function solve() {
  let cnt = 1;
  for (let i = 2; i <= +n; i++) {
    const str = i + "";
    if (str.length > 2) {
      const interval = +str[1] - +str[0];

      let state = true;
      for (let j = 1; j < str.length - 1; j++) {
        if (+str[j + 1] - +str[j] !== interval) {
          state = false;
          break;
        }
      }
      if (state) cnt++;
    } else cnt++;
  }
  return cnt;
}

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "백준/silver/1065/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const n = input[0];
console.log(solve());
