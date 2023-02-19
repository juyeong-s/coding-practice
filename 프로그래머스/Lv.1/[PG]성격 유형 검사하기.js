function solution1(survey, choices) {
  const scoreTable = {
    1: [0, 3],
    2: [0, 2],
    3: [0, 1],
    5: [1, 1],
    6: [1, 2],
    7: [1, 3],
  };
  const score = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  for (let i = 0; i < survey.length; i++) {
    const types = survey[i];
    const answer = choices[i];
    if (answer === 4) continue;

    const [idx, score] = scoreTable[answer];
    const selectType = types[idx];

    score[selectType] += score;
  }

  return decideType(score);
}

const decideType = (score) => {
  const { R, T, C, F, J, M, A, N } = score;
  return `${R >= T ? "R" : "T"}${C >= F ? "C" : "F"}${J >= M ? "J" : "M"}${
    A >= N ? "A" : "N"
  }`;
};

function solution2(survey, choices) {
  const score = {};
  const types = ["RT", "CF", "JM", "AN"];

  types.forEach((type) => type.split("").forEach((char) => (score[char] = 0)));

  survey.forEach(([disagree, agree], index) => {
    const choice = choices[index];
    score[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
  });

  return types.map(([a, b]) => (score[b] > score[a] ? b : a)).join("");
}

console.log(solution1(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]));
console.log(solution2(["TR", "RT", "TR"], [7, 1, 3]));
