function solve() {
  function check(checkNum) {
    for (const [num, strike, ball] of question) {
      let sCnt = 0,
        bCnt = 0;

      for (let j = 0; j < 3; j++) {
        for (let k = 0; k < 3; k++) {
          if (j === k && num[j] === checkNum[k]) {
            sCnt++;
          } else if (j !== k && num[j] === checkNum[k]) {
            bCnt++;
          }
        }
      }

      if (sCnt != strike || bCnt != ball) return false;
    }
    return true;
  }

  let answer = 0;
  for (let i = 123; i <= 999; i++) {
    const str = "" + i;
    if (
      str[0] === "0" ||
      str[1] === "0" ||
      str[2] === "0" ||
      str[0] === str[1] ||
      str[0] === str[2] ||
      str[1] === str[2]
    )
      continue;
    if (check(str)) answer++;
  }
  return answer;
}

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "백준/silver/2503/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.split(" "));
const n = input[0];
const question = input.slice(1);
console.log(solve());
