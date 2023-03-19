// 그리디
function solution1(cap, n, deliveries, pickups) {
  let answer = 0;
  let delivery = 0; // 남은 배달 개수
  let pickup = 0; // 남은 수거 개수

  // 맨 끝 집부터 가는게 오는 길에 다른 집들을 처리할 수 있으므로 최선의 선택임
  for (let i = n - 1; i >= 0; i--) {
    // 각 집의 배달과 수거 개수를 더해줌
    delivery += deliveries[i];
    pickup += pickups[i];

    // i번째 집에 하나라도 배달이나 수거할 게 있다면 들러야 함.
    while (delivery > 0 || pickup > 0) {
      delivery -= cap;
      pickup -= cap;
      answer += (i + 1) * 2; // 목적은 거리 합이니까 i번째 들를 때마다 왔다갔다 거리*2임.
    }
  }
  return answer;
}

console.log(solution1(4, 5, [1, 0, 3, 1, 2], [0, 3, 0, 4, 0]));
console.log(solution1(2, 7, [1, 0, 2, 0, 1, 0, 2], [0, 2, 0, 1, 0, 2, 0]));
