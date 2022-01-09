function solution(n) {
    let result = new Array(n).fill().map((_, i) => new Array(i + 1));
    let count = 0;
    let x = -1;
    let y = 0;
    
    while(n > 0){
        for (let i = 0; i < n; i++) result[++x][y] = ++count;
        for (let i = 0; i < n-1; i++) result[x][++y] = ++count;
        for (let i = 0; i < n-2; i++) result[--x][--y] = ++count;
        n -= 3;
    }
    return result.flatMap(x => x);
}