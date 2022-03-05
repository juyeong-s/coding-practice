function solution(a, b) {
    let sum = 0;
    if(a > b){
        let temp = 0;
        temp = a;function solution(a, b){
    let sum = 0;
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) sum += i;
    return sum;
}
        a = b;
        b = temp;
    }
    for(let i = a; i <= b; i++){
        sum += i;
    }
    return sum;
}

// 다른 사람 풀이
function solution(a, b){
    let sum = 0;
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) sum += i;
    return sum;
}