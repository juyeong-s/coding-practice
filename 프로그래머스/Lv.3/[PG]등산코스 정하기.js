function solution(n, paths, gates, summits) {
  const graph = Array.from({ length: n + 1 }, () => []);
  for (const path of paths) {
    const [i, j, w] = path;
    graph[i].push([j, w]);
    graph[j].push([i, w]);
  }

  // 산봉우리가 시작 지점이 되면 안되므로 간선 제거
  for (const summit of summits) {
    graph[summit] = [];
  }

  // 어떤 출발 지점에서든 i번째까지 가는데 걸리는 시간을 저장하는 변수 -> 루프를 돌면서 가장 적은 시간을 저장하게 됨.
  const dp = Array.from({ length: n + 1 }, () => Infinity);

  gates.forEach((v) => (dp[v] = -1));

  let queue = gates;

  // shift한 node가 전부 산봉우리여서 set에 add할 노드가 없을 때까지 반복
  while (queue.length > 0) {
    const set = new Set();

    while (queue.length > 0) {
      const node = queue.shift();
      for (const [v, w] of graph[node]) {
        // dp[node]가 출발선일 경우 -1보다 w가 더 클 것이므로 w가 max값으로 선택되고,
        // dp[node]가 쉼터일 경우 기존 경로의 가중치보다 더 큰 가중치가 들어오면 그걸로 교체
        // -> "휴식 없이 이동해야 하는 시간 중 가장 긴 시간"
        const maxWeight = Math.max(dp[node], w);

        // v에 이미 저장된 가중치보다 더 적은 가중치일 경우
        // -> "intensity가 최소가 되도록 등산코스를 정하려고 합니다"
        if (dp[v] > maxWeight) {
          dp[v] = maxWeight;
          set.add(v);
        }
      }
    }

    queue = [...set];
  }

  const result = summits
    .map((v) => [v, dp[v]])
    .sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

  return result[0];
}

console.log(
  solution(
    6,
    [
      [1, 2, 3],
      [2, 3, 5],
      [2, 4, 2],
      [2, 5, 4],
      [3, 4, 4],
      [4, 5, 3],
      [4, 6, 1],
      [5, 6, 1],
    ],
    [1, 3],
    [5]
  )
);
console.log(
  solution(
    7,
    [
      [1, 4, 4],
      [1, 6, 1],
      [1, 7, 3],
      [2, 5, 2],
      [3, 7, 4],
      [5, 6, 6],
    ],
    [1],
    [2, 3, 4]
  )
);
console.log(
  solution(
    7,
    [
      [1, 2, 5],
      [1, 4, 1],
      [2, 3, 1],
      [2, 6, 7],
      [4, 5, 1],
      [5, 6, 1],
      [6, 7, 1],
    ],
    [3, 7],
    [1, 5]
  )
);
console.log(
  solution(
    5,
    [
      [1, 3, 10],
      [1, 4, 20],
      [2, 3, 4],
      [2, 4, 6],
      [3, 5, 20],
      [4, 5, 6],
    ],
    [1, 2],
    [5]
  )
);
