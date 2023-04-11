function solution(n, m, x, y, r, c, k) {
  let answer = "z".repeat(k);
  const cmds = ["d", "l", "r", "u"];
  const dx = [1, 0, 0, -1];
  const dy = [0, -1, 1, 0];

  const calcDist = (x, y) => Math.abs(r - x) + Math.abs(c - y);

  const isValid = (x, y) => x > 0 && x <= n && y > 0 && y <= m;

  const dfs = (x, y, cnt, cmd, dist) => {
    if (dist > k) return;
    if (cnt >= k && x === r && y === c) {
      if (answer > cmd) answer = cmd;
      return;
    }
    if (answer !== "z".repeat(k)) return;

    for (let i = 0; i < 4; i++) {
      const mx = x + dx[i];
      const my = y + dy[i];

      if (isValid(mx, my)) {
        dfs(mx, my, cnt + 1, cmd + cmds[i], calcDist(mx, my) + cnt + 1);
      }
    }
  };

  const distDiff = k - calcDist(x, y);
  if (distDiff < 0 || distDiff % 2 !== 0) return "impossible";

  dfs(x, y, 0, "", k);
  return answer === "z".repeat(k) ? "impossible" : answer;
}

function solution2(n, m, x, y, r, c, k) {
  let answer = "";
  const cmds = ["d", "l", "r", "u"];
  const dx = [1, 0, 0, -1];
  const dy = [0, -1, 1, 0];

  const calcDist = (x, y) => Math.abs(r - x) + Math.abs(c - y);

  const isValid = (x, y) => x > 0 && x <= n && y > 0 && y <= m;

  const move = (x, y) => {
    for (let i = 0; i < 4; i++) {
      const mx = x + dx[i];
      const my = y + dy[i];

      if (isValid(mx, my)) return i;
    }
  };

  let distance = calcDist(x, y);
  const diff = k - distance;
  if (diff < 0 || diff % 2 !== 0) return "impossible";

  while (distance < k) {
    const idx = move(x, y);
    if (idx === 0) x++;
    else if (idx === 1) y--;
    else if (idx === 2) y++;
    else x--;

    answer += cmds[idx];
    distance = calcDist(x, y);
    k--;
  }

  if (x < r) answer += "d".repeat(r - x);
  if (y > c) answer += "l".repeat(y - c);
  if (y < c) answer += "r".repeat(c - y);
  if (x > r) answer += "u".repeat(x - r);

  return answer;
}

console.log(solution(3, 4, 2, 3, 3, 1, 5));
console.log(solution(2, 2, 1, 1, 2, 2, 2));
console.log(solution(3, 3, 1, 2, 3, 3, 4));
