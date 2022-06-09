function solve1() {
  const prior = position.map((num, index) => [num, index]);
  prior.sort((a, b) => a[0] - b[0]);

  const result = Array.from({ length: n }, () => 0);
  const [firstNum, firstindex] = prior[0];
  result[firstindex] = 0;
  let prev = firstNum;
  let currRanking = 0;

  for (let i = 1; i < n; i++) {
    const [num, index] = prior[i];
    if (prev === num) result[index] = currRanking;
    else result[index] = ++currRanking;
    prev = num;
  }

  return result.join(" ");
}

function solve2() {
  const set = [...new Set(position)].sort((a, b) => a - b);
  const map = new Map();
  for (let i = 0; i < set.length; i++) {
    map.set(set[i], i);
  }

  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(map.get(position[i]));
  }
  return result.join(" ");
}

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "백준/silver/18870/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const n = parseInt(input[0]);
const position = input[1].split(" ").map((num) => parseInt(num));
console.log(solve1());
console.log(solve2());
