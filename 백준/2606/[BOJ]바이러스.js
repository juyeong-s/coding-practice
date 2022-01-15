function solution(n, arr) {
    const graph = Array.from({ length: n }, () => Array());
    for(const pair of arr) {
        graph[pair[0] - 1].push(pair[1]);
        graph[pair[1] - 1].push(pair[0]);
    }
    console.log(dfs(graph));
}

function dfs(graph) {
    const visited = [];
    let needVisit = [1];

    while(needVisit.length !== 0) {
        const node = needVisit.shift();
        if(!visited.includes(node)) {
            visited.push(node);
            needVisit = [...graph[node - 1], ...needVisit];
        }
    }
    return visited.length - 1;
}
  
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = input[0];
const arr = [];
for(let i = 2 ; i < input.length ; i++) arr.push(input[i].split(' ').map((v) => +v));

solution(N, arr);