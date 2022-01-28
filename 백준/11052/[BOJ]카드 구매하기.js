function solution(N, price){
    let dp = [0, ...price];
    for(let i = 2; i <= N; i++){
        for(let j = 1; j < i; j++)
            dp[i] = Math.max(dp[i], dp[j] + dp[i - j]); // j + (i-j) = i이기 때문에, i 개의 카드를 뽑기 위한 조합 별로 j를 증가시켜서 최댓값을 계속 업데이트해준다.
    }
    return dp[N];
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = +input[0];
const price = [...input[1].split(' ')].map((el) => +el);
console.log(solution(N, price));