function solve() {
  function rotateWheel(num, dir) {
    if (dir === -1) {
      const first = gear[num][0];
      for (let i = 0; i < 7; i++) gear[num][i] = gear[num][i + 1];
      gear[num][7] = first;
    } else {
      const last = gear[num][7];
      for (let i = 7; i > 0; i--) gear[num][i] = gear[num][i - 1];
      gear[num][0] = last;
    }
  }

  function rotateLeft(num, dir) {
    let currD = dir;
    let prevState = gear[num].map((num) => num);

    for (let i = num - 1; i >= 0; i--) {
      if (prevState[6] === gear[i][2]) break;

      currD = currD * -1;
      prevState = gear[i].map((num) => num);
      rotateWheel(i, currD);
    }
  }

  function rotateRight(num, dir) {
    let currD = dir;
    let prevState = gear[num].map((num) => num);

    for (let i = num + 1; i < 4; i++) {
      if (prevState[2] === gear[i][6]) break;

      currD = currD * -1;
      prevState = gear[i].map((num) => num);
      rotateWheel(i, currD);
    }
  }

  for (const [gearNum, dir] of rotate) {
    if (gearNum - 1 > 0) rotateLeft(gearNum - 1, dir);
    if (gearNum - 1 < 3) rotateRight(gearNum - 1, dir);
    rotateWheel(gearNum - 1, dir);
  }

  return gear.reduce(
    (acc, curr, index) => (curr[0] ? acc + Math.pow(2, index) : acc),
    0
  );
}

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "백준/gold/14891/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const gear = input.slice(0, 4).map((row) => row.split("").map((pole) => +pole));
const rotate = input.slice(5).map((row) => row.split(" ").map((num) => +num));
console.log(solve());
