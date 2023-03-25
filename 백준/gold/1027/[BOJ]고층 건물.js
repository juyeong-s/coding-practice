function getSlope(x1, y1, x2, y2) {
  return (y2 - y1) / (x2 - x1);
}

function solve(n, heights) {
  let answer = 0;

  function searchLeft(startIdx, height) {
    let viewCnt = 0;
    let leftMax = Infinity;

    for (let j = startIdx - 1; j >= 0; j--) {
      const slope = getSlope(startIdx, height, j, heights[j]);
      if (slope < leftMax) {
        leftMax = slope;
        viewCnt++;
      }
    }
    return viewCnt;
  }

  function searchRight(startIdx, height) {
    let viewCnt = 0;
    let rightMax = -Infinity;

    for (let j = startIdx + 1; j < n; j++) {
      const slope = getSlope(startIdx, height, j, heights[j]);
      if (slope > rightMax) {
        rightMax = slope;
        viewCnt++;
      }
    }
    return viewCnt;
  }

  for (let i = 0; i < n; i++) {
    const height = heights[i];
    const viewCnt = searchLeft(i, height) + searchRight(i, height);
    answer = Math.max(answer, viewCnt);
  }
  return answer;
}

const filePath = process.platform === "linux" ? "/dev/stdin" : "백준/gold/1027/testcase.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const n = +input[0];
const heights = input[1].split(" ").map((el) => +el);
console.log(solve(n, heights));
