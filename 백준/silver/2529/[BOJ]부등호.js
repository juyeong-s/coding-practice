function solve1() {
  const used = Array.from({ length: 10 }, () => false);
  function calc(numList) {
    for (let i = 0; i < n; i++) {
      switch (expression[i]) {
        case "<":
          if (numList[i] >= numList[i + 1]) return false;
          break;
        case ">":
          if (numList[i] <= numList[i + 1]) return false;
          break;
      }
    }
    return true;
  }

  let [min, max] = [9876543210, 0];
  function pickNum(numList, cnt) {
    if (cnt > n) {
      if (calc(numList)) {
        const num = numList.join("");
        if (+max < +num) max = num;
        if (+min > +num) min = num;
      }
      return;
    }

    for (let i = 0; i < 10; i++) {
      if (!used[i]) {
        used[i] = true;
        pickNum([...numList, i], cnt + 1);
        used[i] = false;
      }
    }
  }
  pickNum([], 0);
  return [max, min].join("\n");
}

function solve2() {
  const used = Array.from({ length: 10 }, () => false);
  let [min, max] = [9876543210, 0];

  function dfs(cnt, prev, result) {
    if (cnt === n) {
      max = max > result ? max : result;
      min = min < result ? min : result;
      return;
    }

    if (expression[cnt] === "<") {
      for (let i = prev + 1; i < 10; i++) {
        if (!used[i]) {
          used[i] = true;
          dfs(cnt + 1, i, result + i);
          used[i] = false;
        }
      }
    } else {
      for (let i = prev - 1; i >= 0; i--) {
        if (!used[i]) {
          used[i] = true;
          dfs(cnt + 1, i, result + i);
          used[i] = false;
        }
      }
    }
  }

  for (let i = 0; i < 10; i++) {
    used[i] = true;
    dfs(0, i, `${i}`);
    used[i] = false;
  }
  return [max, min].join("\n");
}

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "백준/silver/2529/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const n = +input[0];
const expression = input[1].split(" ");
console.log(solve1());
console.log(solve2());
