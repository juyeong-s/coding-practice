function solve() {
  function getCombination(arr, n) {
    const result = [];
    if (n === 1) return arr.map((el) => [el]);

    arr.forEach((curr, index, origin) => {
      const rest = origin.slice(index + 1);
      const combination = getCombination(rest, n - 1);
      const attached = combination.map((el) => [...el, curr]);
      result.push(...attached);
    });
    return result;
  }

  function search() {
    for (const [x, y] of teacher) {
      // 왼쪽으로
      for (let i = y - 1; i >= 0; i--) {
        if (map[x][i] === "O") break;
        else if (map[x][i] === "S") return false;
      }

      // 오른쪽으로
      for (let i = y + 1; i < n; i++) {
        if (map[x][i] === "O") break;
        else if (map[x][i] === "S") return false;
      }

      // 위쪽으로
      for (let i = x - 1; i >= 0; i--) {
        if (map[i][y] === "O") break;
        else if (map[i][y] === "S") return false;
      }

      // 아래쪽으로
      for (let i = x + 1; i < n; i++) {
        if (map[i][y] === "O") break;
        else if (map[i][y] === "S") return false;
      }
    }
    return true;
  }

  const teacher = [];
  const empty = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (map[i][j] === "X") empty.push([i, j]);
      else if (map[i][j] === "T") teacher.push([i, j]);
    }
  }

  const combinations = getCombination(empty, 3);

  for (const combination of combinations) {
    for (const [x, y] of combination) map[x][y] = "O";
    if (search()) return "YES";
    for (const [x, y] of combination) map[x][y] = "X";
  }
  return "NO";
}

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "백준/silver/18428/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const n = +input[0];
const map = input.slice(1).map((row) => row.split(" "));
console.log(solve());
