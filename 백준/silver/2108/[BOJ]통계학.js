function solve() {
  nums.sort((a, b) => a - b);
  const avg = Math.round(nums.reduce((acc, curr) => acc + curr, 0) / n);
  const mid = nums[Math.floor(n / 2)];

  const modeObj = nums.reduce((acc, cur) => {
    acc.hasOwnProperty(cur) ? (acc[cur] += 1) : (acc[cur] = 1);
    return acc;
  }, {});
  const modeArr = [];
  const maxNum = Math.max.apply(null, Object.values(modeObj));

  Object.keys(modeObj).forEach((key) => {
    if (modeObj[key] === maxNum) modeArr.push(key);
  });
  modeArr.sort((a, b) => a - b);
  const mode = modeArr.length > 1 ? modeArr[1] : modeArr[0];

  const range = nums[n - 1] - nums[0];

  console.log(`${avg}\n${mid}\n${mode}\n${range}`);
}

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "백준/silver/2108/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const n = +input[0];
const nums = input.slice(1).map((num) => parseInt(num));
solve();
