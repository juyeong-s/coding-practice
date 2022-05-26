function solve(n, ranking) {
  ranking.sort((a, b) => a[0] - b[0]);

  let answer = 1;
  let minRank = ranking[0][1];
  for (let i = 1; i < n; i++) {
    const rank = ranking[i][1];
    if (rank < minRank) {
      minRank = rank;
      answer++;
    }
  }
  return answer;
}

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "백준/silver/1946/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
for (let i = 1; i < input.length; ) {
  const n = +input[i];
  console.log(
    solve(
      n,
      input
        .slice(i + 1, i + 1 + n)
        .map((rank) => rank.split(" ").map((num) => +num))
    )
  );
  i += n + 1;
}
