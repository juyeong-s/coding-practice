function solve1(r, c, table) {
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

function solve2(r, c, table) {
  const attachedStr = Array.from({ length: c }, () => "");

  for (let i = 0; i < c; i++) {
    for (let j = 1; j < r; j++) {
      attachedStr[i] += table[j][i];
    }
  }

  let start = 0;
  let end = r - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const set = new Set(attachedStr.map((el) => el.slice(mid)));
    set.size === c ? (start = mid + 1) : (end = mid - 1);
  }
  return start;
}

const filePath = process.platform === "linux" ? "/dev/stdin" : "백준/gold/2866/testcase.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");
const [r, c] = input[0].split(" ").map((el) => +el);
const table = input.slice(1);
console.log(solve1(r, c, table));
console.log(solve2(r, c, table));
