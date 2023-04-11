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

function solve(n, ingredient) {
  let answer = Number.MAX_SAFE_INTEGER;

  for (let i = 1; i <= n; i++) {
    const combi = getCombination(ingredient, i);
    for (const c of combi) {
      const s = c.reduce((acc, cur) => acc * cur[0], 1);
      const b = c.reduce((acc, cur) => acc + cur[1], 0);
      answer = Math.min(Math.abs(s - b), answer);
    }
  }
  return answer;
}

const filePath = process.platform === "linux" ? "/dev/stdin" : "백준/silver/2961/testcase.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");
const n = +input[0];
const ingredient = input.slice(1).map((el) => el.split(" ").map((n) => +n));
console.log(solve(n, ingredient));
