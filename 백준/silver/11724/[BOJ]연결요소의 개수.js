function solve(){
    const graph = Array.from({ length: n }, () => []);
    for(const [from, to] of edges){
        graph[from-1].push(to);
        graph[to-1].push(from);
    }

    const visited = [];
    const dfs = (start) => {
        visited[start] = true;
        if(!graph[start]) return;

        const adj = [...graph[start]];
        for(const node of adj){
            if(!visited[node-1])
                dfs(node-1);
        }
    }

    let answer = 0;
    for(let i = 0; i < n; i++){
        if(!visited[i]){
            dfs(i);
            answer++;
        }
    }
    return answer;
}

const filePath = process.platform === 'linux'? '/dev/stdin' : '백준/silver/11724/testcase.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [n, _] = input.shift().split(' ').map(el => +el);
const edges = input.map(row => row.split(' ').map(el => +el));
console.log(solve());