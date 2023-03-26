const allDistances = {};

function dijkstra(n, start, graph) {
  const distance = Array.from({ length: n + 1 }, () => Infinity);
  const queue = [];

  distance[start] = 0;
  queue.push([start, 0]);

  while (queue.length) {
    const [curr, weight] = queue.shift();
    for (const [dest, cost] of graph[curr]) {
      const sum = weight + cost;
      if (distance[dest] > sum) {
        distance[dest] = sum;
        queue.push([dest, sum]);
      }
    }
  }

  allDistances[start] = distance;
}

function solve(n, x, roads) {
  let answer = 0;
  const graph = Array.from({ length: n + 1 }, () => []);

  roads.forEach(([start, end, time]) => {
    graph[start].push([end, time]);
  });

  for (let start = 1; start <= n; start++) {
    dijkstra(n, start, graph);
  }

  for (let start = 1; start <= n; start++) {
    answer = Math.max(answer, allDistances[start][x] + allDistances[x][start]);
  }
  return answer;
}

const filePath = process.platform === "linux" ? "/dev/stdin" : "백준/gold/1238/testcase.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [n, m, x] = input[0].split(" ").map((el) => +el);
const roads = input.slice(1).map((el) => el.split(" ").map((el) => +el));
console.log(solve(n, x, roads));
