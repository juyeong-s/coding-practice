function solution(key, lock) {
    const N = key.length;
    const M = lock.length;
    const keyCol = key[0].length;
    const board = Array.from({ length : M * 3 }, () => Array(M * 3).fill(null));
    
    for(let i = M; i < M * 2; i++) {
        for(let j = M; j < M * 2; j++) {
             board[i][j] = lock[i - M][j - M];
         }
    }
    
    function isCorrect(copyLock){
        for(let i = M; i < M * 2; i++) {
            for(let j = M; j < M * 2; j++) {
                if(copyLock[i][j] !== 1) return false;
            }
        }
        return true;
    }
    
    function moveKey(){ // 한칸씩 이동
        const row = board.length, col = board[0].length;
        for(let i = 0; i <= row - N; i++){
            for(let j = 0; j <= col - keyCol; j++){
                const copyLock = board.map((el) => el.slice()); // null은 빼고 자름
                for(let k = 0; k < N; k++){
                    for(let z = 0; z < N; z++){
                        if(copyLock[i + k][j + z] === 1 && key[k][z] === 1) copyLock[i + k][j + z] = 2;
                        else if(copyLock[i + k][j + z] === 0 && key[k][z] === 1) copyLock[i + k][j + z] = 1;
                    }
                }
                if(isCorrect(copyLock)) return true;
            }
        }
        return false;
    }
    
    function rotatekey(){ // 90도 회전
        let rotated = Array.from({ length: N }, () => Array(N).fill(null));
        for(let i = 0; i < N; ++i){
            for(let j = 0; j < N; ++j){
                rotated[i][j] = key[N - j - 1][i];
            }
        }
        return rotated;
    }
    
    for(let i = 0; i < 4; i++){
        if(!moveKey()) key = rotatekey();
        else return true;
    }
    return false;
}

// 한칸씩 이동시키고 없으면, 90도씩 회전하고 또 이동.