function solution(n, money) {
  const dp = Array.from({ length: n + 1 }, (_, index) => (index ? 0 : 1));
  for (const num of money) {
    for (let i = num; i <= n; i++) {
      dp[i] += dp[i - num];
    }
  }
  return dp[n];
}

console.log(solution(5, [1, 2, 5]));
