const NUM = 9;

function solve() {
  let answer = 0;
  let roo = Array.from({ length: 4 }, () => false);
  const order = Array.from({ length: NUM }, () => 0);
  const used = Array.from({ length: NUM }, () => false);
  used[3] = true;

  function move(moveCnt) {
    roo[0] = true;
    let goalCnt = 0;
    let rooIdx = 4;

    while (rooIdx-- > 0) {
      if (roo[rooIdx]) {
        roo[rooIdx] = false;

        if (rooIdx + moveCnt >= 4) {
          goalCnt++;
          continue;
        }
        roo[rooIdx + moveCnt] = true;
      }
    }

    return goalCnt;
  }

  function play() {
    let score = 0;
    let currOrder = 0;

    for (let i = 0; i < n; i++) {
      roo.fill(false);
      let outCount = 0;

      while (outCount < 3) {
        const cmd = inning[i][order[currOrder]];

        switch (cmd) {
          case 0:
            outCount++;
            break;
          case 1:
            score += move(1);
            break;
          case 2:
            score += move(2);
            break;
          case 3:
            score += move(3);
            break;
          case 4:
            score += move(4);
            break;
        }
        currOrder = (currOrder + 1) % NUM;
      }
    }
    answer = Math.max(answer, score);
  }

  function getPermutations(idx) {
    if (idx === NUM) {
      play();
      return;
    }

    for (let i = 0; i < NUM; i++) {
      if (!used[i]) {
        used[i] = true;
        order[i] = idx;
        getPermutations(idx + 1);
        used[i] = false;
      }
    }
  }

  getPermutations(1);

  return answer;
}

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "백준/gold/17281/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const n = +input[0];
const inning = input.slice(1).map((row) => row.split(" ").map((num) => +num));
console.log(solve());
