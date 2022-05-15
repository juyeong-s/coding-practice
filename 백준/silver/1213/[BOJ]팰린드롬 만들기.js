function solve() {
  const alphaCnt = {};
  for (let i = 0; i < name.length; i++) {
    if (!alphaCnt[name[i]]) alphaCnt[name[i]] = 1;
    else alphaCnt[name[i]] += 1;
  }

  const info = [];
  for (const key in alphaCnt) info.push([key, alphaCnt[key]]);

  let odd = "";
  let even = "";
  for (const [str, cnt] of info) {
    if (cnt % 2 !== 0) odd += str;
    even += str.repeat(Math.floor(cnt / 2));

    if (odd.length > 1) return "I'm Sorry Hansoo";
  }
  return even + odd + even.split("").reverse().join("");
}

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "백준/silver/1213/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const name = input[0].split("").sort();
console.log(solve());
