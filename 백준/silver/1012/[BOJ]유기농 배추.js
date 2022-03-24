function solve(M, N, cabbage){
    const graph = Array.from({ length: M }, () => Array(N).fill(0));
    for(const [x, y] of cabbage) graph[x][y] = 1;

    const visited = Array.from({ length: M }, () => Array(N).fill(false));
    let answer = 0;
    const dfs = (i, j) => {
        if(visited[i][j]) return;
        visited[i][j] = true;

        if(i-1 >= 0 && graph[i-1][j] && !visited[i-1][j]) {
            dfs(i-1, j);
        }
        if(i+1 < M && graph[i+1][j] && !visited[i+1][j]) {
            dfs(i+1, j);
        }
        if(j-1 >= 0 && graph[i][j-1] && !visited[i][j-1]) {
            dfs(i, j-1);
        }
        if(j+1 < N && graph[i][j+1] && !visited[i][j+1]) {
            dfs(i, j+1);
        }
    }

    for(let i = 0; i < M; i++){
        for(let j = 0; j < N; j++){
            if(graph[i][j] && !visited[i][j]){
                dfs(i, j);
                answer++;
            }
        }
    }
    return answer;
}

const filePath = process.platform === 'linux'? '/dev/stdin' : '백준/silver/1012/testcase.txt';
const [T, ...input] = require('fs').readFileSync(filePath).toString().trim().split('\n');
const arr = input.map(row => row.split(' ').map(el => +el));
for(let i = 0; i < arr.length; ){
    const [M, N, K] = arr[i];
    const cabbage = arr.slice(i+1, i+K+1);
    console.log(solve(M, N, cabbage));
    i += K+1;
}