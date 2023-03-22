function solve(r, c, table) {
  let count = 0;
  let start = 0;
  let end = r - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let isOK = true;
    let distinctStr = {};

    for (let i = 0; i < c; i++) {
      let temp = "";

      for (let j = mid; j < r; j++) {
        temp += table[j][i];
      }

      if (!distinctStr[temp]) {
        distinctStr[temp] = 1;
      } else {
        isOK = false;
        break;
      }
    }

    if (isOK) {
      count = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return count;
}

const filePath = process.platform === "linux" ? "/dev/stdin" : "백준/gold/2866/testcase.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");
const [r, c] = input[0].split(" ").map((el) => +el);
const table = input.slice(1);
console.log(solve(r, c, table));
