function solution(rectangle, characterX, characterY, itemX, itemY) {
  const n = 51;
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  let answer = Number.MAX_SAFE_INTEGER;

  let visitied = Array.from({ length: n }, () => new Array(n).fill(false));
  visitied[characterX][characterY] = true;

  const isValid = (x, y) => x > 0 && x < n && y > 0 && y < n;

  // 사각형 안에 있는 점인지
  const isInRectanglePoint = (x, y) => {
    for (const [lx, ly, rx, ry] of rectangle) {
      if (lx < x && x < rx && ly < y && y < ry) return true;
    }
    return false;
  };

  // 보더 위를 지나가는지
  const isPassOverBorder = (prevX, prevY, nextX, nextY) => {
    for (const [lx, ly, rx, ry] of rectangle) {
      if (
        lx === prevX &&
        lx === nextX &&
        ly <= prevY &&
        prevY <= ry &&
        ly <= nextY &&
        nextY <= ry
      )
        return true; // 왼쪽 테두리
      if (
        ry === prevY &&
        ry === nextY &&
        lx <= prevX &&
        rx >= prevX &&
        lx <= nextX &&
        nextX <= rx
      )
        return true; // 위 테두리
      if (
        rx === prevX &&
        rx === nextX &&
        ly <= prevY &&
        ry >= prevY &&
        ly <= nextY &&
        nextY <= ry
      )
        return true; // 오른쪽 테두리
      if (
        ly === prevY &&
        ly === nextY &&
        lx <= prevX &&
        rx >= prevX &&
        lx <= nextX &&
        nextX <= rx
      )
        return true; // 아래 테두리
    }
    return false;
  };

  // 보더를 지나가지만 다른 도형을 가로질러갈 경우
  const isCross = (prevX, prevY, nextX, nextY) => {
    for (const [lx, ly, rx, ry] of rectangle) {
      if (prevX === nextX && lx < prevX && prevX < rx && ly === nextY && prevY === ry)
        return true; // 위->아래 가로지름
      if (prevX === nextX && lx < prevX && prevX < rx && ly === prevY && nextY === ry)
        return true; // 아래->위 가로지름
      if (prevY === nextY && ly < prevY && prevY < ry && lx === prevX && nextX === rx)
        return true; // 왼->오른 가로지름
      if (prevY === nextY && ly < prevY && prevY < ry && lx === nextX && prevX === rx)
        return true; // 오른->왼 가로지름
    }
    return false;
  };

  const dfs = (x, y, distance) => {
    if (x === itemX && y === itemY) {
      answer = Math.min(distance, answer);
      return;
    }

    for (let i = 0; i < 4; i++) {
      const mx = x + dx[i];
      const my = y + dy[i];

      if (
        isValid(mx, my) &&
        !visitied[mx][my] &&
        !isInRectanglePoint(mx, my) &&
        isPassOverBorder(x, y, mx, my) &&
        !isCross(x, y, mx, my)
      ) {
        visitied[mx][my] = true;
        dfs(mx, my, distance + 1);
        visitied[mx][my] = false;
      }
    }
  };

  dfs(characterX, characterY, 0);
  return answer;
}

console.log(
  solution(
    [
      [1, 1, 7, 4],
      [3, 2, 5, 5],
      [4, 3, 6, 9],
      [2, 6, 8, 8],
    ],
    1,
    3,
    7,
    8
  )
);
console.log(
  solution(
    [
      [1, 1, 8, 4],
      [2, 2, 4, 9],
      [3, 6, 9, 8],
      [6, 3, 7, 7],
    ],
    9,
    7,
    6,
    1
  )
);
console.log(solution([[1, 1, 5, 7]], 1, 1, 4, 7));
console.log(
  solution(
    [
      [2, 1, 7, 5],
      [6, 4, 10, 10],
    ],
    3,
    1,
    7,
    10
  )
);
console.log(
  solution(
    [
      [2, 2, 5, 5],
      [1, 3, 6, 4],
      [3, 1, 4, 6],
    ],
    1,
    4,
    6,
    3
  )
);
console.log(
  solution(
    [
      [2, 1, 3, 6],
      [4, 1, 5, 6],
      [1, 2, 6, 3],
      [1, 4, 6, 5],
    ],
    3,
    2,
    5,
    4
  )
);
console.log(
  solution(
    [
      [1, 2, 4, 3],
      [2, 1, 3, 4],
    ],
    1,
    2,
    2,
    1
  )
);

// 시작 지점에서 4방향으로 돌면서 rectangle을 돌면서 하나라도 사각형 내부에 들어오는지 확인.
// 들어오지 않으면 이동하고, 해당 점이 도착점인지 확인.
// answer 최소 값 업데이트
