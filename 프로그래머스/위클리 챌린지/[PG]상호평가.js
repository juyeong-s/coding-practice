function solution(scores) {
  const n = scores.length;
  let answer = "";

  const calcGrade = (score) => "FFFFFDDCBA"[Math.floor(score / 10)];

  for (let i = 0; i < n; i++) {
    const myScore = scores.map((score) => score[i]);
    const selfScore = myScore[i];
    const max = Math.max(...myScore);
    const min = Math.min(...myScore);
    const equalLen = myScore.filter((s) => s === selfScore).length;

    let sum = myScore.reduce((acc, cur) => acc + cur);
    let cnt = n;

    if (equalLen === 1) {
      sum -= selfScore === max ? max : min;
      cnt--;
    }
    answer += calcGrade(sum / cnt);
  }
  return answer;
}

console.log(
  solution([
    [100, 90, 98, 88, 65],
    [50, 45, 99, 85, 77],
    [47, 88, 95, 80, 67],
    [61, 57, 100, 80, 65],
    [24, 90, 94, 75, 65],
  ])
);
console.log(
  solution([
    [50, 90],
    [50, 87],
  ])
);
console.log(
  solution([
    [70, 49, 90],
    [68, 50, 38],
    [73, 31, 100],
  ])
);
