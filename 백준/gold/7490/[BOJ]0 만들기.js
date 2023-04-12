function solve(cnt, Ns) {
  const operator = [" ", "+", "-"];
  let answer = "";

  const compositeByPrevOp = (prevOp, prevNum, sum) =>
    prevOp === "+" ? sum + +prevNum : sum - +prevNum;

  const calc = (n, opStr) => {
    let sum = 0;
    let prevOp = "+";
    let prevNum = "1";

    for (let i = 1; i < n; i++) {
      const op = opStr[i - 1];

      if (op === "+") {
        if (opStr[i] !== " ") {
          if (prevNum) sum = compositeByPrevOp(prevOp, prevNum, sum);
          sum += i;
          prevNum = "";
        } else {
          if (prevNum) {
            sum = compositeByPrevOp(prevOp, prevNum, sum);
            prevNum = "";
          }
          prevNum += i;
          prevOp = "+";
        }
      } else if (op === "-") {
        if (opStr[i] !== " ") {
          if (prevNum) sum = compositeByPrevOp(prevOp, prevNum, sum);
          sum -= i;
          prevNum = "";
        } else {
          if (prevNum) {
            sum = compositeByPrevOp(prevOp, prevNum, sum);
            prevNum = "";
          }
          prevNum += i;
          prevOp = "-";
        }
      } else if (i !== 1 && op === " ") {
        if (opStr[i] !== " ") {
          prevOp === "+" ? (sum += +(prevNum + i)) : (sum -= +(prevNum + i));
          prevNum = "";
          prevOp = "";
        } else {
          prevNum += i;
        }
      }
    }

    if (opStr[n - 1] === " ") {
      const last = +(prevNum + n);
      sum = prevOp === "+" ? sum + last : sum - last;
    } else {
      sum = opStr[n - 1] === "+" ? sum + n : sum - n;
    }
    return sum;
  };

  const attach = (n, opStr) => {
    let result = "";
    for (let i = 1; i <= n; i++) {
      result += `${i}${opStr[i] || ""}`;
    }
    return result;
  };

  const addOp = (n, opStr) => {
    if (opStr.length >= n) {
      if (calc(n, opStr) === 0) answer += attach(n, opStr) + "\n";
      return;
    }

    for (let i = 0; i < 3; i++) {
      addOp(n, opStr + operator[i]);
    }
  };

  for (let i = 0; i < cnt; i++) {
    for (let j = 0; j < 3; j++) {
      addOp(Ns[i], " " + operator[j]);
    }
    if (i !== cnt - 1) answer += "\n";
  }

  return answer;
}

const filePath = process.platform === "linux" ? "/dev/stdin" : "백준/gold/7490/testcase.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");
const cnt = +input[0];
const Ns = input.slice(1).map((el) => +el);
console.log(solve(cnt, Ns));
