function solve() {
  const graph = Array.from({ length: N + 1 }, () => Array());
  for (const edge of edges) {
    const [from, to] = edge;
    graph[from].push(to);
    graph[to].push(from);
  }

  for (let edge of graph) edge.sort((a, b) => a - b);

  const dfs = () => {
    const visited = [];
    let needVisit = [V];
    while (needVisit.length) {
      const node = needVisit.shift();
      if (!visited.includes(node)) {
        visited.push(node);
        needVisit = [...graph[node], ...needVisit];
      }
    }
    return visited;
  };

  // 재귀 풀이
  // const visited = Array(N + 1).fill(false);
  // const answer = [];
  // function dfs(start){
  //     if(visited[start]) return;
  //     visited[start] = true;
  //     answer.push(start);

  //     for(let adj of graph[start]) {
  //         dfs(adj);
  //     }
  // }

  // dfs(V);
  // console.log(answer.join(' '));

  const bfs = () => {
    const visited = [];
    let needVisit = [V];
    while (needVisit.length) {
      const node = needVisit.shift();
      if (!visited.includes(node)) {
        visited.push(node);
        needVisit = [...needVisit, ...graph[node]];
      }
    }
    return visited;
  };
  console.log(dfs().join(" "));
  console.log(bfs().join(" "));
}

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "백준/silver/1260/testcase.txt";
const [input, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [N, _, V] = input.split(" ").map((el) => +el);
const edges = arr.map((edge) => edge.split(" ").map((el) => +el));
solve();
