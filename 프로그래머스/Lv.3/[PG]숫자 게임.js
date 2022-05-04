function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);

  let answer = 0;
  while (A.length && B.length) {
    const maxA = A.pop();
    const maxB = B.pop();
    if (maxB > maxA) answer++;
    else B.push(maxB);
  }
  return answer;
}

console.log(solution([5, 1, 3, 7], [2, 2, 6, 8]));
console.log(solution([2, 2, 2, 2], [1, 1, 1, 1]));
console.log(solution([2, 3, 4, 5, 6, 7], [7, 6, 5, 4, 3, 2]));
