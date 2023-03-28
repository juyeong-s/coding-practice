function solution(commands) {
  const LEN = 51;
  let result = [];
  let contentTable = Array.from({ length: LEN }, () => Array.from({ length: LEN }, () => "EMPTY"));
  let mergedTable = Array.from({ length: LEN }, (_, idx1) =>
    Array.from({ length: LEN }, (_, idx2) => [idx1, idx2])
  );

  function rcCorrect(r, c, targetR, targetC) {
    return r === targetR && c === targetC;
  }

  function updateValue(value1, value2) {
    for (let i = 1; i < LEN; i++) {
      for (let j = 1; j < LEN; j++) {
        if (contentTable[i][j] === value1) contentTable[i][j] = value2;
      }
    }
  }

  function updateNewValue(r, c, newValue) {
    const [mR, mC] = mergedTable[r][c];

    for (let i = 1; i < LEN; i++) {
      for (let j = 1; j < LEN; j++) {
        const [r, c] = mergedTable[i][j];
        if (rcCorrect(r, c, mR, mC)) contentTable[i][j] = newValue;
      }
    }
  }

  function merge(r1, c1, r2, c2) {
    const [mR1, mC1] = mergedTable[r1][c1];
    const [mR2, mC2] = mergedTable[r2][c2];
    if (rcCorrect(r1, c1, r2, c2) || rcCorrect(mR1, mC1, mR2, mC2)) return;

    const value1 = contentTable[r1][c1];
    const value2 = contentTable[r2][c2];
    const overWriteValue = value1 === "EMPTY" ? value2 : value1;

    for (let i = 1; i < LEN; i++) {
      for (let j = 1; j < LEN; j++) {
        const [r, c] = mergedTable[i][j];
        if (rcCorrect(r, c, mR2, mC2)) mergedTable[i][j] = [mR1, mC1];
      }
    }

    for (let i = 1; i < LEN; i++) {
      for (let j = 1; j < LEN; j++) {
        const [r, c] = mergedTable[i][j];
        if (rcCorrect(r, c, mR1, mC1)) contentTable[i][j] = overWriteValue;
      }
    }
  }

  function unmerge(r, c) {
    const cValue = contentTable[r][c];
    const [mR, mC] = mergedTable[r][c];

    for (let i = 1; i < LEN; i++) {
      for (let j = 1; j < LEN; j++) {
        const [r, c] = mergedTable[i][j];
        if (rcCorrect(r, c, mR, mC)) {
          mergedTable[i][j] = [i, j];
          contentTable[i][j] = "EMPTY";
        }
      }
    }
    contentTable[r][c] = cValue;
  }

  function print(r, c) {
    result.push(contentTable[r][c]);
  }

  commands.forEach((command) => {
    const cmd = command.split(" ");
    const params = cmd.slice(1);
    const [p1, p2, p3, p4] = params;

    switch (cmd[0]) {
      case "UPDATE":
        if (params.length === 2) {
          updateValue(p1, p2);
        } else {
          updateNewValue(+p1, +p2, p3);
        }
        break;
      case "MERGE":
        merge(+p1, +p2, +p3, +p4);
        break;
      case "UNMERGE":
        unmerge(+p1, +p2);
        break;
      case "PRINT":
        print(+p1, +p2);
        break;
      default:
        break;
    }
  });

  return result;
}

console.log(
  solution([
    "UPDATE 1 1 menu",
    "UPDATE 1 2 category",
    "UPDATE 2 1 bibimbap",
    "UPDATE 2 2 korean",
    "UPDATE 2 3 rice",
    "UPDATE 3 1 ramyeon",
    "UPDATE 3 2 korean",
    "UPDATE 3 3 noodle",
    "UPDATE 3 4 instant",
    "UPDATE 4 1 pasta",
    "UPDATE 4 2 italian",
    "UPDATE 4 3 noodle",
    "MERGE 1 2 1 3",
    "MERGE 1 3 1 4",
    "UPDATE korean hansik",
    "UPDATE 1 3 group",
    "UNMERGE 1 4",
    "PRINT 1 3",
    "PRINT 1 4",
  ])
);

console.log(
  solution([
    "UPDATE 1 1 a",
    "UPDATE 1 2 b",
    "UPDATE 2 1 c",
    "UPDATE 2 2 d",
    "MERGE 1 1 1 2",
    "MERGE 2 2 2 1",
    "MERGE 2 1 1 1",
    "PRINT 1 1",
    "UNMERGE 2 2",
    "PRINT 1 1",
  ])
);

console.log(
  solution([
    "UPDATE 1 1 menu",
    "MERGE 1 1 1 2",
    "MERGE 1 1 1 3",
    "MERGE 1 1 1 4",
    "MERGE 1 2 1 3",
    "UPDATE 1 1 hansik",
    "PRINT 1 1",
    "PRINT 1 2",
    "PRINT 1 3",
    "PRINT 1 4",
  ])
);
