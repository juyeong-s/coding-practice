function solution(k, tangerine) {
  const cntPerSize = {};

  tangerine.forEach((n) => {
    cntPerSize[n] = ++cntPerSize[n] || 1;
  });
  const cntArr = Object.values(cntPerSize).sort((a, b) => b - a);

  let sum = 0;
  let result = 0;

  for (const cnt of cntArr) {
    result++;
    sum += cnt;

    if (sum >= k) break;
  }

  return result;
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]));
console.log(solution(4, [1, 3, 2, 5, 4, 5, 2, 3]));
console.log(solution(2, [1, 1, 1, 1, 2, 2, 2, 3]));
