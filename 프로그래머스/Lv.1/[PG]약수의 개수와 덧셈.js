function solution(left, right) {
    let answer = 0;
    for(let i = left; i <= right; i++){
        let cnt = 0;
        for(let j = 1; j <= i; j++){
            if(i % j === 0) cnt++;
        }
        if(cnt % 2 === 0) answer += i;
        else answer -= i;
    }
    return answer;
}

// 다른사람 풀이 - 루트가 정수이면 약수의 개수가 홀수이다.
function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}