function solution(absolutes, signs) {
    return absolutes.map((n, idx) => signs[idx] ? n : -n).reduce((acc, curr) => acc + curr, 0);
}

// 다른 사람 풀이
function solution(absolutes, signs) {
    return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
}