function solution(N, M, board) {
    let max = 0;
    const zeroPosition = [];
    const virus = [];
    // 0, 2 위치 찾기
    for(let  i = 0; i < N; i++){
        for(let  j = 0; j < M; j++) {
            if(!board[i][j]) zeroPosition.push([i, j]);
            else if(board[i][j] === 2) virus.push([i, j]);
        }
    }
    // 벽 세우기
    const combinations = getCombinations(zeroPosition, 3);
    for(const element of combinations){
        const copyBoard = board.map((el) => [...el]);
        for(const position of element)
            copyBoard[position[0]][position[1]] = 1;

        bfs(copyBoard, virus); // 바이러스 퍼뜨리기
        const zeroCnt = copyBoard.reduce((acc, curr) => acc + curr.filter((el) => !el).length, 0);
        if(zeroCnt > max) max = zeroCnt;
    }
   console.log(max);
}

function bfs(board, virus) {
    let needVisit = [...virus];
    while(needVisit.length > 0) {
        const [x, y] = needVisit.shift();
        if(x > 0 && board[x-1][y] === 0) {
            board[x-1][y] = 2;
            needVisit.push([x-1, y]);
        }
        if(x < N-1 && board[x+1][y] === 0) {
            board[x+1][y] = 2;
            needVisit.push([x+1, y]);
        }
        if(y > 0 && board[x][y-1] === 0) {
            board[x][y-1] = 2;
            needVisit.push([x, y-1]);
        }
        if(y < M-1 && board[x][y+1] === 0) {
            board[x][y+1] = 2;
            needVisit.push([x, y+1]);
        }
    }
}

function getCombinations(arr, n) {
    const results = [];
    if (n === 1) return arr.map((el) => [el]);

    arr.forEach((curr, index, origin) => {
      const rest = origin.slice(index + 1);
      const combinations = getCombinations(rest, n - 1);
      const attached = combinations.map((el) => [curr, ...el]);
      results.push(...attached);
    });
    return results;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = input[0].split(' ')[0];
const M = input[0].split(' ')[1];
const board = [];
for(let i = 1 ; i < input.length ; i++) board.push(input[i].split(' ').map((v) => +v));

solution(N, M, board);