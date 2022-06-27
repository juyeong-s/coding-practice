function solve1() {
  const enterCar = new Map();
  tunnelIn.forEach((car, i) => {
    enterCar.set(car, i);
  });

  const exitCar = new Map();
  tunnelOut.forEach((car, i) => {
    exitCar.set(car, enterCar.get(car));
  });

  let count = 0;
  for (const [carNum, order] of exitCar) {
    const [firstValue] = enterCar.values();
    if (order > firstValue) count++;
    enterCar.delete(carNum);
  }
  return count;
}

function solve2() {
  const enterCar = new Map();
  for (let i = 0; i < n; i++) enterCar.set(tunnelIn[i], tunnelIn.slice(0, i));

  const exitCar = new Map();
  for (let i = 0; i < n; i++) exitCar[tunnelOut[i]] = tunnelOut.slice(0, i);

  let count = 0;
  for (const carNum in enterCar) {
    for (const frontNum of enterCar[carNum]) {
      if (!exitCar[carNum].includes(frontNum)) {
        count++;
        break;
      }
    }
  }
  return count;
}

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "백준/silver/2002/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const n = +input[0];
const tunnelIn = input.slice(1, n + 1);
const tunnelOut = input.slice(n + 1, 2 * n + 1);
console.log(solve1());
