function solve1(){  // 풀이 1
    const needVisit = [[n, 0]];
    const visited = [];
    while(needVisit.length){
        const [node, cnt] = needVisit.shift();
        if(!visited[node]){
            visited[node] = true;
            if(node === k) {
                return cnt;
            }
            if(node - 1 >= 0 && !visited[node - 1]){
                needVisit.push([node-1, cnt+1])
            }
            if(node + 1 <= 100000 && !visited[node + 1]){
                needVisit.push([node+1, cnt+1])
            }
            if(node * 2 <= 100000 && !visited[node * 2]){
                needVisit.push([node*2, cnt+1])
            }
        }
    }
}


function solve2(){  // 풀이 2
    const needVisit = [[n, 0]];
    const visited = [];
    visited[n] = true;
    while(needVisit.length){
        const [node, cnt] = needVisit.shift();
        if(node === k) return cnt;
 
        const adj = [node - 1, node + 1, node * 2];
        for(const next of adj){
            if(!visited[next] && next >= 0 && next <= 100000){
                visited[next] = true;
                needVisit.push([next, cnt+1]);
            }
        }
    }
}

const filePath = process.platform === 'linux'? '/dev/stdin' : '백준/silver/1697/testcase.txt';
const [n, k] = require('fs').readFileSync(filePath).toString().trim().split('\n')[0].split(' ').map(el => +el);
console.log(solve1());
console.log(solve2());
