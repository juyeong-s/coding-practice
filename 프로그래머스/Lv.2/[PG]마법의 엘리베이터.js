function solution(storey) {
  let result = 0;
  const splitedStorey = String(storey)
    .split("")
    .map((a) => Number(a))
    .reverse();
  const storeyLen = splitedStorey.length;

  for (let i = 0; i <= storeyLen - 1; i++) {
    if (splitedStorey[i] > 5) {
      result += 10 - splitedStorey[i];
      splitedStorey[i + 1]++;

      if (i === storeyLen - 1) {
        result++;
        break;
      }
    } else if (
      splitedStorey[i] === 5 &&
      i < storeyLen - 1 &&
      splitedStorey[i + 1] >= 5
    ) {
      result += 5;
      splitedStorey[i + 1]++;
    } else {
      result += splitedStorey[i];
    }
  }
  return result;
}

console.log(solution(16));
console.log(solution(2554));
console.log(solution(24));
console.log(solution(25));
console.log(solution(564));
console.log(solution(565));
