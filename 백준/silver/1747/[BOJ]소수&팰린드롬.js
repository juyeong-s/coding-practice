function solve() {
  function isPrime(num) {
    if (num === 1) return false;
    if (num === 2) return true;
    for (let i = 2; i < Math.sqrt(num) + 1; i++)
      if (num % i === 0) return false;
    return true;
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
