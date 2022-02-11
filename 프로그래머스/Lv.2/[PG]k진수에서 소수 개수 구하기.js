function solution(n, k) { // 첫 풀이
    let answer = 0;
    const regExp = /[1-9]+/g;
    const find = n.toString(k).match(regExp).map((el) => +el);
    for(const num of find){
        let state = true;
        if(num === 1) continue;
        if(num === 2) {
            answer++;
            continue;
        }
        for(let i = 2; i <= Math.sqrt(num); i++){
            if(num % i === 0) state = false;
        }
        if(state) answer++;
    }
    return answer;
}

// 리팩토링
function isPrime(num){
    if(num === 1) return false;
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0) return false;
    }
    return true;
}

function solution(n, k) {
    const regExp = /[1-9]+/g;
    const find = n.toString(k).match(regExp).filter((el) => isPrime(+el));
    return find.length;
}