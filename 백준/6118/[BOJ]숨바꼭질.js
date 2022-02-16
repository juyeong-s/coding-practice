function solution(N, M, barn){
    let graph = Array.from({ length: N+1 }, () => Array());
    for(const edge of barn){
        const [a_i, b_i] = edge;
        graph[a_i].push(b_i);
        graph[b_i].push(a_i);
    }
 
    let visited = [];
    function bfs(){
        visited[1] = 1;
        let needVisit = [1];
        while(needVisit.length > 0){
            const node = needVisit.shift();
            for(const adj of graph[node]){
                if(!visited[adj]){
                    visited[adj] = visited[node] + 1;
                    needVisit.push(adj);
                }
            }
        }
    }
    bfs();
    const max = Math.max(...visited.slice(1));
    console.log(visited.indexOf(max), max - 1, visited.filter((el) => el === max).length);
}

const filePath = process.platform === 'linux'? '/dev/stdin' : '백준/6118/testcase.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = +input[0].split(' ')[0];
const M = +input[0].split(' ')[1];
const barn = input.slice(1).map(el => el.split(' ').map(num => +num));
solution(N, M, barn);