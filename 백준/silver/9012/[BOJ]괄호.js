function solve1(ps) {
  if (ps[0] === ")") return "NO";
  const stack = [];

  for (const str of ps) {
    if (str === "(") stack.push(str);
    else {
      if (!stack.length) return "NO";
      stack.pop();
    }
  }
  return stack.length ? "NO" : "YES";
}

function solve2(ps) {
  if (ps[0] === ")") return "NO";

  const len = ps.length;
  for (let i = 0; i < len / 2; i++) {
    ps = ps.replaceAll("()", "");
    if (!ps.length) return "YES";
  }
  return "NO";
}

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "백준/silver/9012/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const t = +input[0];
for (let i = 1; i <= t; i++) {
  console.log(solve1(input[i]));
  console.log(solve2(input[i]));
}
