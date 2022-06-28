function solve1() {
  const tree = {};
  for (const [node1, node2] of nodes) {
    if (!tree[node1]) tree[node1] = [];
    if (!tree[node2]) tree[node2] = [];
    tree[node1].push(node2);
    tree[node2].push(node1);
  }

  const visited = Array.from({ length: n - 1 }, () => 0);

  function dfs(targetNode) {
    for (const node of tree[targetNode]) {
      if (!visited[node - 2]) {
        visited[node - 2] = targetNode;
        dfs(node);
      }
    }
  }
  dfs(1);
  return visited.join("\n");
}

function solve2() {
  const tree = {};
  for (const [node1, node2] of nodes) {
    if (!tree[node1]) tree[node1] = [];
    if (!tree[node2]) tree[node2] = [];
    tree[node1].push(node2);
    tree[node2].push(node1);
  }

  const visited = Array.from({ length: n - 1 }, () => 0);

  const queue = [1];
  while (queue.length) {
    const node = queue.shift();

    for (const next of tree[node]) {
      if (!visited[next - 2]) {
        visited[next - 2] = node;
        queue.push(next);
      }
    }
  }

  return visited.join("\n");
}

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "백준/silver/11725/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const n = input[0];
const nodes = input.slice(1).map((row) => row.split(" ").map((num) => +num));
console.log(solve1());
console.log(solve2());
