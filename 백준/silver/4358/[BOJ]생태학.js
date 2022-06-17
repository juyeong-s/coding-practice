function solve1() {
  const len = input.length;
  const obj = {};

  for (const tree of input) {
    if (!obj[tree]) obj[tree] = 1;
    else obj[tree] += 1;
  }

  Object.keys(obj)
    .sort()
    .forEach((tree) => console.log(tree, ((obj[tree] / len) * 100).toFixed(4)));
}

function solve2() {
  input.sort();
  const len = input.length;
  const map = new Map();

  for (const tree of input) {
    if (!map.get(tree)) map.set(tree, 1);
    else map.set(tree, map.get(tree) + 1);
  }

  for (const tree of map.keys()) {
    console.log(tree, ((map.get(tree) / len) * 100).toFixed(4));
  }
}

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "백준/silver/4358/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
solve1();
