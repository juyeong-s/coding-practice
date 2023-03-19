function solution1(cap, n, deliveries, pickups) {
  let answer = 0;
  let delivery = 0;
  let pickup = 0;

  for (let i = n - 1; i >= 0; i--) {
    delivery += deliveries[i];
    pickup += pickups[i];

    while (delivery > 0 || pickup > 0) {
      delivery -= cap;
      pickup -= cap;
      answer += (i + 1) * 2;
    }
  }
  return answer;
}

console.log(solution1(4, 5, [1, 0, 3, 1, 2], [0, 3, 0, 4, 0]));
console.log(solution1(2, 7, [1, 0, 2, 0, 1, 0, 2], [0, 2, 0, 1, 0, 2, 0]));
