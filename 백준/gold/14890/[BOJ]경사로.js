function solve1() {
  function isValid(index) {
    return index >= 0 && index < n;
  }

  function searchRow(index) {
    const isBuild = Array.from({ length: n }, () => false);
    let prevHeight = map[index][0];

    for (let c = 0; c < n; c++) {
      if (Math.abs(prevHeight - map[index][c]) > 1) return false;

      if (Math.abs(prevHeight - map[index][c]) === 1) {
        if (map[index][c] < prevHeight) {
          if (isBuild[c]) return false;
          if (!isValid(c + l - 1)) return false;

          const possible = map[index].slice(c, c + l);
          if (possible.every((height) => height === map[index][c])) {
            for (let i = c; i < c + l; i++) {
              if (isBuild[i]) return false;
              isBuild[i] = true;
            }
          } else return false;
        } else if (map[index][c] > prevHeight) {
          if (isBuild[c - 1]) return false;
          if (!isValid(c - l)) return false;

          const possible = map[index].slice(c - l, c);
          if (possible.every((height) => height === prevHeight)) {
            for (let i = c - l; i < c; i++) {
              if (isBuild[i]) return false;
              isBuild[i] = true;
            }
          } else return false;
        }
      }
      prevHeight = map[index][c];
    }
    return true;
  }

  function searchCol(index) {
    const isBuild = Array.from({ length: n }, () => false);
    let prevHeight = map[0][index];

    for (let c = 0; c < n; c++) {
      if (Math.abs(prevHeight - map[c][index]) > 1) return false;

      if (Math.abs(prevHeight - map[c][index]) === 1) {
        if (map[c][index] < prevHeight) {
          if (isBuild[c]) return false;
          if (!isValid(c + l - 1)) return false;

          const possible = map.map((row) => row[index]).slice(c, c + l);

          if (possible.every((height) => height === map[c][index])) {
            for (let i = c; i < c + l; i++) {
              if (isBuild[i]) return false;
              isBuild[i] = true;
            }
          } else return false;
        } else if (map[c][index] > prevHeight) {
          if (isBuild[c - 1]) return false;
          if (!isValid(c - l)) return false;

          const possible = map.map((row) => row[index]).slice(c - l, c);

          if (possible.every((height) => height === prevHeight)) {
            for (let i = c - l; i < c; i++) {
              if (isBuild[i]) return false;
              isBuild[i] = true;
            }
          } else return false;
        }
      }
      prevHeight = map[c][index];
    }
    return true;
  }

  let wayCount = 0;
  for (let i = 0; i < n; i++) {
    if (searchRow(i)) wayCount++;
    if (searchCol(i)) wayCount++;
  }
  return wayCount;
}

function solve2() {
  function isLoad(load) {
    let sameHeightCount = 1;
    for (let i = 0; i < load.length - 1; i++) {
      if (load[i] === load[i + 1]) sameHeightCount++;
      else if (load[i] + 1 === load[i + 1] && sameHeightCount >= l)
        sameHeightCount = 1;
      else if (load[i] - 1 === load[i + 1] && sameHeightCount >= 0)
        sameHeightCount = 1 - l;
      else return false;
    }
    return sameHeightCount >= 0 ? true : false;
  }

  let wayCount = 0;
  for (let i = 0; i < n; i++) {
    if (isLoad(map[i])) wayCount++;
    if (isLoad(map.map((row) => row[i]))) wayCount++;
  }
  return wayCount;
}

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "백준/gold/14890/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.split(" ").map((num) => +num));
const [n, l] = input[0];
const map = input.slice(1);
console.log(solve1());
console.log(solve2());
