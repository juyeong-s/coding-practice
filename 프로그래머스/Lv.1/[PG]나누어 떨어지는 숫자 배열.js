function solution(arr, divisor) {
  const remainZero = arr.filter((num) => num % divisor === 0);
  return remainZero.length ? remainZero.sort((a, b) => a - b) : [-1];
}

console.log(solution([5, 9, 7, 10], 5));
console.log(solution([3, 2, 6], 10));
