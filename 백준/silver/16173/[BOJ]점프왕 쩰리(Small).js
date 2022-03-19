function solve(){
    let needVisit = [[0, 0]];
    const visited = Array.from({ length: N }, () => new Array(N).fill(false));
    visited[0][0] = true;

    while(needVisit.length){
        const [x, y] = needVisit.shift();
        const curr = map[x][y];
        if(curr === -1) return "HaruHaru";

        const down = x + curr;
        const right = y + curr;
        if(down < N && !visited[down][y]) {
            visited[down][y] = true;
            needVisit = [[down, y], ...needVisit];
        }
        if(right < N && !visited[x][right]) {
            visited[x][right] = true;
            needVisit = [[x, right], ...needVisit];
        }
    }

    return "Hing";
}

const filePath = process.platform === 'linux'? '/dev/stdin' : '백준/silver/16173/testcase.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = +input[0];
const map = input.slice(1).map((row) => row.split(' ').map(Number));
console.log(solve());
