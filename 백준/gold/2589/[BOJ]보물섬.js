function solve(h, w){
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, -1, 1];

    function bfs(i, j){
        const queue = [];
        const visited = Array.from({ length: h }, () => Array(w).fill(0));
        visited[i][j] = 1;
        queue.push([i, j]);

        while(queue.length){
            const [curX, curY] = queue.shift();
            for(let k = 0; k < 4; k++){
                const moveX = curX + dx[k];
                const moveY = curY + dy[k];
        
                if(moveX >= 0 && moveX < h && moveY >= 0 && moveY < w){
                    if(map[moveX][moveY] === 'L' && !visited[moveX][moveY]){
                        queue.push([moveX, moveY]);
                        visited[moveX][moveY] = visited[curX][curY] + 1;
                    }
                }
            }
        }
        return Math.max(...visited.flat());
    }

    let answer = 0;
    for(let i = 0; i < h; i++){
        for(let j = 0; j < w; j++){
            if(map[i][j] === 'L') answer = Math.max(answer, bfs(i, j));
        }
    }
    return answer-1;
}

const filePath = process.platform === 'linux' ? '/dev/stdin' : '백준/gold/2589/testcase.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [H, W] = input.shift().split(' ').map(Number);
const map = input.map((row) => row.split(''));
console.log(solve(H, W));