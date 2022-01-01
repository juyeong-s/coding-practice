function solution(m, n, board) {    // 성공
    board = board.map(x => x.split(''));
    while(true){
        // 블록 찾기
        let blockIdxSet = [];
        for(let i=0; i<m-1; i++){
            for(let j=0; j<n-1; j++){
                if(board[i][j]
                   && board[i][j] === board[i+1][j]
                   && board[i][j] === board[i][j+1]
                   && board[i][j] === board[i+1][j+1]){
                    blockIdxSet.push([i, j, i+1, j+1]);
                }
            }
        }
        if(!blockIdxSet.length) return board.reduce((acc, curr) => acc + curr.filter((block) => !block).length, 0);
        // 블록 지우기
        for(const block of blockIdxSet){
            board[block[0]][block[1]] = 0;
            board[block[0]][block[3]] = 0;
            board[block[2]][block[1]] = 0;
            board[block[2]][block[3]] = 0;
        }
        // 블록 내리기
        let count = 1;
        while(count > 0){
            count=0;
            for(let i=1; i<m; i++){
                for(let j=0; j<n; j++){
                    if(!board[i][j] && board[i-1][j]){   // 0일 경우
                        board[i][j] = board[i-1][j];
                        board[i-1][j] = 0;
                        count++;
                    }
                }
            }
        }
    }
}
