function solution(score, n, m) {
  const args = score.map((s) => {
    const len = s.length;
    const sorted = s.map((el) => parseFloat(el)).sort((a, b) => a - b);
    const sum = sorted.slice(1, len - 1).reduce((acc, cur) => acc + cur, 0);
    const arg = (sum / (len - 2)).toFixed(4);
    return arg;
  });

  const argM = args
    .sort((a, b) => b - a)
    .slice(n * (m - 1), n * m)
    .reduce((acc, cur) => acc + parseFloat(cur), 0);

  return (argM / n).toFixed(4);
}
