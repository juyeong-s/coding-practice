function solve(N){
    const dp = [0, 0];
    for(let i = 2; i <= N; i++){
        dp[i] = dp[i-1] + 1;
        if(i % 2 === 0)
            dp[i] = Math.min(dp[i], dp[i / 2] + 1);
        if(i % 3 === 0)
            dp[i] = Math.min(dp[i], dp[i / 3] + 1);
    }
    return dp[N];
}

const filePath = process.platform === 'linux'? '/dev/stdin' : '백준/silver/1463/testcase.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = +input[0];
console.log(solve(N));