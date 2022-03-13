function solve(){
    const dp = [];
    dp[0] = score[0];
    dp[1] = Math.max(score[0] + score[1], score[1]);
    dp[2] = Math.max(score[0] + score[2], score[1] + score[2]);

    for(let i = 3; i < n; i++){
        dp[i] = Math.max(dp[i-2] + score[i], dp[i-3] + score[i] + score[i-1]);
    }
    return dp[n - 1];
}

const filePath = process.platform === 'linux'? '/dev/stdin' : '백준/silver/2579/testcase.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const n = +input[0];
const score = input.slice(1).map((el) => +el);
console.log(solve());