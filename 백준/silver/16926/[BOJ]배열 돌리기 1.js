function solve() {
  function rotate() {
    const check = Math.min(n, m) / 2;

    for (let cnt = 0; cnt < check; cnt++) {
      let n_max = n - cnt - 1;
      let m_max = m - cnt - 1;
      let temp = arr[cnt][cnt];

      for (let j = cnt; j < m_max; j++) arr[cnt][j] = arr[cnt][j + 1]; // right -> left
      for (let j = cnt; j < n_max; j++) arr[j][m_max] = arr[j + 1][m_max]; // bottom -> top
      for (let j = m_max; j > cnt; j--) arr[n_max][j] = arr[n_max][j - 1]; // left -> right
      for (let j = n_max; j > cnt; j--) arr[j][cnt] = arr[j - 1][cnt]; // top -> bottom

      arr[cnt + 1][cnt] = temp;
    }
  }

  for (let i = 0; i < r; i++) rotate();

  arr.forEach((row) => console.log(row.join(" ")));
}

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "백준/silver/16926/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.split(" ").map((num) => +num));
const [n, m, r] = input[0];
const arr = input.slice(1);
solve();
