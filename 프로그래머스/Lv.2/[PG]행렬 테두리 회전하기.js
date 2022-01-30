function solution(rows, columns, queries) {
    let board = Array.from({ length : rows + 1 }, (_) => Array(columns + 1).fill());
    board = board.map((arr, i) => arr.map((_, j) => i && j ? (i - 1) * columns + j : 0));
    const result = [];
    
    function getTurn(position){
        const stack = [];
        const [x1, y1, x2, y2] = position;
        for(let i = y1; i < y2; i++) stack.push(board[x1][i]);
        for(let i = x1; i < x2; i++) stack.push(board[i][y2]);
        for(let i = y2; i > y1; i--) stack.push(board[x2][i]);
        for(let i = x2; i > x1; i--) stack.push(board[i][y1]);
        
        result.push(Math.min(...stack));
        stack.unshift(stack.pop());
        
        for(let i = y1; i < y2; i++) board[x1][i] = stack.shift();
        for(let i = x1; i < x2; i++) board[i][y2] = stack.shift();
        for(let i = y2; i > y1; i--) board[x2][i] = stack.shift();
        for(let i = x2; i > x1; i--) board[i][y1] = stack.shift();
    }
    
    for(const q of queries) getTurn(q);
    return result;
}