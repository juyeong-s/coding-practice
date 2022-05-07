function solve(phoneNumList) {
  phoneNumList.sort();

  for (let i = 1; i < phoneNumList.length; i++) {
    const prevNum = phoneNumList[i - 1];
    const currNum = phoneNumList[i];
    if (currNum.startsWith(prevNum)) return "NO";
  }
  return "YES";
}

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "백준/gold/5052/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
for (let i = 1; i < input.length; ) {
  const n = +input[i];
  console.log(solve(input.slice(i + 1, i + 1 + n)));
  i += n + 1;
}
