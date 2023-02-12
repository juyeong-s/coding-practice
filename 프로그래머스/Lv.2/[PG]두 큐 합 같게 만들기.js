function getSum(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

function solution(queue1, queue2) {
  let sum1 = getSum(queue1);
  const sum2 = getSum(queue2);
  const half = (sum1 + sum2) / 2;

  if (!Number.isInteger(half)) return -1;

  const queue = [...queue1, ...queue2];
  const len = queue.length;
  let q1Pointer = 0;
  let q2Pointer = queue1.length;

  for (let cnt = 0; cnt < queue1.length * 3; cnt++) {
    if (sum1 === half) return cnt;

    sum1 =
      sum1 > half
        ? sum1 - queue[q1Pointer++ % len]
        : sum1 + queue[q2Pointer++ % len];
  }
  return -1;
}

console.log(solution([3, 2, 7, 2], [4, 6, 5, 1]));
console.log(solution([1, 2, 1, 2], [1, 10, 1, 2]));
console.log(solution([1, 1], [1, 5]));
console.log(solution([1, 4], [3, 4]));
