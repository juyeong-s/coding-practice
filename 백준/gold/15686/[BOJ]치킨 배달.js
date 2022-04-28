function solve() {
  const twoIdxList = [],
    oneIdxList = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (city[i][j] === 2) twoIdxList.push([i, j]);
      else if (city[i][j] === 1) oneIdxList.push([i, j]);
    }
  }

  function getCombination(arr, num) {
    const result = [];
    if (num === 1) return arr.map((el) => [el]);

    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1);
      const combination = getCombination(rest, num - 1);
      const attached = combination.map((el) => [fixed, ...el]);
      result.push(...attached);
    });
    return result;
  }

  function getMinDistance(chickenIdx) {
    let sum = 0;
    for (const [oneX, oneY] of oneIdxList) {
      let distance = Infinity;
      for (const [twoX, twoY] of chickenIdx) {
        distance = Math.min(
          distance,
          Math.abs(oneX - twoX) + Math.abs(oneY - twoY)
        );
      }
      sum += distance;
    }
    return sum;
  }

  const combination = getCombination(twoIdxList, m);

  let answer = Infinity;
  for (const indexs of combination) {
    answer = Math.min(answer, getMinDistance(indexs));
  }
  return answer;
}

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "백준/gold/15686/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.split(" ").map((el) => +el));
const [n, m] = input[0];
const city = input.slice(1);
console.log(solve());
