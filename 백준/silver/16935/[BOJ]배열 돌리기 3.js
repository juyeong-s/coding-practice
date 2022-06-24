function solve() {
  function play1(arr) {
    return arr.reverse();
  }

  function play2(arr) {
    return arr.map((row) => row.reverse());
  }

  function play3(arr) {
    n = arr.length;
    m = arr[0].length;
    const temp = Array.from({ length: m }, () => Array(n));

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) temp[j][n - 1 - i] = arr[i][j];
    }
    return temp;
  }

  function play4(arr) {
    n = arr.length;
    m = arr[0].length;
    const temp = Array.from({ length: m }, () => Array(n));

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) temp[m - 1 - j][i] = arr[i][j];
    }
    return temp;
  }

  function play5(arr) {
    n = arr.length;
    m = arr[0].length;
    const halfN = n / 2;
    const halfM = m / 2;
    const temp = Array.from({ length: n }, () => Array(m));

    // 1 -> 2
    for (let i = 0; i < halfN; i++) {
      for (let j = 0; j < halfM; j++) temp[i][j + halfM] = arr[i][j];
    }
    // 2 -> 3
    for (let i = 0; i < halfN; i++) {
      for (let j = halfM; j < m; j++) temp[i + halfN][j] = arr[i][j];
    }
    // 3 -> 4
    for (let i = halfN; i < n; i++) {
      for (let j = halfM; j < m; j++) temp[i][j - halfM] = arr[i][j];
    }
    // 4 -> 1
    for (let i = halfN; i < n; i++) {
      for (let j = 0; j < halfM; j++) temp[i - halfN][j] = arr[i][j];
    }
    return temp;
  }

  function play6(arr) {
    n = arr.length;
    m = arr[0].length;
    const halfN = n / 2;
    const halfM = m / 2;
    const temp = Array.from({ length: n }, () => Array(m));

    // 1 -> 4
    for (let i = 0; i < halfN; i++) {
      for (let j = 0; j < halfM; j++) temp[i + halfN][j] = arr[i][j];
    }
    // 4 -> 3
    for (let i = halfN; i < n; i++) {
      for (let j = 0; j < halfM; j++) temp[i][j + halfM] = arr[i][j];
    }
    // 3 -> 2
    for (let i = halfN; i < n; i++) {
      for (let j = halfM; j < m; j++) temp[i - halfN][j] = arr[i][j];
    }
    // 2 -> 1
    for (let i = 0; i < halfN; i++) {
      for (let j = halfM; j < m; j++) temp[i][j - halfM] = arr[i][j];
    }
    return temp;
  }

  let answer = arr;
  for (const cmd of command) {
    switch (cmd) {
      case 1:
        answer = play1(answer);
        break;
      case 2:
        answer = play2(answer);
        break;
      case 3:
        answer = play3(answer);
        break;
      case 4:
        answer = play4(answer);
        break;
      case 5:
        answer = play5(answer);
        break;
      case 6:
        answer = play6(answer);
        break;
    }
  }
  answer.forEach((row) => console.log(row.join(" ")));
}

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "백준/silver/16935/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.split(" ").map((num) => +num));
let [n, m, r] = input[0];
let arr = input.slice(1, n + 1);
const command = input[n + 1];
solve();
