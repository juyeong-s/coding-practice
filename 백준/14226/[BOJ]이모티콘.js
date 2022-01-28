function solution(s){
    let visited = Array.from({ length : 1001 }, () => Array(1001).fill(0));
    visited[1][0] = 1;
    let needVisit = [[1, 0, 0]];
    
    while(needVisit.length > 0){
        const [node, clip, time] = needVisit.shift();
        if(node === s) return time;

        if(!visited[node][node]) {
            visited[node][node] = 1;
            needVisit.push([node, node, time + 1]);
        }

        if(clip > 0 && node + clip <= 1000){
            if(!visited[node + clip][clip]){
                visited[node + clip][clip] = 1;
                needVisit.push([node + clip, clip, time + 1])
            }
        }

        if(node > 0){
            if(!visited[node  - 1][clip]){
                visited[node - 1][clip] = 1;
                needVisit.push([node - 1, clip, time + 1])
            }
        }
    }
}

const fs = require('fs');
const input = fs.readFileSync('백준/14226/testcase3.txt').toString().trim().split('\n');
console.log(solution(+input[0]));