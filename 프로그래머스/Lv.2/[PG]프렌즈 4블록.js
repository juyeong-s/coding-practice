function findBlock(m, n, board){
    let blockIdxArray = [];
    for(let i=0; i<m-1; i++){
        for(let j=0; j<n-1; j++){
            if(board[i][j]
               && board[i][j] === board[i+1][j]
               && board[i][j] === board[i][j+1]
               && board[i][j] === board[i+1][j+1]){
                blockIdxArray.push([i, j, i+1, j+1]);
            }
        }
    }
    return blockIdxArray;
}

function deleteBlock(blockIdxArray, board){
    for(const block of blockIdxArray){
        board[block[0]][block[1]] = 0;
        board[block[0]][block[3]] = 0;
        board[block[2]][block[1]] = 0;
        board[block[2]][block[3]] = 0;
    }
}
function reorderBlock(m, n, board){
    let count = 1;
    while(count > 0){
        count = 0;
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

function solution(m, n, board) {    // 성공
    board = board.map(x => x.split(''));
    while(true){
        // 블록 찾기
        let blockIdxArray = findBlock(m, n, board);
        if(!blockIdxArray.length) return board.reduce((acc, curr) => acc + curr.filter((block) => !block).length, 0);
        // 블록 지우기
        deleteBlock(blockIdxArray, board);
        // 블록 내리기
        reorderBlock(m, n, board);
    }
}
