function solution1(stones, k) { // 효율성 통과
  let start = 1,
    end = 200000000;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    let count = 0;
    for (const num of stones) {
      if (num - mid <= 0) count++;
      else count = 0;
      if (count >= k) break;
    }
    if (count >= k) end = mid - 1;
    else {
      start = mid + 1;
    }
  }
  return start;
}

function solution2(stones, k) { // 정확성만 통과
  let start = 1,
    end = Math.max(...stones);
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const temp = stones.map((num) => num - mid);
    let count = 0;
    for (const num of temp) {
      if (num <= 0) count++;
      else count = 0;
      if (count >= k) break;
    }
    if (count >= k) end = mid - 1;
    else {
      start = mid + 1;
    }
  }
  return start;
}

console.log(solution1([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3));
console.log(solution2([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3));
