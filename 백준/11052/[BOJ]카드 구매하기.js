function solution(N, price){
    let dp = [0, ...price];
    for(let i = 2; i <= N; i++){
        for(let j = 1; j < i; j++)
            dp[i] = Math.max(dp[i], dp[j] + dp[i - j]); // j + (i-j) = i 이기 때문에, i개의 카드를 뽑기 위한 조합 별로 j를 증가시켜서 최대 값을 계속 업데이트 해준다.
    }
    return dp[N];
}

const fs = require('fs');
const input = fs.readFileSync('백준/11052/testcase.txt').toString().trim().split('\n');
const N = +input[0];
const price = [...input[1].split(' ')].map((el) => +el);
console.log(solution(N, price))