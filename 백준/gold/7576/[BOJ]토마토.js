function solve(){
    function isInside(x, y){
        return (x >= 0 && x < n && y >= 0 && y < m);
    }

    let day = 0;
    function bfs(){
        const dx = [-1, 0, 1, 0];
        const dy = [0, 1, 0, -1];
        let start = 0; 
        while(true){
            const len = oneIdx.length;
            let change = false;
            for(let i = start; i < len; i++){
                const[x, y] = oneIdx[i];
                for(let j = 0; j < 4; j++){
                    const [moveX, moveY] = [x + dx[j], y + dy[j]];

                    if(isInside(moveX, moveY) && !tomato[moveX][moveY]){
                        change = true;
                        tomato[moveX][moveY] = day + 1;
                        oneIdx.push([moveX, moveY]);
                    }
                }
            }
            if (!change) break;
            day++;
            start = len;
        }
    }

    const oneIdx = [];
    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            if(tomato[i][j] === 1){
                oneIdx.push([i, j]);
            }
        }
    }
    bfs();

    for(const row of tomato){
        if(row.includes(0)) return -1;
    }
    return day;
}

const filePath = process.platform === 'linux'? '/dev/stdin' : '백준/gold/7576/testcase.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [m, n] = input.shift().split(' ').map(el => +el);
const tomato = input.map(row => row.split(' ').map(el => +el));
console.log(solve());