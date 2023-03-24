function solution(cards) {
  let box = [];

  for (let i = 0; i < cards.length; i++) {
    let idx = i;
    let count = 0;

    while (cards[idx]) {
      const nextIdx = cards[idx];
      cards[idx] = 0;
      idx = nextIdx - 1;
      count++;
    }
    if (count) box.push(count);
  }

  const sorted = box.sort((a, b) => b - a);
  return (sorted[0] || 0) * (sorted[1] || 0);
}

console.log(solution([8, 6, 3, 7, 2, 5, 1, 4]));
console.log(solution([2, 3, 4, 5, 6, 7, 8, 9, 10, 1]));

// 숫자 카드 더미에 100장 카드
// 각 카드에는 1부터 100까지 숫자 적혀있음
// 상자에 카드 한장씩 넣고 상자를 무작위로 섞어 일렬로 나열. -> 나열에 순서대로 1번부터 번호 붙임
// 임의로 상자 하나를 열어서 숫자 확인 후 그 숫자에 해당하는 상자를 다시 열고. 반복 -> 상자가 이미 열려있을 때까지
// 위에 상자들이 1번 그룹이고, 상자가 더 남아있다면 똑같이 반복해서 2번 그룹을 만든다.
// 1번 그룹, 2번 그룹 상자수를 곱한 값이 게임의 점수. -> 최고점수 구하기

// 8,4,7,1 / 6,5,2 => 3은 3번자리에 있어서 뽑히지 않음.
// 6,5,2 / 4,7,1,8
