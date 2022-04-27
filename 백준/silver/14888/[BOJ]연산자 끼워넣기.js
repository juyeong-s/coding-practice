function solve() {
  let maxAnswer = -1000000001,
    minAnswer = 1000000001;

  function insert(plus, minus, muti, div, cnt, sum) {
    if (cnt === n) {
      if (maxAnswer < sum) maxAnswer = sum;
      if (minAnswer > sum) minAnswer = sum;
    }

    if (plus > 0) {
      insert(plus - 1, minus, muti, div, cnt + 1, sum + numList[cnt]);
    }
    if (minus > 0) {
      insert(plus, minus - 1, muti, div, cnt + 1, sum - numList[cnt]);
    }
    if (muti > 0) {
      insert(plus, minus, muti - 1, div, cnt + 1, sum * numList[cnt]);
    }
    if (div > 0) {
      insert(
        plus,
        minus,
        muti,
        div - 1,
        cnt + 1,
        Math.trunc(sum / numList[cnt])
      );
    }
  }

  insert(...opList, 1, numList[0]);
  console.log(`${maxAnswer}\n${minAnswer}`);
}

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "백준/silver/14888/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const n = +input[0];
const numList = input[1].split(" ").map((el) => +el);
const opList = input[2].split(" ").map((el) => +el);
solve();
