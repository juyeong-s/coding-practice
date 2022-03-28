function solve(){
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    const visited = Array.from({ length: n }, () => []);
    const needVisit = [[0, 0, 1]];

    while(needVisit.length){
        const [i, j, distance] = needVisit.shift();
        if(i === n - 1 && j === m - 1){
            return distance;
        }
        if(!visited[i][j]){
            visited[i][j] = true;
            for(let k = 0; k < 4; k++){
                const [moveX, moveY] = [i + dx[k], j + dy[k]];
                if(moveX >= 0 && moveX < n && moveY >= 0 && moveY < m){
                    if(maze[moveX][moveY] && !visited[moveX][moveY]){
                        needVisit.push([moveX, moveY, distance+1]);
                    }
                }
            }
        }
    }
}

const filePath = process.platform === 'linux'? '/dev/stdin' : '백준/silver/2178/testcase.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [n, m] = input.shift().split(' ').map(el => +el);
const maze = input.map(row => row.split('').map(el => +el));
console.log(solve());