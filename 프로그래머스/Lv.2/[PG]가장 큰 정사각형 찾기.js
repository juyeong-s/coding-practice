function solution(board)
{
    let answer = 0;
    const row = board.length;
    const cols = board[0].length;

    if (row <= 1 || cols <= 1) return 1;

    for (let i = 1; i < row; i++) {
        for (let j = 1; j < cols; j++) {
            if (board[i][j]) {
                const up = board[i - 1][j];
                const left = board[i][j - 1];
                const cross = board[i - 1][j - 1];
                board[i][j] = Math.min(up, left, cross) + 1; // 전부 1이면 11
                                                             //          11 이니까 +1 해서 길이가 2가 됨을 업데이트 해줌.
                answer = Math.max(answer, board[i][j]);
            }
        }
    }
    return answer * answer;
}

// 만약, 전부 2로 업데이트되면 22
//                       21 가 되고, 결국 2+1이 돼서 길이는 3으로 업뎃됨