function getCombination(arr, n) {
  if (n === 1) return arr.map((el) => [el]);
  const result = [];

  arr.forEach((cur, idx, origin) => {
    const rest = origin.slice(idx + 1);
    const combination = getCombination(rest, n - 1);
    const attached = combination.map((el) => [cur, ...el]);
    result.push(...attached);
  });
  return result;
}

function getSpec(team, board) {
  let spec = 0;
  for (let i = 0; i < team.length; i++) {
    const x = team[i];
    for (let j = 0; j < team.length; j++) {
      if (i === j) continue;
      const y = team[j];
      spec += board[x][y];
    }
  }
  return spec;
}

function solve(n, s) {
  let answer = Number.MAX_SAFE_INTEGER;
  const numArr = Array.from({ length: n }, (_, idx) => idx);

  for (let i = 1; i <= Math.ceil(n / 2); i++) {
    const startCombi = getCombination(numArr, i);
    for (const sTeam of startCombi) {
      const lTeam = numArr.filter((el) => !sTeam.includes(el));
      const sSpec = getSpec(sTeam, s);
      const lSpec = getSpec(lTeam, s);
      answer = Math.min(Math.abs(sSpec - lSpec), answer);
    }
  }
  return answer;
}

const filePath = process.platform === "linux" ? "/dev/stdin" : "백준/silver/15661/testcase.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");
const n = +input[0];
const s = input.slice(1).map((el) => el.split(" ").map((n) => +n));
console.log(solve(n, s));
