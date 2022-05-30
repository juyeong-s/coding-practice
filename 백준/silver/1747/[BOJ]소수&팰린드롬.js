function solve() {
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  }

  while (true) {
    const str = n + "";
    if (str === str.split("").reverse().join("") && isPrime(n)) {
      return n;
    }
    n++;
  }
}

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "백준/silver/1747/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
let n = +input[0];
console.log(solve());
