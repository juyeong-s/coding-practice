function solution(picks, minerals) {
  let answer = 0;
  const pick_cnt = picks.reduce((acc, cur) => acc + cur);
  minerals = minerals.splice(0, pick_cnt * 5);

  const cadicate = [];

  for (let i = 0; i < minerals.length; i += 5) {
    const mineral_cnt = { diamond: 0, iron: 0, stone: 0 };
    const sliced = minerals.slice(i, i + 5);
    sliced.forEach((name) => mineral_cnt[name]++);
    cadicate.push([
      mineral_cnt["diamond"] + mineral_cnt["iron"] + mineral_cnt["stone"],
      mineral_cnt["diamond"] * 5 + mineral_cnt["iron"] + mineral_cnt["stone"],
      mineral_cnt["diamond"] * 25 + mineral_cnt["iron"] * 5 + mineral_cnt["stone"],
    ]); // 다이아, 철, 돌 순서로 사용했을 때 드는 피로도 저장
  }

  cadicate
    .sort((a, b) => b[2] - a[2]) // 돌 곡괭이를 사용했을 때 가장 피로도가 큰 순서대로 정렬하고, 돌 곡괭이가 가장 피로도가 높을 때는 다이아 곡괭이를 사용하는 것이 좋음.
    .forEach(([dia, iron, stone]) => {
      // 피로도가 높은 것부터 정렬했으니 다이아 곡괭이부터 감소시키도록 함
      if (picks[0]) {
        picks[0]--;
        answer += dia;
      } else if (picks[1]) {
        picks[1]--;
        answer += iron;
      } else if (picks[2]) {
        picks[2]--;
        answer += stone;
      }
    });
  return answer;
}

console.log(
  solution(
    [1, 3, 2],
    ["diamond", "diamond", "diamond", "iron", "iron", "diamond", "iron", "stone"]
  )
);
console.log(
  solution(
    [0, 1, 1],
    [
      "diamond",
      "diamond",
      "diamond",
      "diamond",
      "diamond",
      "iron",
      "iron",
      "iron",
      "iron",
      "iron",
      "diamond",
    ]
  )
);

// 다이아몬드 곡괭이, 철 곡괭이, 돌 곡괭이를 각각 0개에서 5개까지 가지고있음
// 광물 5개를 캔 이후에는 사용 불가능
// 최소한의 피로도로 광물을 캠.

// 실패한 코드 - 무조건 다이아부터 캐는게 좋은게 아님. 돌 곡괭이를 사용해야할 경우 최대한 돌을 캐도록 해야함.
// function solution(picks, minerals) {
//   const table = [
//     [1, 1, 1],
//     [5, 1, 1],
//     [25, 5, 1],
//   ];
//   const mineral = {
//     diamond: 0,
//     iron: 1,
//     stone: 2,
//   };
//   let answer = 0;
//   let pick_idx = 0;

//   for (const cnt of picks) {
//     if (!cnt) pick_idx++;
//     else break;
//   }

//   while (minerals.length && picks.reduce((acc, cur) => acc + cur, 0)) {
//     const spliced = minerals.splice(0, 5);
//     console.log(spliced);
//     for (const name of spliced) {
//       const num = mineral[name];
//       answer += table[pick_idx][num];
//     }
//     picks[pick_idx]--;
//     if (!picks[pick_idx]) pick_idx++;
//   }
//   return answer;
// }
