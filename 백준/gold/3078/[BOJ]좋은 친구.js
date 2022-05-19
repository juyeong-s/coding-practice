function solve1() {
  let answer = 0;
  const queue = Array.from({ length: 21 }, () => []);

  for (let i = 0; i < n; i++) {
    const len = nameList[i];
    const rank = queue[len];

    while (rank && i - rank[0] > k) {
      queue[len].shift();
    }
    if (rank) answer += rank.length;
    queue[len].push(i);
  }
  return answer;
}

function solve2() {
  let answer = 0;
  const len = Array.from({ length: 21 }, () => 0);
  for (let i = 1; i < k + 1; i++) {
    len[nameList[i]]++;
  }
  answer += len[nameList[0]];

  for (let i = 1; i < n; i++) {
    if (len[nameList[i]]) len[nameList[i]]--;
    if (nameList[i + k]) len[nameList[i + k]]++;
    answer += len[nameList[i]];
  }
  return answer;
}

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "백준/gold/3078/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [n, k] = input[0].split(" ").map((el) => +el);
const nameList = input.slice(1).map((el) => el.length);
console.log(solve1());
console.log(solve2());
