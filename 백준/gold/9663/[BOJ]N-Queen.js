function solve(N){
    const visited = Array.from({ length : N });
    let answer = 0;
    function isValid(x){
        for(let i = 0; i < x; i++){
            if(visited[x] === visited[i]) return false;
            if(Math.abs(visited[x] - visited[i]) === x - i) return false;
        }
        return true;
    }

    function recursion(x){
        if(x === N) answer++;
        else{
            for(let i = 0; i < N; i++){
                if(visited[x]) continue;
                visited[x] = i;
                if(isValid(x)) recursion(x + 1);
                visited[x] = 0;
            }
        }
    }
    recursion(0);
    return answer;
}

const filePath = process.platform === 'linux' ? '/dev/stdin' : '백준/gold/9663/testcase.txt';
const N = require('fs').readFileSync(filePath).toString().trim();
console.log(solve(+N));
// 일직선, 대각선에 위치하지 않도록