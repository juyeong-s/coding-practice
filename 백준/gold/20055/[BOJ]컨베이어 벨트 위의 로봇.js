function solve() {
  const robot = Array.from({ length: 2 * n }, () => false);

  function rotate() {
    durability.unshift(durability.pop());
    robot.unshift(robot.pop());
    robot[n - 1] = false;
  }

  function move() {
    for (let i = n - 2; i >= 0; i--) {
      if (!robot[i + 1] && durability[i + 1] && robot[i]) {
        robot[i] = false;
        robot[i + 1] = true;
        durability[i + 1]--;
      }
    }
    robot[n - 1] = false;
  }

  function putRobot() {
    if (durability[0]) {
      robot[0] = true;
      durability[0]--;
    }
  }

  let step = 0;
  while (durability.filter((a) => !a).length < k) {
    rotate();
    move();
    putRobot();
    step++;
  }
  return step;
}

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "백준/gold/20055/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [n, k] = input[0].split(" ").map((num) => +num);
const durability = input[1].split(" ").map((num) => +num);
console.log(solve());
