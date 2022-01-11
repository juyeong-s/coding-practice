function pickNum(start, n) {
    let result = 0;
    for(; start <= n; start++){
        result += start;
        if(result === n) return true;
        if(result > n) return false;
    }
}

function solution(n) {
    let answer = 0;
    for(let i = 1; i <= n; i++) pickNum(i, n) ? answer++ : null;
    return answer;
}