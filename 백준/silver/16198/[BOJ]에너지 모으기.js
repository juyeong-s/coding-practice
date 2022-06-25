function solve() {
  let answer = 0;
  function calcEnergyWeight(totalEnergy, marble) {
    const len = marble.length;
    if (len === 2) {
      answer = Math.max(answer, totalEnergy);
      return;
    }

    for (let i = 1; i <= len - 2; i++) {
      calcEnergyWeight(
        totalEnergy + marble[i - 1] * marble[i + 1],
        marble.filter((_, index) => index !== i)
      );
    }
  }

  for (let i = 1; i <= n - 2; i++) {
    calcEnergyWeight(
      marble[i - 1] * marble[i + 1],
      marble.filter((_, index) => index !== i)
    );
  }
  return answer;
}

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "백준/silver/16198/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const n = +input[0];
const marble = input[1].split(" ").map((num) => +num);
console.log(solve());
