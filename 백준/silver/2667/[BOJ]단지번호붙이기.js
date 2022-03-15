function solve(){
    const dx = [0, -1, 0, 1];
    const dy = [-1, 0, 1, 0]
    const visited = Array.from({ length: N }, () => Array(N).fill(false));
    function dfs(i, j){
        visited[i][j] = true;
        cnt++;

        for(let k = 0; k < 4; k++){
            const moveX = i + dx[k];
            const moveY = j + dy[k];
            if(moveX >= 0 && moveY >= 0 && moveX < N && moveY < N){
                if(!visited[moveX][moveY] && board[moveX][moveY]) dfs(moveX, moveY);
            }
        }
    }

    const answer = [];
    let cnt = 0;
    for(let i = 0; i < N; i++){
        for(let j = 0; j < N; j++){
            if(!visited[i][j] && board[i][j]){
                cnt = 0;
                dfs(i, j);
                answer.push(cnt);
            }  
        }
    }

    answer.sort((a, b) => a-b);
    console.log(answer.length);
    for(const n of answer){
        console.log(n);
    }
}

const filePath = process.platform === 'linux'? '/dev/stdin' : '백준/silver/2667/testcase.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = +input[0];
const board = input.slice(1).map((row) => row.split('').map((el) => +el));
solve();