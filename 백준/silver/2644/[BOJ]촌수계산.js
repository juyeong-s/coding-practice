function solve1() {
  const tree = {};
  for (const [parent, child] of relation) {
    if (!tree[parent]) tree[parent] = [];
    if (!tree[child]) tree[child] = [];
    tree[parent].push(child);
    tree[child].push(parent);
  }

  const visited = Array.from({ length: n }, () => false);
  let answer = 0;

  function dfs(node, cnt) {
    if (node === target2) {
      answer = cnt;
      return;
    }

    for (const next of tree[node]) {
      if (!visited[next]) {
        visited[next] = true;
        dfs(next, cnt + 1);
      }
    }
  }
  dfs(target1, 0);
  return answer || -1;
}

function solve2() {
  const tree = {};
  for (const [parent, child] of relation) {
    if (!tree[parent]) tree[parent] = [];
    if (!tree[child]) tree[child] = [];
    tree[parent].push(child);
    tree[child].push(parent);
  }

  const visited = Array.from({ length: n }, () => false);
  const answer = Array.from({ length: n }, () => 0);

  function dfs(node) {
    visited[node] = true;
    for (const next of tree[node]) {
      if (!visited[next]) {
        answer[next] = answer[node] + 1;
        dfs(next);
      }
    }
  }
  dfs(target1);
  return answer[target2] || -1;
}

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "백준/silver/2644/testcase.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const n = +input[0];
const [target1, target2] = input[1].split(" ");
const m = +input[2];
const relation = input.slice(3).map((row) => row.split(" "));
console.log(solve1());
console.log(solve2());
