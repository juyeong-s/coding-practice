function solution(n, left, right) {
    const arr = [];

    for(let i = left; i <= right; i++){
        const x = Math.floor(i / n);    // 현재 행의 인덱스와
        const y = i % n;            // 열의 인덱스 중에
        arr.push(Math.max(x, y) + 1);   // 더 큰 값을 고름
    }
    return arr;
}

// 시간, 메모리 초과 코드
function solution(n, left, right) {
    const emptyArray = Array.from({ length: n }, () => Array(n).fill());
    for(let i = 0; i < n; i++){
        for(let j = 0; j <= i; j++){
            emptyArray[i][j] = i + 1;
            emptyArray[j][i] = i + 1;
        }
    }
    const arr = emptyArray.flat();
    return arr.slice(left, right + 1);
}
