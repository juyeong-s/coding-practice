function solution(n, k, a, b, A) {
  const initLine = {};
  for (let i = 0; i < n; i++) {
    initLine[A[i]] ? initLine[A[i]].push(i) : (initLine[A[i]] = [i]);
  }

  const moved = new Set();
  let lineStatus = [];

  for (const [key, values] of Object.entries(initLine)) {
    lineStatus[+key] = values;
  }

  for (const [key, values] of Object.entries(initLine)) {
    if (values.length <= 1) continue;

    for (const num of values) {
      if (moved.has(num)) continue;

      for (let i = +key - 1; i >= +key - k; i--) {
        if (a <= i && b >= i) {
          if (!lineStatus[i]) {
            lineStatus[i] = [num];
            lineStatus[+key] = lineStatus[+key].filter((el) => el !== num);
            moved.add(num);
          }
        }
      }

      for (let i = +key + 1; i <= +key + k; i++) {
        if (a <= i && b >= i) {
          if (!lineStatus[i]) {
            lineStatus[i] = [num];
            lineStatus[+key] = lineStatus[+key].filter((el) => el !== num);
            moved.add(num);
          }
        }
      }
    }
  }

  return lineStatus.slice(a, b + 1).reduce((acc, cur) => (cur.length ? (acc += 1) : acc), 0);
}
