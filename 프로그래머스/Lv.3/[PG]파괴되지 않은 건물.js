// 정확성 O, 효율성 O
function solution(board, skill) {
  const r = board.length;
  const c = board[0].length;
  const accSum = Array.from({ length: r + 1 }, () => Array.from({ length: c + 1 }, () => 0));

  skill.forEach(([type, r1, c1, r2, c2, degree]) => {
    accSum[r1][c1] += type === 1 ? -degree : degree; // 왼쪽 위
    accSum[r1][c2 + 1] += type === 1 ? degree : -degree; // 오른쪽 위
    accSum[r2 + 1][c1] += type === 1 ? degree : -degree; // 왼쪽 아래
    accSum[r2 + 1][c2 + 1] += type === 1 ? -degree : degree; // 오른쪽 아래
  });

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      accSum[i][j + 1] += accSum[i][j];
    }
  }

  for (let j = 0; j < c; j++) {
    for (let i = 0; i < r; i++) {
      accSum[i + 1][j] += accSum[i][j];
    }
  }

  let result = 0;

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      board[i][j] += accSum[i][j];
      if (board[i][j] > 0) result++;
    }
  }

  return result;
}

// 정확성 O, 효율성 X
function solution(board, skill) {
  skill.forEach(([type, r1, c1, r2, c2, degree]) => {
    for (let i = r1; i <= r2; i++) {
      for (let j = c1; j <= c2; j++) {
        type === 1 ? (board[i][j] -= degree) : (board[i][j] += degree);
      }
    }
  });

  return board.reduce(
    (acc, cur) => (acc += cur.reduce((acc, cur) => (cur > 0 ? (acc += 1) : acc), 0)),
    0
  );
}

console.log(
  solution(
    [
      [5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5],
    ],
    [
      [1, 0, 0, 3, 4, 4],
      [1, 2, 0, 2, 3, 2],
      [2, 1, 0, 3, 1, 2],
      [1, 0, 1, 3, 3, 1],
    ]
  )
);

console.log(
  solution(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    [
      [1, 1, 1, 2, 2, 4],
      [1, 0, 0, 1, 1, 2],
      [2, 2, 0, 2, 0, 100],
    ]
  )
);
