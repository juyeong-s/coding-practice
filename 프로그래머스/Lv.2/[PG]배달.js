// 우선순위 큐
function solution(N, road, K) {
  const dist = new Array(N + 1).fill(Infinity);
  const adj = Array.from({ length: N + 1 }, () => []);
  const pq = [];

  road.forEach(([start, target, time]) => {
    adj[start].push([target, time]);
    adj[target].push([start, time]);
  });

  pq.push([1, 0]);
  dist[1] = 0;

  while (pq.length > 0) {
    const [cNode, cTime] = pq.shift();

    if (dist[cNode] < cTime) continue;
    for (const [nextNode, nextTime] of adj[cNode]) {
      const newTime = cTime + nextTime;

      if (newTime < dist[nextNode]) {
        dist[nextNode] = newTime;
        pq.push([nextNode, newTime]);
      }
    }
  }

  return dist.filter((time) => time <= K).length;
}

console.log(
  solution(
    5,
    [
      [1, 2, 1],
      [2, 3, 3],
      [5, 2, 2],
      [1, 4, 2],
      [5, 3, 1],
      [5, 4, 2],
    ],
    3
  )
);

// 선형 탐색 방법
let n = 0;
let distance = []; // 시작 위치로부터 각 마을까지 최소길이
let visited = []; // 방문한 마을
let graph = [];

function getSmallIdx() {
  let min = Infinity;
  let idx = 0;
  for (let i = 0; i < n; i++) {
    if (distance[i] < min && !visited[i]) {
      // 방문하지 않는 마을 중에서
      min = distance[i]; // 가장 작은 길이를 갖는 마을의 인덱스 리턴
      idx = i;
    }
  }
  return idx;
}

function dijkstra(start) {
  for (let i = 0; i < n; i++) distance[i] = graph[start][i]; // 시작 위치에서 각 마을까지 초기 길이
  visited[start] = true;
  for (let i = 0; i < n; i++) {
    const curr = getSmallIdx(); // 시작 위치로부터 방문하지 않은 마을 중 작은 길이를 가지는 마을
    visited[curr] = true;
    for (let j = 0; j < n; j++) {
      if (!visited[j] && distance[curr] + graph[curr][j] < distance[j]) {
        // 방문 하지 않은 마을이고, 기존 길이 보다 curr마을을 거쳐가는 게 더 짧을 경우
        distance[j] = distance[curr] + graph[curr][j]; // 업데이트
      }
    }
  }
}

function solution(N, road, K) {
  n = N;
  graph = Array.from(Array(n), () => new Array(n).fill(0)).map((x, i) =>
    x.map((y, j) => {
      if (i === j) return 0;
      else return Infinity;
    })
  ); // 자신의 경로의 길이는 0으로 나머지는 무한대로
  road.forEach((pair) => {
    if (graph[pair[0] - 1][pair[1] - 1] > pair[2])
      // 더 작은 경로일 경우
      graph[pair[0] - 1][pair[1] - 1] = pair[2]; // 업데이트
    if (graph[pair[1] - 1][pair[0] - 1] > pair[2])
      graph[pair[1] - 1][pair[0] - 1] = pair[2];
  });
  dijkstra(0); // 시작위치 0에서 다익스트라 시작
  return distance.reduce((acc, curr) => acc + (curr <= K), 0); // K시간 이하 개수 리턴
}
