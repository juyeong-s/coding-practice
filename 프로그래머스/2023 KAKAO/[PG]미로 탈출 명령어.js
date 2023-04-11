function solution(n, m, x, y, r, c, k) {
  const distDiff = k - (Math.abs(r - x) + Math.abs(c - y));
  if (distDiff < 0 || distDiff % 2 !== 0) return "impossible";

  let answer = "z".repeat(k);
  const cmds = ["d", "l", "r", "u"];
  const dx = [1, 0, 0, -1];
  const dy = [0, -1, 1, 0];

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
        dfs(mx, my, cnt + 1, cmd + cmds[i], Math.abs(r - mx) + Math.abs(c - my) + cnt + 1);
      }
    }
  };

  dfs(x, y, 0, "", k);
  return answer === "z".repeat(k) ? "impossible" : answer;
}

console.log(solution(3, 4, 2, 3, 3, 1, 5));
console.log(solution(2, 2, 1, 1, 2, 2, 2));
console.log(solution(3, 3, 1, 2, 3, 3, 4));
