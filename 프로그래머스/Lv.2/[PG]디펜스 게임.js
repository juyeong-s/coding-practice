function solution(n, k, enemy) {
  if (enemy.length <= k) return enemy.length;

  let left = 0;
  let right = enemy.length;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    const curSliced = enemy.slice(0, mid + 1).sort((a, b) => b - a);
    const remainEnemy = curSliced.slice(k).reduce((acc, cur) => (acc += cur), 0);

    if (remainEnemy > n) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

console.log(solution(7, 3, [4, 2, 4, 5, 3, 3, 1]));
console.log(solution(2, 4, [3, 3, 3, 3]));
console.log(solution(7, 2, [1, 2, 1, 2, 2, 5, 1]));
