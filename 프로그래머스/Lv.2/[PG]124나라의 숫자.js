function solution(n) {
    const num124 = ['4', '1', '2'];
    let result = "";
    while(n > 0){
        result = num124[n % 3] + result;
        n = Math.floor((n - 1) / 3);
    }
    return result;
}

// 다른 사람 풀이
function solution(n) {
    return n === 0 ? '' : solution(parseInt((n - 1) / 3)) + [1, 2, 4][(n - 1) % 3];
}