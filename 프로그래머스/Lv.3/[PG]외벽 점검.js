function getCombination(arr, n) {
  if (n === 1) return arr.map((el) => [el]);
  const result = [];

  arr.forEach((cur, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const combination = getCombination(rest, n - 1);
    const attached = combination.map((el) => [cur, ...el]);
    result.push(...attached);
  });
  return result;
}

function solution(n, weak, dist) {
  let answer = Infinity;

  // 1명부터 dist명까지 조합
  for (let i = 1; i <= dist.length; i++) {
    const combinations = getCombination(dist, i);

    // 각 조합 돌려서
    for (const dists of combinations) {
      // 외벽을 i인덱스가 첫 탐색 외벽이 되도록 탐색하기
      for (let i = 0; i < weak.length; i++) {
        let flated = [...weak.slice(i), ...weak.slice(0, i)];
        // 증가하는 형태로 만들기
        for (let i = 1; i < flated.length; i++) {
          if (flated[i] < flated[i - 1]) {
            flated[i] += n;
          }
        }

        for (const dist of dists) {
          const arrivalPoint = dist + flated[0];
          flated = flated.filter((el) => el > arrivalPoint);
        }

        if (!flated.length) {
          answer = Math.min(answer, dists.length);
        }
      }
    }
  }
  return answer !== Infinity ? answer : -1;
}

console.log(solution(12, [1, 5, 6, 10], [1, 2, 3, 4]));
console.log(solution(12, [1, 3, 4, 9, 10], [3, 5, 7]));
