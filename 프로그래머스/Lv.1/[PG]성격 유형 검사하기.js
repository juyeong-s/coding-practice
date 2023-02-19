function solution1(survey, choices) {
  const scoreTable = {
    1: [0, 3],
    2: [0, 2],
    3: [0, 1],
    5: [1, 1],
    6: [1, 2],
    7: [1, 3],
  };
  const result = {
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

    result[selectType] += score;
  }

  return decideType(result);
}

const decideType = (result) => {
  let personality = "";

  if (result["R"] === result["T"]) personality += "R";
  else if (result["T"] > result["R"]) personality += "T";
  else personality += "R";

  if (result["C"] === result["F"]) personality += "C";
  else if (result["F"] > result["C"]) personality += "F";
  else personality += "C";

  if (result["J"] === result["M"]) personality += "J";
  else if (result["M"] > result["J"]) personality += "M";
  else personality += "J";

  if (result["A"] === result["N"]) personality += "A";
  else if (result["N"] > result["A"]) personality += "N";
  else personality += "A";

  return personality;
};

function solution2(survey, choices) {
  const mbti = {};
  const types = ["RT", "CF", "JM", "AN"];

  types.forEach((type) => type.split("").forEach((char) => (mbti[char] = 0)));

  choices.forEach((choice, index) => {
    const [disagree, agree] = survey[index];
    mbti[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
  });

  return types.map(([a, b]) => (mbti[b] > mbti[a] ? b : a)).join("");
}

console.log(solution1(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]));
console.log(solution2(["TR", "RT", "TR"], [7, 1, 3]));
