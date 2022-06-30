function getCombination(arr, num) {
  const result = [];
  if (num === 1) return arr.map((v) => [v]);

  arr.forEach((fixed, idx, origin) => {
    const rest = origin.slice(idx + 1);
    const combinations = getCombination(rest, num - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);
    result.push(...attached);
  });
  return result;
}

function isUnique(arr) {
  const afterLen = new Set(arr).size;
  return arr.length === afterLen;
}

function solution(relation) {
  const colLen = relation[0].length;
  const indexes = Array.from({ length: colLen }, (_, index) => index);
  const combination = [];
  const unique = [];

  for (let i = 1; i <= indexes.length; i++) {
    combination.push(getCombination(indexes, i));
  }

  // 유일성 검사
  for (const tuple of combination) {
    for (const col of tuple) {
      if (!tuple.some((v) => unique.some((x) => x.includes(v)))) {
        const combine = relation.map((row) =>
          row.filter((_, idx) => col.includes(idx)).join("")
        );

        if (isUnique(combine)) {
          unique.push(col);
        }
      }
    }
  }

  // 최소성 검사
  const answer = [];
  for (const sub of unique) {
    let check = true;
    for (const candidate of answer) {
      if (candidate.filter((col) => !sub.includes(col)).length === 0)
        check = false;
    }
    if (check) answer.push(sub);
  }
  return answer.length;
}

console.log(
  solution([
    ["100", "ryan", "music", "2"],
    ["200", "apeach", "math", "2"],
    ["300", "tube", "computer", "3"],
    ["400", "con", "computer", "4"],
    ["500", "muzi", "music", "3"],
    ["600", "apeach", "music", "2"],
  ])
);
