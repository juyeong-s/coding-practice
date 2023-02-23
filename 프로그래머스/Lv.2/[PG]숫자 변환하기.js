function solution(x, y, n) {
  if (x === y) return 0;
  const dp = {};
  dp[x] = 0;
  let calc = [x];

  while (calc.length) {
    const newCalc = [];
    for (const num of calc) {
      for (const newNum of [num + n, num * 2, num * 3]) {
        if (newNum > y || dp[newNum]) continue;
        if (newNum === y) return dp[num] + 1;

        dp[newNum] = dp[num] + 1;
        newCalc.push(newNum);
      }
    }
    calc = newCalc;
  }
  return -1;
}

// function solution(x, y, n) { // 실패한 재귀 코드
//   let result = Infinity;
//   if (x === y) return 0;

//   function calc(num, cnt) {
//     if (num > y) return;

//     if (num === y) {
//       result = Math.min(result, cnt);
//       return;
//     }

//     calc(num + n, cnt + 1);
//     calc(num * 2, cnt + 1);
//     calc(num * 3, cnt + 1);
//   }

//   calc(x, 0);
//   return result === Infinity ? -1 : result;
// }

console.log(solution(10, 40, 5));
console.log(solution(10, 40, 30));
console.log(solution(2, 5, 4));
